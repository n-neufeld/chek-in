const questions = [
  "how do you feel about your hackathon project?",
  "do you love The Bees Knees?",
  "do you like JavaScript?",
  "How well would Daniil survive a zombie Apocalypse?"
];

const apiKey = "DVCxm6D09YSHYZd3cmhZVwltSdNB9127";

let newq = "";

let formEl = document.querySelector(".emo__quest");
const gifsEl = document.querySelector(".emo__face");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let userInput = event.target.question.value;
  console.log(userInput);
  newq = userInput.replace(/ /g, "+");

  console.log(newq);
  const p = axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${newq}&limit=20&offset=0&rating=pg&lang=en`
  );

  p.then((response) => {
    const gifs = [];
    console.log(response);
    let dataArr = response.data.data;
    console.log(dataArr);
    for (let i = 0; i < dataArr.length; i++) {
      gifs.push(dataArr[i].images.original.url);
    }

    console.log(gifs);
    //const gifsEl = document.querySelector(".emo__face");
    gifsEl.innerHTML = "";
    const imgEl = document.createElement("img");
    let gifURL = gifs[Math.floor(Math.random() * gifs.length)];
    imgEl.classList.add("emo__face--img");
    imgEl.setAttribute("src", gifURL);
    gifsEl.appendChild(imgEl);
    // for (let i = 0; i < gifs.length; i++) {
    //   const imgEl = document.createElement("img");
    //   imgEl.setAttribute("src", gifs[i]);
    //   gifsEl.appendChild(imgEl);
    // }
  });
});

let nextEl = document.querySelector(".next");
let i = 0;
nextEl.addEventListener("click", (event) => {
  event.preventDefault();
  gifsEl.innerHTML = "";
  let emoQuestEl = document.querySelector(".emo__quest__label");
  if (i < questions.length) {
    emoQuestEl.innerHTML = questions[i++];
  } else {
    i = 0;
    emoQuestEl.innerHTML = "Do you enjoy Gif's";
  }
});

// let i = 0

// while (i < myArray.length) {
//   if(i === myArray.length-1){
//     console.log(myArray[i])
//   }
//   console.log(myArray[i])

//   i++;
// }

//code that is working for me

// const myArray = ["josh", "is", "trying", "to", 'code']

// let i = 0
// while (i < myArray.length) {
//   if(i === myArray.length-1){
//     console.log(myArray[i])
//   }
//   console.log(myArray[i])

//   i++;
// }
