# SUIVI-PROJET
_Dernière mise à jour : 2026-11-06_

## Objectif
Refonte du portfolio (Next.js) pour présenter deux profils au même niveau : Product Builder No-code et développeur React / Next.js. Contenu issu du CV 2026, direction « ludique / geek » décrite dans `DESIGN.md`.

## Fait
- Tokens CSS (`src/styles/tokens.scss`), `DESIGN.md`, Sass installé, polices via `next/font` (Open Sans, Lilita One en remplacement de Lovelo).
- Tailwind retiré ; SCSS BEM global (`globals.scss`, `_mixins.scss`), snap scroll (mandatory desktop, proximity ailleurs).
- Composants refaits en dossier par composant : Navigation, Hero, About (Profil), Projects, Experience, Skills, Contact, Footer, + SectionHeading et Tag.
- Contenu réécrit en français depuis le CV ; compteur d'expérience (`dayjs`) retiré.
- Projets : 4 du CV + Stemz, Color Pop, Site MwM, Leatherspa ; filtre par profil (un projet peut avoir les deux) ; PlayOff en orange (projet de formation).
- Vidéos de démo, Xperience et carte GitHub supprimées.
- Bug polices corrigé (variables `next/font` déplacées sur `<html>`).
- Hero : accroche « Vous avez l'idée ? Voyons comment la réaliser. » ; présentation complète déplacée dans la section Profil, avec 3 chiffres clés (5 ans, 6 devs, 10 ans) à la place des cartes.
- Dépendances : `next` 15.5.29 ; `nodemailer` retiré (pas de formulaire de contact) ; `npm run build` OK.
- Hero : animation d'entrée « briques » + pile de tétrominos qui tombe au fond (CSS, `prefers-reduced-motion` respecté) ; badges « Profil » retirés (doublon du sous-titre) ; tient dans 100dvh en mobile (sauf iPhone SE, accepté).
- Compétences : cartes en 2×2 dès la tablette, badges en grille 2 colonnes.
- Nouvelle section Offres (« Ce que je livre ») : 6 cartes colorées avec délai indicatif, entrée « Offres » dans la navigation.
- Favicon `icon.svg` (AB jaune sur rose) ; images de partage OpenGraph et Twitter 1200×630 générées par Next (Lilita One embarquée dans `src/app/fonts/`), balises `twitter:card` ajoutées.
- SEO : `robots.ts`, `sitemap.ts`, canonical, JSON-LD `Person`, titre raccourci (`src/app/site.ts` centralise URL et titre).

## En cours
- Rien d'ouvert.

## Prochaine étape
- Contrôle visuel complet dans le navigateur (`npm run dev`) : desktop, mobile, snap scroll sur Projets et Expérience, section Offres.
- Vérifier que les polices (Lilita One / Open Sans) s'affichent bien et décider pour Lovelo.

## Décisions (avec le pourquoi)
- Site en français : le CV et le DESIGN.md le sont.
- Snap scroll `mandatory` seulement ≥ 1024 px, désactivé avec `prefers-reduced-motion` : évite de piéger la lecture sur mobile.
- Entreprise (MWM, LeatherSpa) affichée en ligne de contexte, pas en tag : un tag = une catégorie de profil.
- Barres de pourcentage de compétences retirées : peu informatives et portées par la couleur seule.
- Vidéos retirées : chaque projet a son site en ligne, et elles alourdissaient le dépôt.

- `npm audit fix --force` refusé : imposerait Next 16 et rétrograderait typescript-eslint pour des alertes sans impact (postcss embarqué dans Next au build, minimatch en lint dev).
- Yousing retiré des projets : le site yousing.ai n'est plus en ligne.
- Pas de formulaire de contact : LinkedIn, téléphone et mail suffisent, donc `nodemailer` retiré.
- Offres sans prix, avec « délais indicatifs » : pas d'engagement chiffré avant d'avoir des durées réelles.
- Badges du hero supprimés : le sous-titre suffit, le code couleur des profils reste dans le filtre Projets.

## Points ouverts / blocages
- À faire hors code : ajouter le site dans Google Search Console et soumettre le sitemap ; vérifier la redirection www / sans www dans Vercel.
- Favicon : dans un SVG, Lilita One n'est pas chargée par le navigateur (repli Arial Black) ; convertir « AB » en tracé si le rendu déçoit.
- Délais de la section Offres : ordres de grandeur à ajuster (`offers` dans `Offers.tsx`).
- Contrôle visuel mobile à faire pour le hero (pile de briques) et les nouvelles cartes.
- `npm audit` : 9 alertes restantes (postcss dans Next, minimatch dans typescript-eslint) ; à rechecker à la prochaine release 15.x de Next.
- Lovelo : licence web à acheter, sinon on garde Lilita One.
- Logos de `public/assets/icons/` inutilisés : supprimer ou utiliser en vignettes ?
- PlayOff : y a-t-il un volet « Club » en plus d'« Amateurs » à présenter ?
- Projets PlayOff et Agents IA sans visuel ni lien.
- Xperience mis hors ligne : supprimer le sous-domaine chez l'hébergeur.
