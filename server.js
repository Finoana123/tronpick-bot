const express = require("express");
const axios = require("axios");
const { wrapper } = require("axios-cookiejar-support");
const tough = require("tough-cookie");

const app = express();
const PORT = process.env.PORT || 3000;

// 🍪 créer cookie jar
const cookieJar = new tough.CookieJar();
const client = wrapper(axios.create({ jar: cookieJar }));

app.get("/", (req, res) => {
    res.send("Bot actif 🤖");
});

// 🔐 LOGIN
async function login() {
    try {
        console.log("Tentative de login...");

        const response = await client.post(
            "https://tronpick.io/login.php",
            new URLSearchParams({
                email: "TON_EMAIL",
                password: "TON_MOT_DE_PASSE"
            }),
            {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        console.log("Login status :", response.status);

    } catch (error) {
        console.log("Erreur login :", error.message);
    }
}

// 🤖 BOT
function startBot() {
    console.log("Bot démarré...");

    setInterval(async () => {
        console.log("Bot travaille...");

        await login();

    }, 60000);
}

startBot();

app.listen(PORT, () => {
    console.log("Serveur lancé sur " + PORT);
});
