

# Plan : ImmoBoost AI — Architecture Impériale & Traçabilité 1-100

## Contexte

L'application est actuellement un site vitrine frontend-only (React + Vite). Aucun backend (Supabase/Cloud) n'est connecté. Le plan ci-dessous implémente toutes les fonctionnalités demandées côté client avec `localStorage` pour la persistance des membres.

> **Limitation importante** : Sans backend, la numérotation 1-100 et les paiements sont simulés localement. Pour une vraie traçabilité multi-utilisateurs et des paiements Mobile Money, il faudra connecter Supabase/Cloud dans une étape ultérieure.

---

## 1. Nouveaux Composants

### A. `FounderBadge001.tsx`
- Code exact fourni par l'utilisateur (Crown + badge noir/or #001)
- Intégré dans la Navbar à côté du logo

### B. `FeatureGuard.tsx`
- Wrapper qui applique `backdrop-blur-[15px]` + overlay noir/or avec icône Lock
- Bouton "Devenir VIP" qui ouvre un dialog d'inscription simulée
- Vérifie `localStorage` pour le statut VIP
- Utilisé pour envelopper `VisionScanner` et `FeaturedProperties`

### C. `MemberCounter.tsx`
- Compteur affichant "XX/100 Membres Élite"
- Barre de progression dorée
- Numéro unique attribué (#001 à #100) stocké en localStorage
- Bloque les inscriptions au-delà de 100 (simulé)

### D. `ImmoBoostCertificate.tsx`
- Composant portrait : fond noir, double bordure dorée
- Icône MapPin pour localisation, ID unique (#001-#100)
- QR Code central généré via une lib inline (SVG)
- Infos villa : nom, localisation, score IA

### E. `ActionsCertificat.tsx`
- Bouton WhatsApp vert (MessageCircle) avec message pré-rempli : `Voici le Certificat ImmoBoost AI #${certNumber} pour la villa ${villaName}...`
- Bouton Télécharger : capture du certificat en PNG HD via `html2canvas` (à installer)
- Les deux boutons stylisés noir/or

### F. `VIPRegistrationDialog.tsx`
- Dialog d'inscription VIP : nom, téléphone, email
- Simule un paiement Mobile Money (animation de chargement + confirmation)
- Attribue un numéro membre unique
- Affiche le message de bienvenue : "Félicitations, vous êtes le Membre Élite #[ID] sur 100..."
- Signé "Philémon - Fondateur #001"

---

## 2. Améliorations des Composants Existants

### `VisionScanner.tsx`
- Enveloppé dans `FeatureGuard` pour les non-VIP
- Le bouton "Lancer le Scan" déclenche une animation de scan avec barre de progression
- Affiche des résultats simulés : prix estimé, solidité des matériaux, score de confiance

### `FeaturedProperties.tsx`
- Enveloppé dans `FeatureGuard` pour les non-VIP
- Ajout d'un numéro de certification (#001-#100) sur chaque villa
- Bouton "Voir Certificat" ouvrant `ImmoBoostCertificate` dans un dialog

### `Navbar.tsx`
- Ajout du `FounderBadge001` à côté du logo
- Le bouton "Connexion" ouvre `VIPRegistrationDialog`
- Affiche le numéro membre si connecté

### `Index.tsx`
- Ajout de `MemberCounter` entre HeroPrestige et VisionScanner
- Intégration des guards sur les sections protégées

---

## 3. État Global VIP (Context)

### `VIPContext.tsx`
- React Context stockant : `isVIP`, `memberNumber`, `memberName`
- Persisté dans `localStorage`
- Expose `registerMember()` et `checkVIPStatus()`
- Compteur simulé de membres (incrémenté à chaque inscription locale)

---

## 4. Nouvelle Dépendance

- `html2canvas` — pour le téléchargement du certificat en PNG HD

---

## 5. Fichiers Créés/Modifiés

| Action | Fichier |
|--------|---------|
| Créer | `src/components/FounderBadge001.tsx` |
| Créer | `src/components/FeatureGuard.tsx` |
| Créer | `src/components/MemberCounter.tsx` |
| Créer | `src/components/ImmoBoostCertificate.tsx` |
| Créer | `src/components/ActionsCertificat.tsx` |
| Créer | `src/components/VIPRegistrationDialog.tsx` |
| Créer | `src/contexts/VIPContext.tsx` |
| Modifier | `src/components/Navbar.tsx` — badge fondateur + dialog VIP |
| Modifier | `src/components/VisionScanner.tsx` — scan interactif + guard |
| Modifier | `src/components/FeaturedProperties.tsx` — certificats + guard |
| Modifier | `src/pages/Index.tsx` — MemberCounter + VIPProvider |
| Modifier | `src/App.tsx` — VIPProvider wrapper |

