//1. Объявляем кнопки-стрелки
const prevBtn = document.querySelector('#prevArrow');
const nextBtn = document.querySelector('#nextArrow');
//3. Объявляем переменную картинки
let image = document.querySelector('.image')

//4.Создаем массив куда складываем все картинки
let imageSrc = ['assets/images/image1.jpg','assets/images/image2.jpg','assets/images/image3.jpg','assets/images/image4.jpg','assets/images/image5.jpg'];

//5. Путь к картинки равен инекдсу в массиве, а индекс в массиве соотв счетчику наших картинок
let imageIndex = 0;

image.src = imageSrc[imageIndex];




//2. Объявляем к кнопкам функциям
function nextImage(){
  //прибавляем на 1 при  нажатии на кнопку
  imageIndex ++;
  
  // присваиваем новое значение индексу в массиве с путями
  image.src = imageSrc[imageIndex];
  
  // чтобы остановился на количестве картинок кот есть и начать снова
  if (imageIndex === (imageSrc.length - 1)){
    imageIndex = 0;
  }
}

function prevImage(){
  //уменьшаем на 1 при  нажатии на кнопку
  imageIndex --;
  image.src = imageSrc[imageIndex];
  if (imageIndex === 0){
    imageIndex === (imageSrc.length);
  }

}


