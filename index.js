function toggleDiv(clickedDivId) {
    // Get all div elements
    var allDivs = document.querySelectorAll('[id^="slider_"]');
    
    // Iterate through all divs
    allDivs.forEach(function(div) {
      if (div.id === clickedDivId) {
        // Show the clicked div
        div.classList.remove('hidden');
      } else {
        // Hide other divs
        div.classList.add('hidden');
      }
    });
  }
