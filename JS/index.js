// console.log("hello");

// const para1 = document.getElementById("para-1");
// const div1 = document.getElementById("div-1");
// para1.style.backgroundColor = "red";
// para1.textContent = "This is new para from JS";
// const myName = "Vipul";
// div1.innerHTML = `<h1>Good morning ${myName}</h1>`;

// const jobName = "Master Trainer";
// const discription = "It's fun loving job, and paid well.";
// const div2 = document.getElementById("div-2");
// div2.style.border = "2px solid red";
// div2.innerHTML = `<h2>My name is ${myName}</h2>
//       <h3>I am working as ${jobName}</h3>
//       <p>${discription}</p>`;

// const nameArr = ["raju", "jaggu", "bhim"];
// const boyList = document.getElementById("boys-list");
// nameArr.forEach((boyName) => {
//   let li = document.createElement("li");
//   li.textContent = boyName;
//   boyList.appendChild(li);
// });

// const clickMeBtn = document.getElementById("click-me-btn")
//       const para1 = document.getElementById("para-1")
//       const bidy1 = document.getElementById("bidy1")
//       clickMeBtn.addEventListener("click", ()=>{
//         para1.style.color = "blue"
//         para1.textContent = "Hello Class, this is paragraph from JS"
//         bidy1.style.backgroundColor = "red"
//       })
// const userForm = document.getElementById("user-form");
//       const formDetails = document.getElementById("formDetails");
//       userForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const firstName = document.getElementById("firstName").value;
//         const age = document.getElementById("age").value;
//         const email = document.getElementById("email").value;
//         const pElement = document.createElement("p");
//         if(age <18){
//           return alert("user not allowed")
//         }
//         pElement.textContent = `name is ${firstName}
//         age is ${age}
//         email is ${email}`;
//         formDetails.appendChild(pElement);
//       });

// function orderPizza() {
//   console.log("pizze is ordered");
// }
// function deliverPizza() {
//   console.log("pizze is delivered");
// }
// function newPreparePizza(callbackFunction) {
//   setTimeout(() => {
//     console.log("pizze is preparing");
//     callbackFunction()
//   }, 2000);
// }
// orderPizza();
// newPreparePizza(deliverPizza)

// function checkEven(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num % 2 == 0) {
//         resolve("Even Number");
//       } else {
//         reject("Odd Number");
//       }
//     }, 2000);
//   });
// }

// // checkEven(34).
// // then((result) => {
// //   let mainresult = `updated msg is ${result}`
// //   console.log(mainresult)})
// // .catch(error => console.log(error))

// // async
// async function getresult() {
//   try {
//     const result = await checkEven(345);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getresult();

const mainDiv = document.getElementById("main-content");
async function getData() {
  try {
    const result = await fetch("https://fakestoreapi.com/products/");
    const data = await result.json();
    console.log(data);
    data.map((element) => {
      const subDiv = document.createElement("div");
      subDiv.className = "card";
      subDiv.innerHTML = `
      <img src=${element.image} alt="" />
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        <p class="price">Rs ${element.price}</p>
      `;
      mainDiv.append(subDiv)
    });
    console.log(mapObj);
  } catch (error) {
    console.log(error);
  }
}
getData();

async function getDatawithoutAsyc(){
  const result = await fetch("https://fakestoreapi.com/products/");
    console.log("result", result);
}
getDatawithoutAsyc()