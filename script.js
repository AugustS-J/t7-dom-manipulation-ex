//Write your own code here
//DON'T touch any other files!

//Remove all break tags
document.querySelectorAll("br").forEach((elm) => elm.remove());

//Give all sections the class "filled"
document.querySelectorAll("section").forEach((elm) => elm.classList.add("filled"));

//Remove all elements that come before a section
document.querySelectorAll("section").forEach((elm) => elm.previousElementSibling.remove());

//console.log(this);
