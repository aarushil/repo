
// Scripts for animations
// 
// function isScrolledIntoView(elem) {
//   var docViewTop = $('.wrapper').scrollTop();
//   var docViewBottom = docViewTop + $('.wrapper').height();

//   var elemTop = $(elem).offset().top - $(elem).offsetParent().offset().top;
//   var elemBottom = elemTop + $(elem).height();
//   console.log(elemTop);
//   console.log(elemBottom <= docViewBottom) && (elemTop >= docViewTop);
//   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


function readMore(elem){
  elem.parent().find('.agenda-para').addClass('scrollHeight');
}
window.addEventListener('DOMContentLoaded', event => {
 

// You can also pass an optional settings object
// below listed default settings

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



});
// $('.wrapper').on('scroll', function() {
 

//     $(".main-sections").each(function() {
//     //   if (isScrolledIntoView($(this))) {
//         // $(this).addClass("active-section");
//         $(this).find('.animated').addClass('go')
//     //   }
//     });
//   });
const initAnimatedCounts = () => {
    const ease = (n) => {
      return --n * n * n + 1;
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.circle').forEach((target) => {
            target.classList.add('go');
          })
          
          // Once this element is in view and starts animating, remove the observer,
          // because it should only animate once per page load.
          observer.unobserve(entry.target);
          const countToString = entry.target.getAttribute('data-countTo');
          const countTo = parseFloat(countToString);
          const duration = parseFloat(entry.target.getAttribute('data-animateDuration'));
          const countToParts = countToString.split('.');
          const precision = countToParts.length === 2 ? countToParts[1].length : 0;
          const startTime = performance.now();
          const step = (currentTime) => {
            const progress = Math.min(ease((currentTime  - startTime) / duration), 1);
            entry.target.textContent = (progress * countTo).toFixed(precision);
            if (progress < 1) {
              animationFrame = window.requestAnimationFrame(step);
            } else {
              window.cancelAnimationFrame(animationFrame);
            }
          };
          let animationFrame = window.requestAnimationFrame(step);
        }
      });
    });
    document.querySelectorAll('[data-animateDuration]').forEach((target) => {
      target.setAttribute('data-countTo', target.textContent);
      target.textContent = '0';
      observer.observe(target);
    });
  };
  initAnimatedCounts();


