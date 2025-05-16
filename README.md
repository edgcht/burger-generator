# Burger Generator Game

Ce projet est un petit projet lambda réalisé pour le fun avec du JavaScript. Il s'agit d'un jeu de génération de hamburgers dans lequel l'utilisateur clique sur un burger pour en gagner davantage et peut investir dans des usines, des mines et des laboratoires pour automatiser la production.

## Aperçu du projet

- **Langage** : JavaScript, HTML, CSS  
- **Fonctionnalités** :
    - Un bouton principal qui permet de cliquer pour générer des hamburgers.
    - Des achats d'améliorations et de bâtiments pour augmenter la production.
    - Un système d'animation visuelle avec des burgers volants et des feux d'artifice.
    - Une gestion simple de l'état du jeu via le localStorage et un bandeau pour le consentement des cookies.
    - Un Service Worker pour la mise en cache des ressources et permettre un fonctionnement en mode hors ligne.

## Structure du projet

- `index.html` : La page principale du jeu.
- `manifest.json` : Le fichier de configuration pour les Progressive Web Apps.
- `service-worker.js` : Le Service Worker qui gère la mise en cache des ressources.
- `README.md` : Ce fichier.
- `ads.txt`, `rgpd.html` : Diverses pages/info utiles.
- Répertoires `img/` et `audio/` : Les ressources graphiques et sonores.

## Installation et exécution

1. Clonez le projet dans votre environnement de développement.
2. Ouvrez le dossier avec Visual Studio Code.
3. Lancez un serveur local (par exemple avec l'extension Live Server) pour voir le jeu en action.
4. Amusez-vous et n'hésitez pas à modifier le code pour ajouter vos propres idées !

---

Ce projet a été conçu comme une expérience ludique et simple en JavaScript, sans visée commerciale. Profitez du fun et laissez parler votre créativité !