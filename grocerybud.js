let text = document.getElementById("addItem").value;
let list = document.createElement("li");
let node = document.createTextNode(text);
list.innerHTML = "<i class='material-icons close'>close</i>";

let close = document.getElementsByClassName("close");
let i;
for(i=0; i<=close.length; i++){
    close[i].onclick = function()
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function addItemFunction(){
    let text = document.getElementById("addItem").value;
    let list = document.createElement("li");
    let node = document.createTextNode(text);
    list.innerHTML = "<i class='material-icons close'>close</i>";

    let element = document.getElementById("list")

      if(text===""){
           alert("you must add an item")
      }
      else{
        list.appendChild(node);
        element.appendChild(list);
      }
      document.getElementById("addItem").value="";

      let close = document.getElementsByClassName("close");
let i;
for(i=0; i<=close.length; i++){
    close[i].onclick = function()
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}
}