let movies = [
  {
    name: "Loki",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/s1.png"
  },
  {
    name: "Falcon and the Winter Soldier",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/s2.png"
  },
  {
    name: "Wanda Vision",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/s3.png"
  },
  {
    name: "Raya And The Last Dragon",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/s4.png"
  },
  {
    name: "Luca",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/s5.png"
  },
  
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // tracking the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating DOM elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setimg up images

  imgElement.src = movies[slideIndex].image;
  slideIndex++

  //seting elements classname

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i<3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 2500);

//video cards
const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
