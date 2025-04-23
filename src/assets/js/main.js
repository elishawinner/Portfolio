/**
 * Template Name: iPortfolio - v3.3.0
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Helper functions
   */
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const elements = select(el, all);
    if (elements) {
      if (all) elements.forEach(e => e.addEventListener(type, listener));
      else elements.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * Navbar link active state on scroll
   */
  const navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach(link => {
      if (!link.hash) return;
      const section = select(link.hash);
      if (!section) return;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scroll to element with header offset
   */
  const scrollto = el => {
    const elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    });
  };

  /**
   * Back to top button
   */
  const backtotop = select('.back-to-top');
  const toggleBacktotop = () => {
    if (window.scrollY > 100) backtotop.classList.add('active');
    else backtotop.classList.remove('active');
  };
  window.addEventListener('load', toggleBacktotop);
  onscroll(document, toggleBacktotop);

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function () {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  /**
   * Smooth scroll for links with .scrollto class
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault();

      if (select('body').classList.contains('mobile-nav-active')) {
        select('body').classList.remove('mobile-nav-active');
        const navToggle = select('.mobile-nav-toggle');
        navToggle.classList.toggle('bi-list');
        navToggle.classList.toggle('bi-x');
      }

      scrollto(this.hash);
    }
  }, true);

  /**
   * Scroll on load with hash links
   */
  if (window.location.hash && select(window.location.hash)) {
    scrollto(window.location.hash);
  }

  /**
   * Hero typing effect
   */
  const typed = select('.typed');
  if (typed) {
    const typedStrings = typed.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  const skillsContent = select('.skills-content');
  if (skillsContent) {
    new Waypoint({
      element: skillsContent,
      offset: '80%',
      handler: () => {
        const progressBars = select('.progress .progress-bar', true);
        progressBars.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  }

  /**
   * Portfolio filter using Isotope (optional - if Isotope is loaded)
   */
  const portfolioContainer = select('.portfolio-container');
  if (portfolioContainer && typeof Isotope !== 'undefined') {
    const portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item'
    });

    const filters = select('#portfolio-flters li', true);
    on('click', '#portfolio-flters li', function (e) {
      e.preventDefault();
      filters.forEach(el => el.classList.remove('filter-active'));
      this.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });

      portfolioIsotope.on('arrangeComplete', () => {
        AOS.refresh();
      });
    }, true);
  }

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 20 }
    }
  });

  /**
   * AOS animation
   */
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});
