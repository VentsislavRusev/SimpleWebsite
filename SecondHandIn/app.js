//Creating a carousel for the website
var i = 0; //start point, the index
var images = []; //empty array of images
var time = 3000; //setting up the time between each photo, 3 seconds in this case

//Image List, array values with image paths
images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';

//Change image
function changeImg(){
  //the name attribute is slide from the <img> tag in the body
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg();
