btn=document.getElementById("new-task-description")
btn.addEventListener("click", (event)=>{
    VL=document.getElementById("new-task-description").value
    LI=document.createElement("li");
    LI.innerText=`${VL}`
    TSK=document.getElementById("tasks");
    TSK.appendChild(LI)
    event.preventDefault() 
  })
