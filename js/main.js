

// selezionare il bottone nella pagina html
const btnGenerate = document.getElementById("btnPlay")
// selezioniamo il contenitore della griglia
const gridBox = document.getElementById("grid")

gridBox.innerHTML = "";

// quando l'utente clicca accade un evento
btnGenerate.addEventListener("click",function(){
    generateGrid();
})







//////////// FUNZIONI ////

function generateGrid(){
    // selezioniamo l'elemento(o meglio il "value") che ci fa cambiare il livello di difficoltà
    let cellQuantity = document.getElementById("levels").value;
    // impostiamo il numero di quadratini uguale al valore preso dall'elemento html
    let cellNumberSide = Math.ceil(Math.sqrt(cellQuantity)); 

    

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


