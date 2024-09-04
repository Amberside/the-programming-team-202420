const card = document.getElementById('card')

card.addEventListener("mousemove", (event) =>{
    // get mouse point X and Y -> Return Secreen poit to center
    const pointerX = event.clientX
    const pointerY = event.clientY
    
    // get card properties look for width and height 
    const cardRec = card.getBoundingClientRect()
    const halfWidth = cardRec.width/2;
    const halfHeigth = cardRec.height/2;

    // calclate center poit x, y of card 
    const cardCenterX = cardRec.left + halfWidth;
    const cardCenterY = cardRec.top + halfHeigth;
    
    //  screen left             card left
    //  v                        v
    //  =========================[=========================]=================================
    //  X----------- cardCenterX -------------X    
    //  =========================[=========================]=================================
    //  O----------- pointerX---------O
    //  =========================[=========================]=================================
    //                                O-------X  deltaX 
    //  =========================[=========================]=================================
    
    // find the current point between mouse point and card center X and Y
    const deltaX = pointerX - cardCenterX;
    const deltaY = pointerY - cardCenterY;

    const rx = deltaY / halfHeigth;
    const ry = deltaX / halfWidth;

    // distant between mouse poiny to conter 
    const distanceToCenter = Math.sqrt( Math.pow(deltaX,2) + Math.pow(deltaY,2) );
    const maxDistance = Math.max(halfWidth,halfHeigth)
    // degree of 3D rotation more far more degree
    const degree = distanceToCenter*10 / maxDistance;


    //Rotation the card
    card.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry},0,${degree}deg)` ;
    
    

});
card.addEventListener("mouseleave", () =>{
    card.style = null
});


document.body.addEventListener("click",(event)=>{
    const clickElement = event.target ;
    console.log(clickElement);
    imgs = document.querySelectorAll(".img");
    console.log(imgs);
    if(!clickElement.classList.contains("img")){
        imgs.forEach((img) => img.classList.remove("open"));
        return;
    }
    if(clickElement.classList.contains("open")){
        clickElement.classList.remove("open");
        return;
    }

    imgs.forEach((img) => img.classList.remove("open"));
    clickElement.classList.add("open");

});