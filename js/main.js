

// selezionare il bottone nella pagina html
const btnGenerate = document.getElementById("btnPlay")
// selezioniamo il contenitore della griglia
const gridBox = document.getElementById("grid")



////////// INIT //////////

// quando l'utente clicca accade un evento
btnGenerate.addEventListener("click",function(){
    generateGrid();
})





//////////// FUNZIONI ////

function generateGrid(){
    // diamo un valore vuoto al contenitore della griglia per svuotarla ogni volta che si clicca
    gridBox.innerHTML = "";

    // selezioniamo l'elemento(o meglio il "value") che ci fa cambiare il livello di difficoltà
    let cellQuantity = document.getElementById("levels").value;
    // impostiamo il numero di quadratini uguale al valore preso dall'elemento html
    let cellNumberSide = Math.ceil(Math.sqrt(cellQuantity)); 

    // richiamiamo una funzione che genera le nostre 16 bombe
    let bombQuantity = 16;
    let bombs = generateBomb(bombQuantity,cellQuantity)
    console.log("bombe:",bombs)

    // creiamo una variabile punteggio
    let punteggio = 0;
    writeElement("punteggio", `Punteggio : ${punteggio}`);
    
    // cicliamo il nostro nuovo elemento
    for(let i = 1 ; i <= cellQuantity ; i++){
        
        // nuovo elemento DIV creato
        const newElement = document.createElement("div");
        // aggiungiamo la classe SQUARE all'elemento creato
        newElement.classList.add("square");
        // impostiamo uno stile direttamente nello style in modo da poter cambiare il numero di quadratini inserendo la variabile "CellNumberSide"
        newElement.style.width =`calc(100% / ${cellNumberSide})`;
        newElement.style.height =`calc(100% / ${cellNumberSide})`;
        // scriviamo all'interno di ogni quadratino l'index ciclato da 1 a 100
        newElement.innerText = i;

       

            
        //aggiungiamo al nostro DIV  creato in precedenza un evento che al click ci permette di aggiungere la classe "clicked" e toglierla se gia presente             
        newElement.addEventListener("click",function(){
            // utilizziamo l'index del ciclo che genera le nostre celle in base alla variabile CellQuantity che rappresenta il livello di difficoltà
            let currentCell = i;

            // se la cella selezionata nella pagina contiene la bomba allora aggiungi la classe clickedBomb altrimenti la classe clicked
            if(bombs.includes(currentCell)){
                this.classList.add("clickedBomb");
                writeElement("punteggio",`Partita terminata, hai perso! Punteggio totale : ${punteggio}`)
            } else{
                this.classList.add("clicked");
                punteggio++;
                writeElement("punteggio", `Punteggio: ${punteggio}`);

                // se il punteggio è uguale alle celle totali meno le bombe allora l'utente HA VINTO
                if(punteggio == cellQuantity - bombQuantity){
                    writeElement("punteggio", `Partita terminata, hai vinto! Punteggio; ${punteggio}`);
                    alert("Bravo, hai vinto!");
                }
            }
            
            // this.classList.toggle("clicked")
        
        });
        
        // appendiamo il nostro DIV al contenitore della griglia dentro l html
        gridBox.append(newElement);  


    } 
    
    

    
    
}



// creiamo una funzione che ci permette di creare numeri casuali con un range in base a quante caselle ci sono
function randomNumber(min,max){
    return Math.round(Math.random()*(max-min+1)+min);
    
}


// creiamo una funzione che scrive il punteggio nella pagina html

function writeElement(elementId,content){
    document.getElementById(elementId).innerHTML = content;
}


// funzione che crea le bombe
function generateBomb(bombNumber, cellNumber){

    let bombs = [];

    while(bombs.length < bombNumber){
        let newBomb = randomNumber(1,cellNumber);

        if(bombs.includes(newBomb)==false){
            bombs.push(newBomb);
        }
    }

    return bombs;
}