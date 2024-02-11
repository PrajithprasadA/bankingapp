window.addEventListener('scroll', function() {
    var image = document.getElementById('moving-image-right');
    var scrollPos = window.scrollY;
  
    // Distance from the top of the viewport where the image starts moving
    var threshold = 200;
  
    // Distance from the top of the viewport where the image disappears
    var disappearanceThreshold = 500;
  
    if (scrollPos > threshold) {
      image.style.right = '-100%'; // Move image completely inside the right edge
      image.style.top = 'calc(5cm + 100vh)'; // Move image down by 5 centimeters
    } else {
      image.style.right = '0'; // Reset image position
      image.style.top = '5cm'; // Reset image position
    }
  
    // Make the image disappear after a certain scroll distance
    if (scrollPos > disappearanceThreshold) {
      image.style.opacity = '0';
    } else {
      image.style.opacity = '1';
    }
  });
  



  function scrollToCentral() {
    var centralPortion = document.getElementById('export');
    centralPortion.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    
  }
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }


  document.getElementById("viewPageButton").addEventListener("click", function() {
    // Redirect to another HTML page
    window.location.href = "signup.html";
});

document.getElementById("viewPage2Button").addEventListener("click", function() {
  // Redirect to page 2
  window.location.href = "singin.html";
});





