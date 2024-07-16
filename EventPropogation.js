console.log("Hello");


//  Event Bubbling - Event execute from buttom to top -  


const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");


//  event.currentTarget vs event.target vs this.target 

// function func(event) {
//   alert("currentTarget = " + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this=" + this.tagName);
// }

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);


//  Event capturing / Trickling - Event execute from top to buttom -

// div.addEventListener("click", function (event) {
//     alert("div");
//   }, {
//     capture: true
//   }
// );
  
//   form.addEventListener("click", function (event) {

//     alert("form");
//   },{
//     capture : true
//   }
// );
  
//   button.addEventListener("click", function (event) {
//     alert("button");
//   },{
//     capture : true
//   }
// );


//  Stop bubbling or capturing using stopPropogation() - 


div.addEventListener("click", function (event) {
    event.stopPropagation();
    alert("div");
  });
  
  form.addEventListener("click", function (event) {
    event.stopPropagation();
    alert("form");
  });
  
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    alert("button");
  });
  
  

//  Event Delegation - 


document.querySelector(".products").addEventListener("click", (event) => {
    console.log(event.target.className);
  
    if (event.target.tagName === "SPAN") {
      window.location.href += "/" + event.target.className;
    }
});


 // Question 7 : Create a Modal which closes by clicking on negative space

const container = document.querySelector(".modalContainer");
const button1 = document.querySelector(".modalButton");

button1.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(toggle) {
  container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (e) => {
  if (e.target.className === "modalContainer") toggleModal(false);
});
