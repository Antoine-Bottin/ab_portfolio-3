# DESIGN.md — Portfolio Antoine Bottin

Direction : **ludique / geek**, dans la continuité du CV « Product Builder » (maximaliste, flat, stickers, briques Lego). Le portfolio présente deux profils au même niveau : **développeur React/Next.js** et **Product Builder**.

Source de vérité des valeurs : `src/styles/tokens.scss`. Ne jamais écrire une couleur, une taille ou une ombre en dur dans un composant : utiliser les variables.

## Principes (anti « AI slop »)

- Pas de dégradés violet/bleu, pas de glassmorphism, pas de cartes grises arrondies identiques à ombre diffuse.
- Formes franches : contours encre épais (`--border`), ombres **dures décalées** (`--shadow-*`), sans flou.
- Une seule couleur d'accent dominante par section, les autres en touches (tags, briques, pastilles).
- Illustrations flat et motifs (briques Lego, pois, éclairs, étoiles) en décor, jamais porteurs d'information.
- Textes réels et précis (projets, chiffres, stack) ; pas de formules génériques (« passionné par l'innovation »).
- Animation sobre : petit rebond `--ease-pop` au survol, pas de parallaxe ni d'apparitions en cascade systématiques.

## Couleurs

Palette : crème `#f9ede8`, bleu pétrole `#23506a`, encre `#15112b`, jaune `#ffd23f`, rose `#ff4fa3`, orange `#ff7a30`, cyan `#3ec6e0`, vert `#7bd389`.

Règles de contraste (ratios mesurés) :

| Usage | Autorisé | Interdit |
|---|---|---|
| Texte sur crème | encre (15.96), bleu pétrole (7.54), `pink-ink` (5.55), `orange-ink` (5.46) | rose, orange, cyan, jaune, vert (< 3:1) |
| Texte sur bleu pétrole | blanc (8.65), jaune (5.99), crème | rose (2.84), encre (2.12) |
| Texte sur rose | encre (6.02) | blanc (3.04) pour du texte courant |
| Texte sur jaune / cyan / vert / orange | encre uniquement | blanc, crème |

- Rose, orange, cyan, jaune, vert sont des **fonds** (boutons, tags, briques) avec texte et contour en encre.
- Pour un lien ou un mot coloré sur fond clair : `--palette-pink-ink` / `--palette-orange-ink`.
- Ne jamais porter une information par la couleur seule.

## Typographie

- Titres, nom, sections : **Lovelo Black** (`--font-display`), capitales. ⚠️ Lovelo est une police à licence : vérifier l'usage web, sinon alternative libre (ex. Lilita One) déjà prévue dans la pile de fallback.
- Corps : **Open Sans** (`--font-body`).
- Tailles via `--font-size-*` uniquement, en rem.

## Composants récurrents

- **Tag techno** : pastille `--radius-pill`, fond d'une couleur brique, texte encre, contour `--border`, police display petite.
- **Carte projet** : fond `--color-surface`, `--border`, `--shadow-md`, rebond au survol (translation de l'ombre).
- **Bloc héros** : fond `--color-bg-inverse`, titre en `--color-text-highlight` avec `--shadow-yellow`.
- **Briques Lego** : séparateurs de sections et décor, via `--color-brick-*`.

## Conventions de code

- Composants React en **fonctions fléchées**, un dossier par composant (`SlotChip/SlotChip.tsx` + `styles.scss`).
- **SCSS + BEM** (`bloc`, `bloc__element`, `bloc--modificateur`), **pas de Tailwind**.
- Unités en **rem** (`html { font-size: 62.5% }`, 1rem = 10px). `px` toléré uniquement pour un filet de 1px, avec commentaire.
- Commits : `feat(composant): détail`.
- Accessibilité : viser RGAA 4.1.2 AA (focus visible avec `--color-focus`, contrastes ci-dessus, `prefers-reduced-motion` respecté, textes alternatifs sur les illustrations porteuses de sens).
