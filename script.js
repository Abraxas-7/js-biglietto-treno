// Dichiarazione variabili
let prezzoIniziale, prezzoFinale;
let sconto = 0;
const costoKm = 0.21;

// Input utente
const km = prompt("Inserisci i chilometri da percorrere:");
const eta = prompt("Inserisci la tua età:");

// Calcolo del prezzo
prezzoIniziale = km * costoKm;

// Applicazione dello sconto
if (eta < 18) {
    sconto = 0.20; // Sconto del 20% per minorenni
}   
    else if (eta >= 65) {
    sconto = 0.40; // Sconto del 40% per vecchi
    }

// Calcolo del prezzo finale
prezzoFinale = prezzoIniziale * (1 - sconto);

// Stampa del prezzo finale in console
console.log(`Il prezzo del biglietto è: ${prezzoFinale.toFixed(2)}€`);