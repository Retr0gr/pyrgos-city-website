import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard from '../components/blog-post-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pyrgos Website</title>
        <meta property="og:title" content="Pyrgos Website" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <div className="home-navbar">
            <div className="home-container01">
              <img
                alt="search3271286"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg=="
                className="home-image"
              />
              <input
                type="text"
                placeholder="search"
                className="home-textinput input"
              />
            </div>
            <div className="home-middle">
              <div className="home-left">
                <Link to="/" className="home-text navbar-link">
                  HOME
                </Link>
                <a href="#programs" className="home-text01 navbar-link">
                  PROGRAMS
                </a>
                <a href="#cityguide" className="home-text02 navbar-link">
                  CITY GUIDE
                </a>
              </div>
              <div className="home-container02">
                <img
                  alt="image"
                  src="/playground_assets/pyrgoslogo-1500h.png"
                  className="home-image1"
                />
              </div>
              <div className="home-right">
                <a href="#gallery" className="home-text03 navbar-link">
                  GALLERY
                </a>
                <a href="#news" className="home-text04 navbar-link">
                  NEWS
                </a>
                <a href="#contact" className="home-text05 navbar-link">
                  CONTACT
                </a>
              </div>
            </div>
            <div className="home-icons">
              <div
                data-thq="thq-dropdown"
                className="home-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle"
                >
                  <img
                    alt="AccountCircle3271301"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg=="
                    className="home-image2"
                  />
                  <span className="home-text06">LOGIN</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle1"
                    >
                      <span className="home-text07">Email:</span>
                      <input
                        type="text"
                        name="email"
                        className="input home-textinput1"
                      />
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle2"
                    >
                      <span className="home-text08">
                        <span className="home-text09">Password:</span>
                        <br></br>
                      </span>
                      <input
                        type="text"
                        name="email"
                        className="input home-textinput2"
                      />
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle3"
                    >
                      <button className="button">
                        <span>
                          <span>LOGIN</span>
                          <br></br>
                        </span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon2">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav"
          >
            <div className="home-container03">
              <img
                alt="image"
                src="/playground_assets/pyrgoslogo-1500h.png"
                className="home-image3"
              />
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav1"
            >
              <Link to="/" className="home-navlink">
                Home
              </Link>
              <a href="#programs" className="home-link">
                Programs
              </a>
              <a href="#cityguide" className="home-link1">
                City Guide
              </a>
              <a href="#gallery" className="home-link2">
                Gallery
              </a>
              <a href="#news" className="home-link3">
                <span className="home-text14">News</span>
                <br></br>
              </a>
              <a href="#contact" className="home-link4">
                <span>Contact</span>
                <br></br>
              </a>
              <a href="#contact" className="home-link5">
                <span>Login</span>
                <br></br>
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero1">
              <div className="home-container04">
                <h1 className="home-text20 Heading-1">WELCOME TO PYRGOS</h1>
                <div className="home-container05">
                  <span className="home-text21">
                    YOUR NEXT TRAVEL DESTINATION
                  </span>
                </div>
              </div>
              <img
                alt="image23271449"
                src="/playground_assets/latseio_4_pyrgos-1-1500w.jpg"
                className="home-image4"
              />
            </div>
          </div>
        </div>
        <div className="section-container column">
          <div id="programs" className="home-max-width1 max-width-container">
            <SectionHeading
              heading="CITY PROGRAMS"
              subtitle="Some of our local programs click to view more"
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard
                name="Teaching Children Pottery Using Ancient Greek Methods"
                category_img="/playground_assets/program1-1500w.jpg"
                rootClassName="category-card-root-class-name1"
              ></CategoryCard>
              <CategoryCard
                name="Charity Perfomance for Ukraine"
                category_img="/playground_assets/news2-1500w.jpg"
                rootClassName="category-card-root-class-name"
              ></CategoryCard>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container06">
              <h3 className="home-text22 Heading-3">City Guide</h3>
            </div>
          </div>
          <div id="cityguide" className="home-container07 max-width-container">
            <h1>City History</h1>
            <div className="home-container08">
              <span className="home-text24">
                At the same location where Pyrgos is placed today, the Ancient
                city Dyspontio was located. On the outskirts of Pyrgos there was
                the ancient city Letrina, from which it had also taken its name
                as Municipality Letrinon up to the Decade 1980. The name of the
                city emanates from the tower that had been manufactured, in
                1512, in the place of the Courthouse (Eparcheion) by the bey of
                the wider region Georgios Tsernotas.
              </span>
              <img
                alt="image"
                src="/playground_assets/oldpyrgos-800w.jpg"
                className="home-image5"
              />
              <span className="home-text25">
                At the period of Ottoman domination Pyrgos had a special
                treatment because of the tax privileges, which the provost
                Georgios Avgerinos had managed to gain. The city of Pyrgos was
                of exceptional significance for the Turks because they used
                various Greek interpreters in order to develop their commercial
                activities.The residents of Pyrgos were from the first that
                declared the war against the Turks. On 29th March the chieftain
                of Pyrgos, Charalampos Vilaetis, raised the Greek flag and
                roused the residents to revolt against the Turks. Pyrgos was not
                found unprepared at the critical moment, since a lot of spawns
                of important families of Pyrgos had joined the Friendly Company
                (Filiki Etaireia) aiming at the preparation of the Revolution.
                The city witnessed a big destruction in November 1825 when
                Impraim with his army walked against the unfortified city of
                Pyrgos.
              </span>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-width-container">
            <SectionHeading heading="Sights" subtitle=" "></SectionHeading>
            <div className="home-sights">
              <div className="home-left1">
                <ItemCard
                  name="Pyrgos Latsio Megaro"
                  text="The Town Hall of Pyrgos"
                  value="5"
                  image_src="/playground_assets/latseio_4_pyrgos-1-1500w.jpg"
                  rootClassName="rootClassName4"
                ></ItemCard>
              </div>
              <div className="home-right1">
                <div className="home-top">
                  <div className="home-right2">
                    <ItemCard
                      name="Ancient Olympia"
                      text="The birthplace of the Olympic Games "
                      value="299"
                      image_src="/playground_assets/olumpia-1500w.jpg"
                      rootClassName="rootClassName3"
                    ></ItemCard>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-right3">
                    <ItemCard
                      name="Katakolo Port"
                      text="The Beautiful Port of Katakolo"
                      value="49"
                      image_src="/playground_assets/katakolo-night-1500w.jpg"
                      rootClassName="item-card-root-class-name6"
                    ></ItemCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-full-width-banner section-container">
          <div className="home-left2">
            <div className="home-content">
              <span className="home-text26">
                <span>Become a PREMIUM MEMBER</span>
                <br></br>
              </span>
              <span className="home-text29">
                <span className="home-text30">
                  Subscribe for only 5$/Month and get exclusive Coupons &amp;
                  Discounts on local Shops &amp; Museums.
                </span>
                <br className="home-text31"></br>
                <span className="home-text32">
                  Profits go to local
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text33">CHARITIES.</span>
                <br className="home-text34"></br>
              </span>
            </div>
            <div className="home-btn button">
              <span className="home-text35">5$/Month</span>
            </div>
          </div>
          <img
            alt="Rectangle13271410"
            src="/playground_assets/charity-1500w.jpg"
            className="home-image6"
          />
        </div>
        <SectionHeading
          heading="Gallery"
          subtitle=" "
          rootClassName="section-heading-root-class-name1"
        ></SectionHeading>
        <div id="gallery" className="home-gallery">
          <div className="home-container09">
            <div className="home-container10">
              <div className="home-container11">
                <GalleryCard2
                  image_src="/playground_assets/plateia_pyrgos-1-1500h.jpg"
                  rootClassName="rootClassName2"
                ></GalleryCard2>
              </div>
              <div className="home-container12">
                <GalleryCard2
                  image_src="/playground_assets/latseio_4_pyrgos-1-1500w.jpg"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container13">
              <GalleryCard2
                image_src="/playground_assets/katakolo-night-1500w.jpg"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container14">
            <GalleryCard2
              image_src="/playground_assets/olumpia-1500w.jpg"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
        <div id="news" className="section-container home-blog">
          <div className="max-width-container home-max-width3">
            <SectionHeading
              heading="Latest News"
              subtitle="Read the latest news and Pyrgos related articles"
              rootClassName="section-heading-root-class-name"
            ></SectionHeading>
            <div className="home-container15">
              <BlogPostCard
                new_prop="The Weather Next Week"
                image_src="/playground_assets/news1-1500w.jpg"
                description="The weather in Pyrgos and the surrounding area is expexted to get...."
                rootClassName="blog-post-card-root-class-name"
              ></BlogPostCard>
              <BlogPostCard
                title="Unique natural color combinations"
                new_prop="Poet Dimitris Korizis Presents His New Poem Collection"
                image_src="/playground_assets/news3-1500w.jpg"
                description="In the following days famous poet Dimitris Korizis is going to present....."
                rootClassName="blog-post-card-root-class-name1"
              ></BlogPostCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="max-width-container">
          <footer className="home-footer1">
            <div className="home-container16">
              <h3 className="home-text36">PYRGOS</h3>
              <span className="home-text37">Pyrgos, Ilia, Greece</span>
              <span className="home-text38">26213 62427</span>
              <span className="home-text39">dimospirgoy@gmail.com</span>
            </div>
            <div id="contact" className="home-container17">
              <h2 className="home-contact-u-s">Contact Us</h2>
              <form name="Contact-form" className="home-form">
                <div className="home-container18">
                  <span className="home-text40">First Name:</span>
                  <input
                    type="text"
                    name="firstName"
                    className="home-textinput3 input"
                  />
                  <span className="home-text41">Last Name:</span>
                  <input
                    type="text"
                    name="lastName"
                    className="home-textinput4 input"
                  />
                  <span className="home-text42">Email:</span>
                  <input
                    type="text"
                    name="email"
                    className="home-textinput5 input"
                  />
                  <span className="home-text43">Message:</span>
                  <textarea
                    name="message"
                    className="home-textarea textarea"
                  ></textarea>
                  <button className="home-button1 button">Submit</button>
                </div>
                <div className="home-div">
                  <DangerousHTML
                    html={`<div class="mapouter"><div class="gmap_canvas"><iframe width="250" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=Pyrgos,%20Ilia,%20Greece&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org"></a><br><style>.mapouter{position:relative;text-align:right;height:250px;width:250px;}</style><a href="https://www.embedgooglemap.net">embed google maps api</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:250px;width:250px;}</style></div></div>`}
                  ></DangerousHTML>
                </div>
              </form>
            </div>
            <div className="home-links-container">
              <div className="home-container19">
                <span className="home-text44">Categories</span>
                <span className="home-text45">Home</span>
                <span className="home-text46">Programs</span>
                <span className="home-text47">City Guide</span>
                <span className="home-text48">Gallery</span>
                <span className="home-text49">News</span>
                <span className="home-text50">Contact</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
