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
  document.addEventListener("DOMContentLoaded", function() {
    var b = document.getElementById('indicator');
    b.addEventListener('click', b.classList.add('active'), false);
    console.log('here');
});
  

  function scrolltoslide(index, event) {
    if (event && event.preventDefault) { event.preventDefault(); event.currentTarget.classList.add('active'); console.log('here'); }
    const carousel = document.getElementById('connectivity_carousel');
    const targetSlide = document.querySelectorAll('.connectivity_slide')[index];

    carousel.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth'
    });    
  }
  
  function scrolltoslide_service(index) {
    const carousel = document.getElementById('service_carousel');
    const targetSlide = document.querySelectorAll('.service_slide')[index];

    carousel.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth'
    });
      
  }
  scrolltoslide_analysis
  function scrolltoslide_optimization(index) {
    const carousel = document.getElementById('optimization_carousel');
    const targetSlide = document.querySelectorAll('.optimization_slide')[index];

    carousel.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth'
    });    
  }

  function scrolltoslide_analysis(index) {
    const carousel = document.getElementById('analysis_carousel');
    const targetSlide = document.querySelectorAll('.analysis_slide')[index];

    carousel.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth'
    });    
  }