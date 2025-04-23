import React, { useEffect } from 'react';

// Portfolio Item Types and Component
type PortfolioCategory = 'web' | 'mobile' | 'graphic';

interface PortfolioItemProps {
  id: string;
  image: string;
  title: string;
  category: PortfolioCategory;
  detailsLink: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  title,
  category,
  detailsLink
}) => {
  return (
    <div className={`col-lg-12 col-md-6 portfolio-item filter-${category}`}>
      <div className="portfolio-wrap">
        <img src={image} className="img-fluid" alt={title} />
        <div className="portfolio-links">
          <a
            href={image}
            data-gallery="portfolioGallery"
            className="portfolio-lightbox"
            title={title}
          >
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

// Portfolio Data
const portfolioItems: PortfolioItemProps[] = [
  {
    id: '1',
    image: 'assets/img/portfolio/3.png',
    title: 'Web Project 1',
    category: 'web',
    detailsLink: 'portfolio-details.html'
  },
  {
    id: '2',
    image: 'assets/img/portfolio/2Untitled.png',
    title: 'Mobile App 1',
    category: 'mobile',
    detailsLink: 'portfolio-details.html'
  },
  // Add all other portfolio items following this pattern...
];

const Home: React.FC = () => {
  useEffect(() => {
    const loadExternalScript = () => {
      const existingScript = document.getElementById('external-script');
      if (existingScript) return;

      const externalScript = document.createElement("script");
      externalScript.id = "external-script";
      externalScript.async = true;
      externalScript.src = '/assets/js/main.js';
      externalScript.setAttribute("crossorigin", "anonymous");
      document.body.appendChild(externalScript);
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
          <p>I'm <span className="typed" data-typed-items="Full Stack Developer, UI/UX Developer, Graphic Designer, Database Administrator"></span></p>
        </div>
      </section>

      <main id="main">
        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img 
                  src="assets/img/profile-img.jpg" 
                  width="240" 
                  height="240" 
                  className="img-fluid" 
                  alt="Elisha Akan Profile"
                />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Full Stack Developer</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://dev.bvcpartners.com.ng</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>08169692053</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>4 Joe Onabanjo Clues, Ire, Akari Ested, Isolo Lagos State</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Btech & AZ-104: Azure administrators</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>elisha.officially@gmail.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Diligent software engineer with 8+ years experience in commercial application development...
              </p>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-web">Web App</li>
                  <li data-filter=".filter-mobile">Mobile App</li>
                  <li data-filter=".filter-graphic">Graphic</li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
              {portfolioItems.map((item) => (
                <PortfolioItem
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Website Services</h2>
            </div>
            {/* Services content... */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Elisha Akan</span></strong>
          </div>
          <div className="credits">
            Designed by <a href="#/">Elisha Akan</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
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