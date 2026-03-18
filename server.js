const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Route principale
app.get("/", (req, res) => {
    res.send("Bot actif 🤖");
});

// 🔥 BOT AUTOMATIQUE
function startBot() {
    console.log("Bot démarré...");

    setInterval(() => {
        console.log("Bot travaille... " + new Date().toLocaleTimeString());

        // 👉 Ici on mettra ton vrai script plus tard

    }, 60000); // toutes les 60 secondes
}

// lancer le bot
startBot();

app.listen(PORT, () => {
    console.log("Serveur lancé sur " + PORT);
});
