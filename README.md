# Installation et Configuration

## Cloner le projet

```bash
git clone <URL_DU_REPO>
cd <NOM_DU_REPO>
```

## Installer les dépendances

```bash
npm install
```

## Lancer les services avec Docker

```bash
docker-compose up
```

## Démarrer le serveur

Lancer nodemon sur les fichiers suivants :

```bash
nodemon config/db.js
nodemon app.js
```

## Remarque Importante

1. Pour modifier un film, utilisez l'onglet "raw" dans Postman et non "form-data", sinon req.body sera vide.
2. Le token généré est à renseigner afin d'accéder aux routes protégées
