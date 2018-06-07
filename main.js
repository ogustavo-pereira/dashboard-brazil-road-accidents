

let typeSelect = document.querySelector("#type-input")
var prefix = ".type-input-"
typeSelect.addEventListener("change",function(e){
    changeInputHidden(prefix + typeSelect.value)
})
function changeInputHidden(classOption) {
    let inputblock = document.querySelectorAll(".inputStaBlock")
    
    if(inputblock.length > 0){
        console.log(inputblock);
        inputblock.forEach(inputdiv =>{
            inputdiv.className = inputdiv.className.replace(/\binputStaBlock\b/g,"")
        });
    }
    console.log(classOption);
    
    document.querySelector(classOption).className += " inputStaBlock"
}
changeInputHidden(prefix + typeSelect.value)