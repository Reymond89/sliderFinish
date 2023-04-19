const imageBig = document.querySelector('.big__img');
const imageSmall = document.querySelectorAll('.small__img');
const active = document.querySelector('.active');
const contenedorBig = document.querySelector('.slider__big');

const modalContain = document.querySelector('.modal__contain');
const closeImg = document.querySelector('.close');
const imgModal = document.querySelector('.modal__img');

// imageSmall.forEach( small => {
//     small.addEventListener('click', ()=> {
//         const active = document.querySelector('.active');
//         active.classList.remove('active');
//         small.classList.add('active');
//         imageBig.src = small.src;
//     })
// } )


// for (let i = 0; i < imageBig.length; i++) {
//     imageBig[i].addEventListener('click', (e)=> {
//         console.log(e)         
//     })  
// }


contenedorBig.addEventListener('click', (e)=> {
   
   let imagenClick = e.target.parentNode.children[0]

    if(imagenClick.tagName === 'IMG'){
        modalContain.style.transform = 'scale(1)'
        imageSmall.src = imgModal.src ;
    } 
})
closeImg.addEventListener('click', ()=>{
    modalContain.style.transform = 'scale(0)'

})





for (let i = 0; i < imageSmall.length; i++) {
    imageSmall[i].addEventListener('click', ()=> {
                const active = document.querySelector('.active');
                active.classList.remove('active');
                imageSmall[i].classList.add('active');
                imageBig.src = imageSmall[i].src;
            })  
}


const images = [ 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'  ]

let num = 0;

function changeSmall(e) {
   for (let i = 0; i < imageSmall.length; i++) {
    imageSmall[i].classList.remove('active');
    imageSmall[num].classList.add('active');
   }
}

function next() {
    num++;
    if(num >= images.length){
        num = 0;
        imageBig.src = images[num]

        changeSmall( num )
    }else{
        imageBig.src = images[num]
        changeSmall( num )
    }
}

function back() {
    num--;
    if(num < 0){
        num = images.length -1;
        imageBig.src = images[num]

        changeSmall( num )
    }else{
        imageBig.src = images[num]

        changeSmall( num )
}
}


