// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


/* creazione array con tutti i clienti */


let clienti = []
clienti.push(marco, paul, amy)
console.log(clienti);

/* stampa della frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" */

for (let i = 0; i < clienti.length; i++) {
  if (clienti[i]["isAmbassador"] === true ) {
  console.log(clienti[i]["name"] + " " + clienti[i]["lastName"] + " è un ambassador")
  } else {
    console.log(clienti[i]["name"] + " " + clienti[i]["lastName"] + " NON è un ambassador" )
  }
}





/* creazione array con solo clienti ambassador */

let ambassador = []
for (let i = 0; i < clienti.length; i++) {
  if (clienti[i]["isAmbassador"] === true) {
    ambassador.push(clienti[i]["name"])
  }
}
console.log(ambassador);





/* somma prezzi e definizione sconto */

let totale = 0
for (let i = 0; i < prices.length; i++) {
  totale += prices[i]
}
console.log(totale);

let applicazioneSconto = 0.70;





/* algoritmo che verifica se utente è ambassator --> applicazione sconto 30% e se carrello è superiore a 100 € --> spedizione gratuita */

  if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
    totale = totale * applicazioneSconto
    if (totale > 100) {
      console.log("l'utente " + utenteCheEffettuaLAcquisto["name"] + " è ambassador e ha diritto allo sconto. Il totale del carrello ammonta a € " + totale + ". Il carrello supera i 100€ e quindi la spedizione è gratuita.");
    } else {
      console.log("l'utente " + utenteCheEffettuaLAcquisto["name"] + " è ambassador e ha diritto allo sconto. Il totale del carrello inclusi i costi di spedizione ammonta a € " + (totale+shippingCost));
    } } else {
      if (totale > 100) {
        console.log("l'utente " + utenteCheEffettuaLAcquisto["name"] + " NON è ambassador e NON ha diritto allo sconto. Il totale del carrello ammonta a € " + totale + ". Il carrello supera i 100€ e quindi la spedizione è gratuita.");
      } else {
        console.log("l'utente " + utenteCheEffettuaLAcquisto["name"] + " NON è ambassador e NON ha diritto allo sconto. Il totale del carrello inclusi i costi di spedizione ammonta a € " + (totale+shippingCost));
      }
    }
