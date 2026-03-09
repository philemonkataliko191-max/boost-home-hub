

## Plan : Mise à jour massive ImmoBoost AI — Architecture Impériale

### État actuel

La majorité des fonctionnalités demandées sont **déjà implémentées** :
- FeatureGuard (verrou VIP Noir/Or) — fait
- Numérotation 1-100 avec fonction PostgreSQL — fait
- Badge Fondateur #001 — fait
- Certificat d'Authenticité avec QR, téléchargement HD et partage WhatsApp — fait
- Authentification email avec pages dédiées — fait
- VIPContext avec Supabase — fait
- MemberCounter avec barre de progression — fait
- Vision Scanner (scan simulé avec résultats) — fait
- Message de bienvenue VIP avec numéro — fait

### Ce qui reste à implémenter

#### 1. Assistant Coach IA (ChatWidget → IA réelle)
Remplacer le chatbot simulé par un vrai assistant IA utilisant Lovable AI (Gemini).
- Créer une edge function `supabase/functions/chat/index.ts` connectée au gateway Lovable AI
- Réécrire `ChatWidget.tsx` avec streaming SSE token par token
- Prompt système orienté immobilier Congo/prestige

#### 2. IA Estimator (estimation de prix intelligente)
Enrichir le Vision Scanner pour utiliser l'IA au lieu de valeurs statiques.
- Créer une edge function `supabase/functions/estimate/index.ts` 
- Ajouter un formulaire dans VisionScanner (type de bien, superficie, localisation)
- Afficher les résultats dynamiques (prix estimé, solidité, potentiel) via l'IA

#### 3. Synchronisation GitHub
- La synchronisation GitHub se fait via les paramètres du projet Lovable (Settings → GitHub → Connect). Ce n'est pas du code à écrire, c'est une configuration à activer dans l'interface Lovable.

#### 4. Bouton scanner avec génération de certificat
Après le scan, permettre de générer un certificat pour le bien scanné (lier VisionScanner → ImmoBoostCertificate).

### Hors périmètre technique Lovable (limitations)
Ces éléments ne peuvent pas être implémentés dans Lovable :
- **Notifications Push** : nécessite un service worker natif et un service tiers (OneSignal, Firebase)
- **Mode Hors-Ligne** : nécessite un service worker complet
- **Passerelle Mobile Money réelle** : nécessite une intégration avec un fournisseur de paiement (Flutterwave, etc.) et des clés API
- **Galerie 360°** : nécessite des assets 360° et un viewer spécialisé
- **Publicité Prioritaire** : nécessite un ad server

### Étapes d'implémentation

1. **Edge function `chat`** — Assistant Coach IA avec streaming
2. **Refonte `ChatWidget.tsx`** — Interface chat avec streaming temps réel
3. **Edge function `estimate`** — Estimateur IA immobilier
4. **Refonte `VisionScanner.tsx`** — Formulaire + appel IA + génération certificat
5. **Mise à jour `config.toml`** — Enregistrer les 2 nouvelles fonctions

### Architecture technique

```text
Client                    Edge Functions              Lovable AI Gateway
──────                    ──────────────              ──────────────────
ChatWidget.tsx  ───SSE──► chat/index.ts  ──────────► gemini-3-flash
VisionScanner.tsx ──────► estimate/index.ts ────────► gemini-3-flash
```

