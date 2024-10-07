document.addEventListener("DOMContentLoaded", () => {
  btn=document.getElementById("btn")
  btn.addEventListener("click", (event)=>{
   event.preventDefault()
   VL=document.getElementById("new-task-description").value
   LI=document.createElement("li");
   LI.innerText=`${VL}`
   TSK=document.getElementById("tasks");
   TSK.appendChild(LI)
  })

