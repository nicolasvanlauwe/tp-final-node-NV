🚀 Installation et Configuration

1️⃣ Cloner le projet

git clone <URL_DU_REPO>
cd <NOM_DU_REPO>

2️⃣ Installer les dépendances

npm install

3️⃣ Lancer les services avec Docker

docker-compose up

4️⃣ Démarrer le serveur

Lancer nodemon sur les fichiers suivants :

npx nodemon config/db.js
npx nodemon app.js

⚠️ Remarque Importante

Pour modifier un film, utilisez l'onglet "Raw" dans Postman et non "form-data", sinon req.body sera vide.👉 Format recommandé :

Type : JSON

Exemple de requête :

{
"title": "Nouveau Titre",
"genre": "Action"
}

🎉 Tout est prêt ! Bonne utilisation du projet ! 🚀
