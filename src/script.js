const shareButton = document.querySelector("i");
const IconsSection = document.querySelector(".Icons-section ");
shareButton.addEventListener("click",()=>{
    IconsSection.classList.add("active");
})
document.addEventListener("click",(event)=>{
    if(IconsSection.classList.contains("active")){
        if(event.target !== shareButton){
            IconsSection.classList.remove("active");
        }
    }
})