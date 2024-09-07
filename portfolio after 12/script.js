    const aboutSection = document.getElementById('about');
    const aboutText = document.querySelector('.about_me');

    aboutSection.addEventListener('scrollIntoView', () => {
        aboutText.classList.add('animate');
    });

    aboutSection.addEventListener('scrollOutView', () => {
        aboutText.classList.remove('animate');
    });
    function isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
        window.addEventListener('scroll', () => {
        if (isScrolledIntoView(aboutSection)) {
            aboutSection.dispatchEvent(new Event('scrollIntoView'));
        } else {
            aboutSection.dispatchEvent(new Event('scrollOutView'));
        }
    });

          // Get the viewport width and height
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
  
          // Define the breakpoints for different screen sizes
          const breakpoints = {
              mobile: 480,
              tablet: 768,
              desktop: 1024
          };
  
          function adjustLayout() {
              if (viewportWidth <= breakpoints.mobile) {
                  document.body.classList.add('mobile');
              } else if (viewportWidth <= breakpoints.tablet) {
                  document.body.classList.add('tablet');
              } else {
                  document.body.classList.add('desktop');
              }
          }
  
          window.addEventListener('resize', adjustLayout);
  
          adjustLayout();