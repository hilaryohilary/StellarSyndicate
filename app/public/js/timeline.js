 // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  
    function reveal() {
        let windowheight = window.innerHeight;

        items.forEach(paragraph => {
          let revealtop = paragraph.getBoundingClientRect().top;
          let revealpoint = 100;
          if(revealtop < windowheight - revealpoint) {
          paragraph.classList.add('in-view');
        }

        else {
          paragraph.classList.remove('in-view');
        }
        });
      
      }
  
  
  
    // listen for events
    window.addEventListener("load", reveal);
    window.addEventListener("resize", reveal);
    window.addEventListener("scroll", reveal);
  
  