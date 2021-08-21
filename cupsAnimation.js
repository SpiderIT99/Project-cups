let cup = document.querySelectorAll('.cup');
    
cup.forEach( cup => {
    cup.addEventListener('click', pouring)    
});
function pouring(){
    let poziom = Number(this.getAttribute('poziom'));
    poziom+=24;

    if(poziom<=96){
        this.style.backgroundPosition = "0 " + poziom + "%";
    }
    else{
        this.style.cursor = "not-allowed";
    }

    this.setAttribute('poziom', poziom);
}
