var momentTime = document.querySelector(".momenttime");
var checkTime = function () {
  var hour = $(".hour").text().trim();

  var time = moment(hour, "LT");
  console.log(time);

  $(".hour").removeClass(".present .past .future");

  if (moment().isAfter(time)) {
    $(".hour").addClass(".past");
  } else if (moment().isBefore(time)) {
    $(".hour").addClass(".future");
  } else {
    $(".hour").addClass(".present");
  }
};
checkTime();

var text9 = document.querySelector(".form-control9");
var save9 = document.querySelector(".save9");
var storageInput9 = document.querySelector(".form-control9");
var storedInput9 = localStorage.getItem("textinput9");
var color = document.querySelector(".textarea");

var text10 = document.querySelector(".form-control10");
var save10 = document.querySelector(".save10");
var storageInput10 = document.querySelector(".form-control10");
var storedInput10 = localStorage.getItem("textinput10");

var text11 = document.querySelector(".form-control11");
var save11 = document.querySelector(".save11");
var storageInput11 = document.querySelector(".form-control11");
var storedInput11 = localStorage.getItem("textinput11");

var text12 = document.querySelector(".form-control12");
var save12 = document.querySelector(".save12");
var storageInput12 = document.querySelector(".form-control12");
var storedInput12 = localStorage.getItem("textinput12");

var text1 = document.querySelector(".form-control1");
var save1 = document.querySelector(".save1");
var storageInput1 = document.querySelector(".form-control1");
var storedInput1 = localStorage.getItem("textinput1");

var text2 = document.querySelector(".form-control2");
var save2 = document.querySelector(".save2");
var storageInput2 = document.querySelector(".form-control2");
var storedInput2 = localStorage.getItem("textinput2");

var text3 = document.querySelector(".form-control3");
var save3 = document.querySelector(".save3");
var storageInput3 = document.querySelector(".form-control3");
var storedInput3 = localStorage.getItem("textinput3");

var text4 = document.querySelector(".form-control4");
var save4 = document.querySelector(".save4");
var storageInput4 = document.querySelector(".form-control4");
var storedInput4 = localStorage.getItem("textinput4");

var text5 = document.querySelector(".form-control5");
var save5 = document.querySelector(".save5");
var storageInput5 = document.querySelector(".form-control5");
var storedInput5 = localStorage.getItem("textinput5");

var text6 = document.querySelector(".form-control6");
var save6 = document.querySelector(".save6");
var storageInput6 = document.querySelector(".form-control6");
var storedInput6 = localStorage.getItem("textinput6");

momentTime.innerHTML = moment().format("LLLL");

if (text9) {
  text9.textContent = storedInput9;
}
storageInput9.addEventListener("input", (letter) => {
  text9.textContent = letter.target.value;
});
const saveToLocalStorage9 = () => {
  localStorage.setItem("textinput9", text9.textContent);
};
save9.addEventListener("click", saveToLocalStorage9);

if (text10) {
  text10.textContent = storedInput10;
}
storageInput10.addEventListener("input", (letter) => {
  text10.textContent = letter.target.value;
});
const saveToLocalStorage10 = () => {
  localStorage.setItem("textinput10", text10.textContent);
};
save10.addEventListener("click", saveToLocalStorage10);

if (text11) {
  text11.textContent = storedInput11;
}
storageInput11.addEventListener("input", (letter) => {
  text11.textContent = letter.target.value;
});
const saveToLocalStorage11 = () => {
  localStorage.setItem("textinput11", text11.textContent);
};
save11.addEventListener("click", saveToLocalStorage11);

if (text12) {
  text12.textContent = storedInput12;
}
storageInput12.addEventListener("input", (letter) => {
  text12.textContent = letter.target.value;
});
const saveToLocalStorage12 = () => {
  localStorage.setItem("textinput12", text12.textContent);
};
save12.addEventListener("click", saveToLocalStorage12);

if (text1) {
  text1.textContent = storedInput1;
}
storageInput1.addEventListener("input", (letter) => {
  text1.textContent = letter.target.value;
});
const saveToLocalStorage1 = () => {
  localStorage.setItem("textinput1", text1.textContent);
};
save1.addEventListener("click", saveToLocalStorage1);

if (text2) {
  text2.textContent = storedInput2;
}
storageInput2.addEventListener("input", (letter) => {
  text2.textContent = letter.target.value;
});
const saveToLocalStorage2 = () => {
  localStorage.setItem("textinput2", text2.textContent);
};
save2.addEventListener("click", saveToLocalStorage2);

if (text3) {
  text3.textContent = storedInput3;
}
storageInput3.addEventListener("input", (letter) => {
  text3.textContent = letter.target.value;
});
const saveToLocalStorage3 = () => {
  localStorage.setItem("textinput3", text3.textContent);
};
save3.addEventListener("click", saveToLocalStorage3);

if (text4) {
  text4.textContent = storedInput4;
}
storageInput4.addEventListener("input", (letter) => {
  text4.textContent = letter.target.value;
});
const saveToLocalStorage4 = () => {
  localStorage.setItem("textinput4", text4.textContent);
};
save4.addEventListener("click", saveToLocalStorage4);

if (text5) {
  text5.textContent = storedInput5;
}
storageInput5.addEventListener("input", (letter) => {
  text5.textContent = letter.target.value;
});
const saveToLocalStorage5 = () => {
  localStorage.setItem("textinput5", text5.textContent);
};
save5.addEventListener("click", saveToLocalStorage5);

if (text6) {
  text6.textContent = storedInput6;
}
storageInput6.addEventListener("input", (letter) => {
  text6.textContent = letter.target.value;
});
const saveToLocalStorage6 = () => {
  localStorage.setItem("textinput6", text6.textContent);
};
save6.addEventListener("click", saveToLocalStorage6);
