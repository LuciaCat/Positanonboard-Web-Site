
import React, { useEffect, useRef } from 'react';
import './MainSectionAbouts.css';

function MainSectionAbouts() {
 /* const aboutTitleRef = useRef(null);
  const developmentWrapperRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const aboutTitle = aboutTitleRef.current;
      const developmentWrapper = developmentWrapperRef.current;
      let developmentIsVisible = false;

      
      window.addEventListener('scroll', function() {
        const bottom_of_window = window.scrollY + window.innerHeight;

        
        if (aboutTitle && aboutTitle.offsetTop) {
          if (bottom_of_window > (aboutTitle.offsetTop + aboutTitle.offsetHeight)) {
            aboutTitle.classList.add('aboutTitleVisible');
          }
        }

        

       
        if (developmentWrapper && developmentWrapper.offsetTop) {
          const middle_of_developmentWrapper = developmentWrapper.offsetTop + developmentWrapper.offsetHeight / 2;

          if (bottom_of_window > middle_of_developmentWrapper && !developmentIsVisible) {
            
          }
        }
      });
    }

    handleScroll();
    document.addEventListener('DOMContentLoaded', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('DOMContentLoaded', handleScroll);
    };
  }, []);*/

  return (
    <>
      <section className="aboutus" id="About">
        <div className="content">
          <h1>About Us</h1>
          <div className="projects">
            <div className="project captainProject" >
              <div className="project-image proj-img-capt">
                <img src="../Assets/captain-nello.JPG" alt="Photo of the Captain"/>
              </div>
                <div className="project-title pj-title-captain" >
                  <h2>The Captain</h2>
                </div>
                <div className="project-description captainDesc" >
                  <p className='captainp'> <strong>Nello</strong>, our <strong>Captain</strong> from the picturesque town of Positano, nestled along the stunning Amalfi Coast.
                    In his youth, he had the incredible opportunity to work on one of the most legendary ship  "Amerigo Vespucci "
                     widely regarded as one of the most beautiful  in the world, and now he spends his days sharing 
                     his knowledge and unique perspective as a true local of Positano.  
                    <br/>Probably salt water running true his veins.</p>
                </div>
              
            </div>
            <div className="project boatProject">
              <div className="project-image pj-img-boat">
                <img className="boatImg" src="../Assets/TheBoat.jpg" alt="Photo of the boat in the sea"/>
              </div>
              <div className="project-title pj-title-boat">
                <h2 className="boatH2">The Boat</h2>
              </div>
              <div className="project-description boatDesc">
                <p className="boatp">Her name is <strong>Zia Phan</strong>, she is a 28-foot Gozzo from the Amalfi coast, a traditional Italian boat that is perfect for 
                  leisure use. These boats are known for their classic design, sturdy construction, and excellent 
                  handling in choppy waters. A Gozzo of this size typically has a spacious cockpit area with comfortable 
                  seating for passengers, as well as a small cabin with basic amenities such as a bed, a toilet, and a kitchenette,
                  that may be equipped with a small fridge, allowing 
                  passengers to prepare simple meals and snacks while on board. 
                  Overall, a 28-foot Gozzo from the Amalfi coast is a charming and comfortable boat that is perfect for day 
                  trips or short-term cruises along the beautiful coastline of southern Italy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSectionAbouts;
