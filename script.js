"use strict";

const body = document.querySelector("body");

const service1 = document.getElementById("service1");
const service2 = document.getElementById("service2");
const service3 = document.getElementById("service3");
const service4 = document.getElementById("service4");
const service5 = document.getElementById("service5");
const service6 = document.getElementById("service6");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");

service1.addEventListener("click", (event) => {
  modal1.classList.remove("display-none");
  body.classList.add("remove-scroll");
});

service2.addEventListener("click", (event) => {
  modal2.classList.remove("display-none");
  body.classList.add("remove-scroll");
});

service3.addEventListener("click", (event) => {
  modal3.classList.remove("display-none");
  body.classList.add("remove-scroll");
});

service4.addEventListener("click", (event) => {
  modal4.classList.remove("display-none");
  body.classList.add("remove-scroll");
});

service5.addEventListener("click", (event) => {
  modal5.classList.remove("display-none");
  body.classList.add("remove-scroll");
});

service6.addEventListener("click", (event) => {
  modal6.classList.remove("display-none");
  body.classList.add("remove-scroll");
});

modal1.addEventListener("click", (event) => {
  modal1.classList.add("display-none");
  body.classList.remove("remove-scroll");
});

modal2.addEventListener("click", (event) => {
  modal2.classList.add("display-none");
  body.classList.remove("remove-scroll");
});

modal3.addEventListener("click", (event) => {
  modal3.classList.add("display-none");
  body.classList.remove("remove-scroll");
});

modal4.addEventListener("click", (event) => {
  modal4.classList.add("display-none");
  body.classList.remove("remove-scroll");
});

modal5.addEventListener("click", (event) => {
  modal5.classList.add("display-none");
  body.classList.remove("remove-scroll");
});

modal6.addEventListener("click", (event) => {
  modal6.classList.add("display-none");
  body.classList.remove("remove-scroll");
});
