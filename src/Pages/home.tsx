import React, { useEffect } from 'react';
import './Home.css'; // Create this CSS file

type PortfolioCategory = 'web' | 'mobile' | 'graphic';

interface PortfolioItemProps {
  id: string;
  image: string;
  title: string;
  category: PortfolioCategory;
  detailsLink: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category, detailsLink }) => {
  return (
    <div className={`col-lg-12 col-md-6 portfolio-item filter-${category}`}>
      <div className="portfolio-wrap">
        <img src={image} className="img-fluid" alt={title} />
        <div className="portfolio-links">
          <a href={image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={title}>
            <i className="bx bx-plus"></i>
          </a>
          <a href={detailsLink} title="More Details">
            <i className="bx bx-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const portfolioItems: PortfolioItemProps[] = [
  // Add all your portfolio items here
  {
    id: '1',
    image: 'assets/img/portfolio/3.png',
    title: 'Web Project 1',
    category: 'web',
    detailsLink: 'portfolio-details.html'
  },
  // ... other items
];

const Home: React.FC = () => {
  useEffect(() => {
    const loadExternalScript = () => {
      const existingScript = document.getElementById('external-script');
      if (existingScript) return;

      const script = document.createElement('script');
      script.id = 'external-script';
      script.async = true;
      script.src = '/assets/js/main.js';
      script.setAttribute('crossorigin', 'anonymous');
      document.body.appendChild(script);
    };

    loadExternalScript();

    return () => {
      const script = document.getElementById('external-script');
      if (script) document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Elisha Akan</h1>
          <p>
            I'm <span className="typed" data-typed-items="Full Stack Developer, UI/UX Developer, Graphic Designer, Database Administrator"></span>
          </p>
        </div>
      </section>

      <main id="main">
        {/* About Section */}
        <section id="about" className="about">
          {/* ... existing about content ... */}
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Diligent software engineer with 9+ years experience...</p>
            </div>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
              {portfolioItems.map((item) => (
                <PortfolioItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          {/* ... existing services content ... */}
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">&copy; Copyright <strong>Elisha Akan</strong></div>
          <div className="credits">Designed by <a href="#/">Elisha Akan</a></div>
        </div>
      </footer>

      <button 
        className="back-to-top d-flex align-items-center justify-content-center"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
};

export default Home;