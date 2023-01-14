var question=document.getElementsByClassName("question");
var i;
let clickedElement;
var arrow=document.getElementsByClassName("arrow");
let bold=document.querySelector(".boldtxt");
for (i=0; i<question.length; i++) {
    question[i].addEventListener("click",function() {
   
    console.log(arrow[0]);
    if(clickedElement && clickedElement!==this){
        clickedElement.firstElementChild.classList.remove("active");
        clickedElement.firstElementChild.nextElementSibling.classList.remove("arrowUp");
        clickedElement.nextElementSibling.style.display="none";
    }
    clickedElement = this;
    this.firstElementChild.classList.toggle("active");
    this.firstElementChild.nextElementSibling.classList.toggle("arrowUp");
      var answer=this.nextElementSibling;
      if (answer.style.display==="block"){
        answer.style.display="none";
      }else{
        answer.style.display="block";
      }
    })
}

