const header = document.querySelector("header");

const burgerMenuIcon = document.querySelector(".header__burger");
const crossBurgerIcon = document.querySelector(".header__burger-last_on");
const navList = document.querySelector(".header__nav-wrapper_list");
const logo = document.querySelector(".header__nav-logo");
const nav = document.querySelector(".header__nav");
const main = document.querySelector("main");

burgerMenuIcon.onclick = () => {
  burgerMenuIcon.classList.remove("on");
  burgerMenuIcon.classList.add("off");

  crossBurgerIcon.classList.remove("off");
  crossBurgerIcon.classList.add("on");

  header.classList.add("header-opened");
  nav.classList.add("header__nav-opened");
  logo.classList.add("off");
  navList.classList.add("list_flex");
};

crossBurgerIcon.onclick = () => {
  crossBurgerIcon.classList.remove("on");
  crossBurgerIcon.classList.add("off");
  nav.classList.remove("header__nav-opened");
  logo.classList.remove("off");
  main.classList.add("off"); //???

  burgerMenuIcon.classList.remove("off");
  burgerMenuIcon.classList.add("on");

  header.classList.remove("header-opened");
  navList.classList.remove("list_flex");
};
