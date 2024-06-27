let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}
/* function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

 */

      /*--------------------------------gallery*/

    
       
      const images = [...document.querySelectorAll('.img')];

      const popup = document.querySelector('.popup');
      const closeBtn = document.querySelector('.close-btn');
      const largeImage = document.querySelector('.large-image');
      const imageIndex = document.querySelector('.index');
      const leftArrow = document.querySelector('.left-arrow');
      const rightArrow = document.querySelector('.right-arrow');


      let index = 0;

      images.forEach((item, i) =>{
        item.addEventListener('click', ()=>{
            popup.classList.toggle('active');
            updateImage(i);
           
        })
      })
      const updateImage = (i) => {
        let path = `/assets/gallery${i+1}.jpeg`;
        largeImage.src = path;
        imageIndex.innerHTML = `0${i+1}`;
        index = i;
      }
      closeBtn.addEventListener("click", ()=>{
        popup.classList.toggle('active');
      })
      leftArrow.addEventListener("click", ()=>{
        if(index > 0){
            updateImage(index - 1);
        }
        if(index === 0){
            index = images.length;
        }
      })
      rightArrow.addEventListener("click", ()=>{
        if(index < images.length - 1){
            updateImage(index + 1);
        }
        if(index === images.length){
            index = 0;
        }
      })
     

  