'use strict';

const imagens = [
    {'id': '1', 'url': 'img-slides/1548197515646.jpg'},
    {'id': '2', 'url': 'img-slides/1548197519125.jpg'},
    {'id': '3', 'url': 'img-slides/82926617_868014276964082_1841859852595363840_o.jpg'},
    {'id': '4', 'url': 'img-slides/FB_IMG_16311407280153401.jpg'},
    {'id': '5', 'url': 'img-slides/FB_IMG_16311407400677776.jpg'},
    {'id': '6', 'url': 'img-slides/IMG-20211217-WA0010.jpg'},
    {'id': '7', 'url': 'img-slides/IMG-20211223-WA0134.jpg'},
    {'id': '8', 'url': 'img-slides/IMG-20211223-WA0144.jpg'},
    {'id': '9', 'url': 'img-slides/IMG-20211223-WA0146.jpg'},
    {'id': '10', 'url': 'img-slides/IMG-20211223-WA0155.jpg'},
    {'id': '11', 'url': 'img-slides/IMG-20230105-WA0005.jpg'},
    {'id': '12', 'url': 'img-slides/IMG_20210616_111018_2.jpg'},
    {'id': '13', 'url': 'img-slides/Snapchat-1222299203.jpg'},
    {'id': '14', 'url': 'img-slides/Snapchat-31472613.jpg'}
]
const containerItems = document.querySelector('#container-items');
const loadImages = (imagens, container) =>{
    imagens.forEach(imagens => {
        container.innerHTML += `<div class='item'>
        <img src='${imagens.url}'
        </div>
        `
    });
}

loadImages(imagens, containerItems);

let items = document.querySelectorAll('.item');
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const next = () => {
    const lastItems = items[items.length - 1];
    containerItems.insertBefore(lastItems, items[0]);
    let items = document.querySelectorAll('.item');
    
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', previous);
