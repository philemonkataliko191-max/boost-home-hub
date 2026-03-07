

## Plan: Update Contact Numbers, Luxury Prizes & Enhanced Celebrations

### 1. Update all phone numbers to +243 974145850
Replace `212600000000` with `243974145850` in three files:
- **`src/pages/Bonus.tsx`** (WhatsApp link in win dialog)
- **`src/components/WhatsAppButton.tsx`** (floating WhatsApp button)
- **`src/components/Footer.tsx`** (WhatsApp social icon)

### 2. Replace wheel segments with luxury prizes
In `src/pages/Bonus.tsx`, update the `SEGMENTS` array:
- "Expertise Offerte" (🏛️)
- "Visite en Hélicoptère" (🚁)
- "Accès VIP Lounge" (🥂)
- "Frais de Notaire Réduits" (📜)

### 3. Enhance confetti to gold-only colors
Update `fireConfetti` colors to all-gold palette (`#FFD700`, `#DAA520`, `#F5E6C8`, `#C5930C`) with higher particle count for more impact.

### 4. Add celebration sound on win
Play a short win sound effect using the Web Audio API (generate a pleasant chime with oscillators -- no external file needed). Trigger it alongside confetti when spin completes.

### 5. Ensure WhatsApp link includes the prize won
The win dialog WhatsApp link will include the result in the pre-filled message text, e.g. `?text=Bonjour ! J'ai gagné "{result}" sur la roue de la fortune`.

