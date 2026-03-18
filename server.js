const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

// Route principale
app.get("/", (req, res) => {
    res.send("Bot actif 🤖");
});

// 🔥 BOT AUTOMATIQUE
function startBot() {
    console.log("Bot démarré...");

    setInterval(async () => {
        console.log("Bot travaille... " + new Date().toLocaleTimeString());

        try {
            // Remplace l'URL par l'API claim réelle de Tronpick
            const response = await axios.get('https://tronpick.io/claim.php');
            console.log("Réponse Tronpick :", response.status);
        } catch (error) {
            console.log("Erreur Tronpick :", error.message);
        }

    }, 60000); // toutes les 60 secondes
}

// Lancer le bot
startBot();

app.listen(PORT, () => {
    console.log("Serveur lancé sur " + PORT);
});
