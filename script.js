
function getCoords(elem) {
  return elem.getBoundingClientRect();
}


document.onclick = function(event) {
  var target = event.target;
  var classVar = target.classList.contains('littlePictures');
  //Если кликнули не на картинку
  if(!classVar) return;
  //Установить выбранное изображение
  topPicture.setAttribute('src', target.getAttribute('src'));

}
var gallery = document.querySelector('.gallery');
var firstLI = getCoords(document.getElementsByClassName('littlePictures')[0]);
var secondLI = getCoords(document.getElementsByClassName('littlePictures')[1]);
var thirdLI = getCoords(document.getElementsByClassName('littlePictures')[2]);

//Добавить индикатор счета изображения
var listElems = document.getElementsByTagName('li');
for(var i=0; i<listElems.length; i++) {
  listElems[i].style.position = 'relative';
  var span = document.createElement('span');
  span.style.cssText = 'position:absolute;left:0;top:0;color:white';
  span.innerHTML = i + 1;
  listElems[i].appendChild(span);
}

var difference = secondLI.left - firstLI.left;
var width = thirdLI.right + (secondLI.left - firstLI.right) - firstLI.left;
var count = 3;
var list = gallery.querySelector('ul');
var listElems = gallery.querySelectorAll('li');
var position = 0;
//Листать назад
gallery.querySelector('.prev').onclick = function() {
  position = Math.min(position + width, 0);
  list.style.marginLeft = position + 'px';
}
//Листать вперед
gallery.querySelector('.next').onclick = function() {
  position = Math.max(position - width, -difference * (listElems.length - count) );
  list.style.marginLeft = position + 'px';
}