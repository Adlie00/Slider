let nextDom = document.getElementById('next');
let SpacemarineDom = document.querySelector('.Spacemarine');
let ListItemDom = document.querySelector('.Spacemarine .list');
let thumbnailDom = document.querySelector('.Spacemarine .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
let timeRunning = 3000;
let runTimeOut;

function showSlider(type){
    let itemSlider = document.querySelectorAll('.Spacemarine .list .item');
    let itemThumbnail =document.querySelectorAll('.Spacemarine .thumbnail .item');

    if(type === 'next'){
        ListItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        SpacemarineDom.classList.add('next');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        SpacemarineDom.classList.remove('next');
    },timeRunning)
}