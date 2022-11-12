function myFunction() {
  if(document.getElementById("hide").style.display =="none") {
    document.getElementById("hide").style.display = "block";
  }
  else {
    document.getElementById("hide").style.display = "none"
  }
}

// ------Dropdown-------
let click = document.querySelector('.click');
 let list = document.querySelector('.list')
 click.addEventListener("click", () => {
  list.classList.toggle('newlist');
 })


 let click2 = document.querySelector('.click2');
 let list2 = document.querySelector('.list2')
 click2.addEventListener("click", () => {
  list2.classList.toggle('newlist2');
 })