// Loading page functionality
// $(document).ready(function() {
//     load();
    
// function load(){
//     setTimeout(function(){
//         $('.loader').addClass('loaded');
//     }, 3000);
//     }
// });

// Loading page functionality
document.addEventListener('DOMContentLoaded', function() {
    load();
  
    function load() {
      setTimeout(() => {
        document.querySelector('.loader').classList.add('loaded');
      }, 3000);
    }
  });