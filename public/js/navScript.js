// Get the button and the FontAwesome icon
const button = document.querySelector('.nav-icon-btn');
const icon = button.querySelector('i.fa-solid');
const ul = document.querySelector('.nav-ul-items');
  
// Add click event listener to the button
button.addEventListener('click', function(e) {
  e.preventDefault();
  // Toggle the 'fa-bars' and 'fa-times' classes on the icon
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  ul.classList.toggle('vertical-nav-ul');
});
 
 


 
