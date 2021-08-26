function showSections(a){


a.classList.toggle("openLesson")


let sibl = a.nextElementSibling
sibl.classList.toggle("show")

let arrow = a.children[1]


if(arrow != null){
arrow.classList.toggle("up")
}
}

function showMenu(){
document.getElementById("newSidebar").classList.toggle("show")
document.getElementById("mainButtons").classList.toggle("show")

try{
document.getElementById("mainButtonsGame").classList.toggle("show")
}finally{



if(document.getElementById("vocDrag").classList.contains("show")){
document.getElementById("vocDrag").classList.remove("show")
document.getElementById("wordInf").style.display = "none";
}
}

}

























































