# Project Management App

Une application web full-stack permettant de gérer des projets, des tâches et des utilisateurs, avec un backend développé en [NestJS](https://nestjs.com/), un frontend développé en [Angular](https://angular.io/), et une base de données [PostgreSQL](https://www.postgresql.org/).


## 📖Sommaire :

1. [**Technologies utilisées**](#-technologies-utilisées) : Liste des principales technologies utilisées dans le projet.

2. **Prérequis** : Liste des outils nécessaires pour exécuter l'application.
3. **Installation** : Explications pour configurer et démarrer l'application en local.
4. **Structure du projet** : Présentation de la structure des dossiers et fichiers du projet.
5. **Exécution des tests** : Comment exécuter les tests unitaires et d'intégration.
6. **Déploiement** : Quelques notes pour déployer l'application.
7. **Contribuer** : Comment contribuer à ce projet.
8. **Licence** : Licence choisie pour le projet.

## Status
En cours

## Technologies utilisées

- **Backend**: [NestJS](https://nestjs.com/) ![NestJS](https://img.shields.io/badge/NestJS-%23000000.svg?style=flat&logo=nestjs&logoColor=white)
- **Frontend**: [Angular](https://angular.io/) ![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?style=flat&logo=angular&logoColor=white)
- **Base de données**: [PostgreSQL](https://www.postgresql.org/) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=flat&logo=postgresql&logoColor=white)
- **Conteneurisation**: [Docker](https://www.docker.com/) ![Docker](https://img.shields.io/badge/Docker-%232496ED.svg?style=flat&logo=docker&logoColor=white)
- **Tests**: [Jest](https://jestjs.io/) ![Jest](https://img.shields.io/badge/Jest-%23C21325.svg?style=flat&logo=jest&logoColor=white)

## Prérequis

Avant de pouvoir exécuter l'application, assure-toi d'avoir installé les éléments suivants sur ta machine :

- [Docker](https://www.docker.com/) ![Docker](https://img.shields.io/badge/Docker-%232496ED.svg?style=flat&logo=docker&logoColor=white)
- [Docker Compose](https://docs.docker.com/compose/) ![Docker Compose](https://img.shields.io/badge/Docker%20Compose-%23329999.svg?style=flat&logo=docker&logoColor=white)

## Installation

### 1. Clone le répertoire

Clone ce répertoire sur ta machine locale :

```bash
git clone https://github.com/ton-utilisateur/nom-du-repertoire.git
cd nom-du-repertoire
```

### 2. Construction des services avec Docker

Le projet est configuré avec Docker et Docker Compose. Lance les services en utilisant la commande suivante :

```bash
docker-compose up --build
```

Cela lancera les services suivants :

- **Frontend (Angular)** : Accessible via le port `4201`
- **Backend (NestJS)** : Accessible via le port `3001`
- **Base de données (PostgreSQL)** : Accessible sur le port `5435`

### 3. Accéder à l'application

Une fois les conteneurs en cours d'exécution, accède à l'application frontend à [http://localhost:4201](http://localhost:4201).

### 4. Accès à la base de données

La base de données est accessible via l'hôte `localhost` et le port `5435`. Tu peux te connecter en utilisant le client PostgreSQL de ton choix avec les informations suivantes :

- **Utilisateur** : `association_user`
- **Mot de passe** : `association_password`
- **Base de données** : `association_db`

## Structure du projet

```bash
/
├── backend/            # Code source backend (NestJS)
│   ├── src/            # Dossier principal des sources du backend
│   ├── Dockerfile      # Dockerfile pour le backend
│   └── package.json    # Dépendances et configurations backend
├── frontend/           # Code source frontend (Angular)
│   ├── src/            # Dossier principal des sources du frontend
│   ├── Dockerfile      # Dockerfile pour le frontend
│   └── package.json    # Dépendances et configurations frontend
├── docker-compose.yml  # Fichier de configuration Docker Compose
└── README.md           # Ce fichier
```

## Exécution des tests

### Tests unitaires

Pour exécuter les tests unitaires pour le backend (NestJS) et le frontend (Angular) :

#### Backend

Dans le dossier `backend`, exécute la commande suivante :

```bash
npm run test
```

#### Frontend

Dans le dossier `frontend`, exécute la commande suivante :

```bash
ng test
```

### Tests d'intégration

Des tests d'intégration peuvent être configurés et exécutés dans le dossier `backend`, suivant les besoins de l'application.

## Déploiement

### Variables d'environnement

Assure-toi de configurer les variables d'environnement dans le backend et le frontend pour utiliser la bonne configuration pour différents environnements (par exemple, développement, production).

Dans le fichier `.env` du backend :

```ini
DB_HOST=db
DB_PORT=5432
DB_USER=association_user
DB_PASSWORD=association_password
DB_NAME=association_db
SECRET_KEY=ton-secret-key
```

### Docker Compose pour Production

Pour un environnement de production, tu peux ajuster les configurations Docker (par exemple, les ports, les volumes, etc.) dans le fichier `docker-compose.yml` et adapter les configurations dans le fichier `.env`.

## Contribuer

Nous accueillons les contributions à ce projet ! Si tu souhaites y contribuer, fais une **fork** de ce projet, crée une branche pour ta fonctionnalité, puis soumets une **pull request** avec une description claire de tes changements.

## License

Ce projet est sous licence MIT - consulte le fichier [LICENSE](LICENSE) pour plus de détails.

```



