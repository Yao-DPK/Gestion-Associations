# FrontFrAdministration

## comment le lancer?
Il faut suivre les étapes suivantes:


1. Installer Node package Manager pour ce faire rendez vous sur le site officiel:  https://nodejs.org/en/


2. Ensuite installer Angular via la commande:

    - npm install -g @angular/cli

3. Ensuite vous pouvez cloner le Repository selon la méthode de votre choix

4. Assurer vous d'installer ses library indispensable au lancement

    - npm install bootstrap

Vous pouvez ensuite lancer votre server (après avoir lancer le backend ) grace à la commande

    - ng serve --open

Puis rendez vous à l'addresse `http://localhost:4200/`


## Description du projet et du processus de développement

Nous ferons une description briève de notre repertoire de conception.
Rappelons que ce frontend sera lié à notre backend que nous avons réalisé dans le précédent TP

## Présentation des différents composants angular:

- Le premier composant que nous avons créér est celui du  du login pour l'authentification de l'utilisateur 

- Le second composant est users-list pour la gestion des utilisateurs( en son sein on pourra lister les utilisateurs, les supprimer et avoir les détails des utilisateurs)

- Le composant home: c'est le composant dédié à la page d'accueil du site

- La Navbar: Ce composant joue le role de barre de navigation qui a les fonctionnalités comme un logout, une barre de recherche, un boutton redirigeant vers l'accueil et un autre rédirigeant vers le profil de l'utilisateur.

- Ensuite on dispose du composant users-profil qui permet non seulement d'afficher le profil de l'utilisateur mais aussi de modifier ses informations personnelles.

- Le composant associations-list: il est chargé de la gestion des associations. Il donne accès a la liste des utilisateurs. Il permet aussi de crééer une association. Au sein de son template figurent des bouttons vers d'autres composants chargé d'un aspect particulier de la gestion des associations

- Le composant associations-members: chargé de la création de nouveau membres, de la modification du role de ces memebres au sein d'une association

- Le composant associations-minutes: Chargé de la création des minutes d'une association ainsi que de la modification des minutes. 
- Le search-bar: Chargé de la gestion de la barre de recherche



