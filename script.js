// Variable Declarations
let mediaQuery = window.matchMedia("(max-width: 900px)");
let mediaQuery2 = window.matchMedia("(min-width: 901px)");
const navBar = document.querySelector('.navbar');
const accordionItems = document.querySelectorAll('.collapse.show');
const input = document.querySelector('.form-control');
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.nav-searchbar');

//Navbar&Accordion Hide on scroll down Show on scroll up
let currentScroll = 0;
let previousScroll = 0;
function onScrollEvents(){
  currentScroll = window.pageYOffset;
  if (currentScroll > previousScroll) {
    navBar.classList.add("scrolling-down");
    navBar.classList.remove("scrolling-up");
    document.querySelector('#offcanvas-close').click();
  } else {
    navBar.classList.add("scrolling-up");
    navBar.classList.remove("scrolling-down");
  }
  previousScroll = currentScroll;

  const accordion = document.querySelectorAll('#collapseDiv1, #collapseDiv2, #collapseDiv3, #collapseDiv4');
  for (let item of accordion){
    if (item.classList.contains('show')) {
      document.querySelector('.accordion-button').click();
      document.querySelector('#offcanvas-close').click();
    } 
  }
}

//Navbar sub menu toggle
function toggleNavAccordion(mediaQuery) {
  if (mediaQuery.matches) {
    accordionItems.forEach(item => {
      item.classList.remove('show');
      item.classList.add('collapse');
    });
  } else{
    accordionItems.forEach(item => {
      item.classList.add('show');
      item.classList.remove('collapse');
    });
  }
}

//Accordion Footer toggle
toggleFooterAccordion = () => {
  const buttons = document.querySelectorAll('.footer-acc-col');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(b => {
        if (b !== button) b.checked = false;
      });
    });
  });
};


//Event Handling
window.onresize = function() {
  toggleNavAccordion(mediaQuery);
  document.querySelector('#brand-logo2').click();
};
document.addEventListener("change", function() {
  toggleNavAccordion(mediaQuery);
});
document.addEventListener("DOMContentLoaded", function() {
  toggleNavAccordion(mediaQuery);
});
searchIcon.addEventListener('click', function() {
  searchBar.classList.toggle('active');
});
window.addEventListener("scroll", onScrollEvents);
toggleFooterAccordion();
toggleNavAccordion(mediaQuery);