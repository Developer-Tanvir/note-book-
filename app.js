
// let allName = ["lolit","sajjad","rocky"];

// localStorage.setItem("name", JSON.stringify (allName) );
// localStorage.setItem("age","21");
// // localStorage.clear()
// localStorage.removeItem("age")
// let getName = JSON.parse (localStorage.getItem("name"));
// sessionStorage.setItem("name", JSON.stringify (allName) );
// sessionStorage.setItem("age","21");
showNotes()
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(){
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObject = []
    }else{
        notesObject = JSON.parse(notes)
    }
    notesObject.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesObject));


    addText.value = "";


    showNotes()
});

// show all notes 
function showNotes(){
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObject = []
    }else{
        notesObject = JSON.parse(notes)
    }

    let div = "";
    notesObject.forEach(function(element,index){
        div += `
        
        <div class="newCard card mx-4 mb-5" style="width : 300px">
        <div class="card-body">
          <h4 class="card-title">List ${index +1}</h4>
            <p class="card-text">${element}
              </p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Remove</button>
        </div>
      </div>

          `
let notesAll = document.getElementById("notes");
notesAll.innerHTML = div;
    });
    
};

function deleteNote(index){
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObject = []
    }else{
        notesObject = JSON.parse(notes)
    }
    notesObject.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObject));
    showNotes()

}

let search = document.getElementById("searchText");

search.addEventListener("input", function(){
    let searchValue = search.value;
    console.log(searchValue);
    let newCard = document.getElementsByClassName("newCard");
    Array.from(newCard).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(searchValue)){
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }
    })
})