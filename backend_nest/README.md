Projet Backend - TP Web Master

Ce Projet est un TP de Web Master réalisé sous l'encadrement du professeur Hélène Feuillatre à l'ESIR
Comment le Lancer?

Suivez ces étapes simples pour lancer le projet :

    Installer Node Package Manager (NPM) :

    Assurez-vous d'avoir Node Package Manager (NPM) installé. Si ce n'est pas le cas, rendez-vous sur le site officiel : https://nodejs.org/en/.

    Installer NestJS :

    Utilisez la commande suivante pour installer NestJS globalement :

    bash

npm i -g @nestjs/cli

Cloner le Repository :

Clonez le repository selon la méthode de votre choix.

Installer les Dépendances :

Assurez-vous d'installer les bibliothèques nécessaires en exécutant les commandes suivantes :

bash

npm install @nestjs/common
npm install bcrypt
npm install sqlite3

Lancer le Backend :

Vous pouvez maintenant lancer votre backend avec la commande :

bash

    npm start

Description du Projet et du Processus de Développement

Le projet backend est une API RESTful développée dans le cadre d'un TP de Web Master à l'ESIR. Il met en œuvre un système de gestion de modules, tels que les utilisateurs, les associations, les rôles et les procès-verbaux. Le développement a suivi un processus méthodique en respectant un cahier des charges initial.
Présentation des Modules

    Module Utilisateur :

    Le module utilisateur permet de gérer les informations liées aux utilisateurs. Il a évolué au fil du processus de développement, notamment avec l'ajout du mot de passe pour faciliter l'authentification.

    Module Association :

    Ce module gère les informations relatives aux associations, y compris leur nom et leurs membres. Les membres sont des utilisateurs créés dans le module utilisateur.

    Module Rôle :

    Ce module sert de table d'association entre les utilisateurs et les associations, comme spécifié dans le sujet initial.

    Module Procès-Verbaux :

    Le dernier module ajouté, il gère les procès-verbaux associés aux différentes actions au sein du système.
