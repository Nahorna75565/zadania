const expressFramework = require('express');
const systemPlikow = require('fs');
const corsMiddleware = require('cors');

const aplikacja = expressFramework();

aplikacja.use(corsMiddleware());
aplikacja.use(expressFramework.json());

aplikacja.post('/zapisz', (zadanie, odpowiedz) => {
    const dane = zadanie.body;

    const wpis = `Data: ${new Date().toLocaleString()} | Imię: ${dane.imie}, Nazwisko: ${dane.nazwisko}, Email: ${dane.email}, Wiadomość: ${dane.wiadomosc}\n`;

    systemPlikow.appendFile('baza_danych.txt', wpis, (blad) => {
        if (blad) {
            return odpowiedz.status(500).send("Błąd");
        }
        odpowiedz.status(200).json({ status: "sukces" });
    });
});

aplikacja.listen(56557, () => {});