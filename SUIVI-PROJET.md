# SUIVI-PROJET
_Dernière mise à jour : 2026-11-06_

## Objectif
Refonte du portfolio (Next.js) pour présenter deux profils au même niveau : Product Builder No-code et développeur React / Next.js. Contenu issu du CV 2026, direction « ludique / geek » décrite dans `DESIGN.md`.

## Fait
- Tokens CSS (`src/styles/tokens.scss`), `DESIGN.md`, Sass installé, polices via `next/font` (Open Sans, Lilita One en remplacement de Lovelo).
- Tailwind retiré ; SCSS BEM global (`globals.scss`, `_mixins.scss`), snap scroll (mandatory desktop, proximity ailleurs).
- Composants refaits en dossier par composant : Navigation, Hero, About (Profil), Projects, Experience, Skills, Contact, Footer, + SectionHeading et Tag.
- Contenu réécrit en français depuis le CV ; compteur d'expérience (`dayjs`) retiré.
- Projets : 4 du CV + Stemz, Color Pop, Site MwM, Yousing, Leatherspa ; filtre par profil (un projet peut avoir les deux) ; PlayOff en orange (projet de formation).
- Vidéos de démo, Xperience et carte GitHub supprimées.
- Bug polices corrigé (variables `next/font` déplacées sur `<html>`).
- Hero : accroche « Vous avez l'idée ? Voyons comment la réaliser. » ; présentation complète déplacée dans la section Profil, avec 3 chiffres clés (5 ans, 6 devs, 10 ans) à la place des cartes.
- Dépendances : `next` 15.5.29, `nodemailer` 10.3.1 ; `npm run build` OK.

## En cours
- Rien d'ouvert.

## Prochaine étape
- Contrôle visuel complet dans le navigateur (`npm run dev`) : desktop, mobile, snap scroll sur Projets et Expérience.
- Vérifier que les polices (Lilita One / Open Sans) s'affichent bien et décider pour Lovelo.

## Décisions (avec le pourquoi)
- Site en français : le CV et le DESIGN.md le sont.
- Snap scroll `mandatory` seulement ≥ 1024 px, désactivé avec `prefers-reduced-motion` : évite de piéger la lecture sur mobile.
- Entreprise (MWM, LeatherSpa) affichée en ligne de contexte, pas en tag : un tag = une catégorie de profil.
- Barres de pourcentage de compétences retirées : peu informatives et portées par la couleur seule.
- Vidéos retirées : chaque projet a son site en ligne, et elles alourdissaient le dépôt.

- `npm audit fix --force` refusé : imposerait Next 16 et rétrograderait typescript-eslint pour des alertes sans impact (postcss embarqué dans Next au build, minimatch en lint dev).

## Points ouverts / blocages
- `npm audit` : 9 alertes restantes (postcss dans Next, minimatch dans typescript-eslint) ; à rechecker à la prochaine release 15.x de Next.
- `nodemailer` est installé mais utilisé nulle part (`src/app/api` vide) : le retirer ou prévoir le formulaire de contact ?
- Lovelo : licence web à acheter, sinon on garde Lilita One.
- Logos de `public/assets/icons/` inutilisés : supprimer ou utiliser en vignettes ?
- PlayOff : y a-t-il un volet « Club » en plus d'« Amateurs » à présenter ?
- Projets PlayOff et Agents IA sans visuel ni lien.
- Xperience mis hors ligne : supprimer le sous-domaine chez l'hébergeur.
