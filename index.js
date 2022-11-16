/**
 * @desc Toggle hamburger menu
 */
function myFunction() {
  if(document.getElementById("hide").style.display =="none") {          // display None
    document.getElementById("hide").style.display = "block";            // display block
  }
  else {
    document.getElementById("hide").style.display = "none"              // display None
  }
}


/**
 * @desc Toggle dropdown mode
 */
let click = document.querySelector('.click');
 let list = document.querySelector('.list')
 click.addEventListener("click", () => {
  list.classList.toggle('newlist');
 })


 /**
 * @desc Toggle dropdown mode
 */
 let click2 = document.querySelector('.click2');
 let list2 = document.querySelector('.list2')
 click2.addEventListener("click", () => {
  list2.classList.toggle('newlist2');
 })