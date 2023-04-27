

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

    // creiamo un array di numeri casuali che saranno le nostre bombe
    let arrayNumbers = []
    for(i = 1;i <=16; i++){
        arrayNumbers.push(randomNumber(1,cellQuantity));
    }
    console.log(arrayNumbers)

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
            this.classList.toggle("clicked")
        
        });
        
        // appendiamo il nostro DIV al contenitore della griglia dentro l html
        gridBox.append(newElement);  


    } 
    
    

    
    
}



// creiamo una funzione che ci permette di creare numeri casuali con un range in base a quante caselle ci sono
function randomNumber(min,max){
    return Math.round(Math.random()*(max-min+1)+min);
    
}



