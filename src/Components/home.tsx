import React,{useState} from 'react'

export default function Home() {
    const slides = [
        {
          image: '/assets/images/slider/1.jpg',
          captionTitle: 'Our Attorneys Always Provide The Excellent Service',
          captionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
          captionImage: '/assets/images/slider/1.png',
        },
        {
          image: '/assets/images/slider/3.jpg',
          captionTitle: 'Our Attorneys Always Provide The Excellent Service',
          captionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
          captionImage: '/assets/images/slider/3.png',
        },
        {
          image: '/assets/images/slider/2.jpg',
          captionTitle: 'Our Attorneys Always Provide The Excellent Service',
          captionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
          captionImage: '/assets/images/slider/2.png',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
  return (
    <div> 
         {/* <section className="slider">
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="assets/images/slider/1.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="_nb_mc">
                           <h2>Our Attorneys Always Provide The Excellent Service</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut
                            </p>
                            <a href="#">Contact us</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="_kl_gh_er">
                            <img src="assets/images/slider/1.png"/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/images/slider/3.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="_nb_mc">
                           <h2>Our Attorneys Always Provide The Excellent Service</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut
                            </p>
                            <a href="#">Contact us</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="_kl_gh_er">
                            <img src="assets/images/slider/3.png"/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/images/slider/2.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="_nb_mc kl_bd_we">
                           <h2>Our Attorneys Always Provide The Excellent Service</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut
                            </p>
                            <a href="#">Contact us</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="_kl_gh_er">
                            <img src="assets/images/slider/2.png"/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
</section> */}
<section className="slider">

<div id="carouselExampleCaptions" className=" relative carousel slide" data-ride="carousel">
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              
              className="block w-full h-full object-cover d-block w-100"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50  items-center justify-center">
              <div className="container mx-auto text-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-4">
                    <h2 className="text-2xl md:text-4xl font-bold">{slide.captionTitle}</h2>
                    <p className="mt-4">{slide.captionText}</p>
                    <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact us</a>
                  </div>
                  <div className="hidden md:block">
                    <img src={slide.captionImage} alt="" className="w-full h-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
      >
        &#9664;
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
      >
        &#9664;
      </button>
      </div>
    </section>
<section className="_po_jy_fr">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="_cs_we_er">
                    <div className="img-09">
                        <img src="assets/images/welcome-img.jpg"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="_pl_io_de">
                    <div className="_ty_we_xs">
                        <h2>Welcome to Lawyers</h2>
                        <p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-001">
                                <i className="fas fa-registered"></i>
                                <h3>Request A Lawyer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget maximus volutpat</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-001">
                               <i className="far fa-file-alt"></i>
                                <h3>Case Investigation</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget maximus volutpat</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-001">
                                <i className="fas fa-address-card"></i>
                                <h3>Search Directory</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget maximus volutpat</p>
                            </div>
                        </div>
                    </div>
                    <a href="#">Contact us</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="services-01">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="head-01">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-landmark"></i>
                    <h3>FREE CONSULTING</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-concierge-bell"></i>
                    <h3>SPECIAL SERVICES</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-user-tie"></i>
                    <h3>DISCUSS STRATEGY BUILDS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-american-sign-language-interpreting"></i>
                    <h3>MEDIATION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-gavel"></i>
                    <h3>CILVIL LAW</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-users"></i>
                    <h3>FAMILY DISPUTES</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-anchor"></i>
                    <h3>CRIMINAL CHARGES</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ser-box">
                    <i className="fas fa-money-check"></i>
                    <h3>BANKRUPTCY</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="bg-01">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div className="_lk_bg_cd">
                    <i className="fas fa-mug-hot"></i>
                  <div className="counting" data-count="967">0</div>
                  <h5>Attorneys</h5>
                </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div className="_lk_bg_cd">
                    <i className="fas fa-gavel"></i>
                  <div className="counting" data-count="800">0</div>
                  <h5>Case Won</h5>
                </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div className="_lk_bg_cd">
                    <i className="fas fa-balance-scale-right"></i>
                  <div className="counting" data-count="200">0</div>
                  <h5>Legal Way</h5>
                </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <div className="_lk_bg_cd">
                    <i className="fas fa-mug-hot"></i>
                  <div className="counting" data-count="2067">0</div>
                  <h5>Happy Clients</h5>
                </div>
          </div>
        </div>
    </div>
</section>


<section className="bg-02">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="head-01">
                    <h2>Meet our team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="team-main-box">
                    <img src="assets/images/team/3.jpg"/>
                    <div className="team-content-box">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                        <h3>Williams</h3>
                        <b>Attorneys</b>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="team-main-box">
                    <img src="assets/images/team/2.jpg"/>
                    <div className="team-content-box">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                        <h3>Anderson john</h3>
                        <b>Criminal Consultant</b>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="team-main-box">
                    <img src="assets/images/team/4.jpg"/>
                    <div className="team-content-box">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                        <h3>Sarah Se</h3>
                        <b>Family Consultant</b>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="team-main-box">
                    <img src="assets/images/team/1.jpg"/>
                    <div className="team-content-box">
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                        <h3>Williams</h3>
                        <b>Divorce Consultant</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="bg-03">
    <div className="container">
        <div className="row">
           <div className="col-12">
                <div className="head-01">
                    <h2>Latest news</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt</p>
                </div>
            </div> 
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <article className="_kl_cd">
                    <div className="_i-tr">
                        <img src="assets/images/blog/1.jpg"/>
                    </div>
                    <div className="_oi_er_we">
                        <h3>By Whom Your Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....</p>
                    </div>
                </article>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <article className="_kl_cd">
                    <div className="_i-tr">
                        <img src="assets/images/blog/1.jpg"/>
                    </div>
                    <div className="_oi_er_we">
                        <h3>By Whom Your Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....</p>
                    </div>
                </article>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <article className="_kl_cd">
                    <div className="_i-tr">
                        <img src="assets/images/blog/1.jpg"/>
                    </div>
                    <div className="_oi_er_we">
                        <h3>By Whom Your Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....</p>
                    </div>
                </article>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <article className="_kl_cd">
                    <div className="_i-tr">
                        <img src="assets/images/blog/1.jpg"/>
                    </div>
                    <div className="_oi_er_we">
                        <h3>By Whom Your Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....</p>
                    </div>
                </article>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <article className="_kl_cd">
                    <div className="_i-tr">
                        <img src="assets/images/blog/1.jpg"/>
                    </div>
                    <div className="_oi_er_we">
                        <h3>By Whom Your Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....</p>
                    </div>
                </article>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <article className="_kl_cd">
                    <div className="_i-tr">
                        <img src="assets/images/blog/1.jpg"/>
                    </div>
                    <div className="_oi_er_we">
                        <h3>By Whom Your Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis....</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>
</div>
  )
}
