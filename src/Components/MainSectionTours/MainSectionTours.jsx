import "./MainSectionTours.css";
import Button from "../Button/Button";
import React, { useState, useRef } from "react";

function Tours() {
  const [showDetails1, setShowDetails1] = useState(false); //read more prima card, gli do di default il read more chiuso e quindi in false
  const [showDetails2, setShowDetails2] = useState(false); //read more seconda card, gli do di default il read more chiuso e quindi in false
  const cardRef1 = useRef(null); //controllo del readmore della prima card
  const cardRef2 = useRef(null); //controllo del readmore della prima card

  //readmore della prima
  function handleClick1() {//gli imposto l'apertura del primo readmore, se è false imposto su true e apro il read more e viceversa e ho impostato che se il readmore della prima card è in true, e quindi aperto, allora all'apertura di questo il rpimo si chiude e viceversa.
    if (!showDetails2) { 
      setShowDetails1(!showDetails1);
    } else {
      setShowDetails1(true);
    }
    setShowDetails2(false);
  }
    //readmore della prima
  function handleClick2() { //gli imposto l'apertura del secondo readmore, se è false imposto su true e apro il read more e viceversa e ho impostato che se il readmore della prima card è in true, e quindi aperto, allora all'apertura di questo il rpimo si chiude e viceversa.
    if (!showDetails1) {
      setShowDetails2(!showDetails2);
    } else {
      setShowDetails2(true);
    }
    setShowDetails1(false);
  }

  /*qui controllo alla chiusura del read more che il focus ritorni alla card interessata, cambia in base al div padre  */
  function handleClick3() {
    setShowDetails1(false);
    setShowDetails2(false);

    if (cardRef1.current && cardRef1.current.scrollIntoView) {
      cardRef1.current.scrollIntoView({ behavior: "smooth" });
    } else if (cardRef2.current && cardRef2.current.scrollIntoView) {
      cardRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <section className="Tours" id="Tours">
        <h2>Private Tours</h2>
        <div className="allcards">
          <div className="cardContener">
            <div className="card first-card" ref={cardRef1}> {/* qui inserisco le const che controllano il focus, ossia torna qui quando clicco su read less, uguale nella seconda card*/}
              <div className="card-image">
                <img src="../Assets/positanocard.svg" alt="positano" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>Half-Day Tour - Morning or Afternoon</h4>
                </div>
                <div className="card-exceprt">
                  <p>
                    Experience the breathtaking beauty of the Amalfi Coast in a
                    unique and luxurious way with our half day private boat tour
                    led by local captain Nello. With our tour, you will have the
                    opportunity to explore the stunning coastline, hidden coves,
                    and crystal-clear waters of this picturesque region of
                    Italy.{" "}
                    <a className="readmore" onClick={handleClick1}> {/*qui inserisco il primo readmore che al click controlla la funzione dell'handleClick1, uguale nella seconda card */}
                      Read More
                    </a>
                  </p>{/*qui controllo il div del read more, cliccando il readmore si espande questo div contenente il mio paragrafo, uguale nella seconda card */}
                  {showDetails1 && ( 
                    <div className="card-details card-back">
                      <p>
                        Nello, our experienced skipper and a true local of the
                        Amalfi Coast, will take you on an unforgettable journey
                        along the coastline. You'll visit charming fishing
                        villages, such as Positano and Amalfi, and see the
                        famous fiordo di furore from a different perspective.
                        Nello knows all the hidden gems and secret spots that
                        only a true local can show you, ensuring that your tour
                        is one-of-a-kind. Our luxurious private boat is fully
                        equipped with all the amenities you need for a
                        comfortable and enjoyable experience. Relax on the deck,
                        soak up the sun and take in the stunning views while
                        enjoying complimentary drinks and snacks. With a maximum
                        of six guests, you will have plenty of space to spread
                        out and enjoy the company of your loved ones.{" "}
                        <a className="readmore" onClick={handleClick3}>
                          Read Less
                        </a>
                      </p>
                    </div>
                  )}
                  <Button text="book" onClick={handleClick1} />
                  <h6>
                    Drinks and snacks included in the price. <br /> Contact us
                    for more info.
                  </h6>
                </div>
              </div>
            </div>
            <div className="card second-card" ref={cardRef2}>
              <div className="card-image">
                <img src="../Assets/amalficard.svg" alt="positano" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h4>Positano and Amalfi Coast Tour - Full Day</h4>
                </div>
                <div className="card-exceprt">
                  <p>
                    Join us for a full day adventure around the Amalfi Coast
                    with private local skipper Nello. Our journey begins in the
                    captivating fishing village of Positano, where you'll be
                    captivated by the vibrant streets and mesmerizing coastal
                    vistas. But that's just the beginning..{" "}
                    <a className="readmore" onClick={handleClick2}>
                      Read More
                    </a>
                  </p>
                  {showDetails2 && (
                    <div className="card-details">
                      <p>
                        As previously mentioned, the tour will start with a
                        visit to the charming fishing village of Positano, where
                        you can explore the colorful streets and take in the
                        stunning views of the coastline. Prepare to set sail to
                        breathtaking destinations such as the legendary Li Galli
                        Islands, steeped in mythical allure as the supposed
                        abode of sirens. Our voyage continues to the hidden gem
                        of Furore fjord, an idyllic spot accessible only by
                        boat. Dive into the crystal-clear waters, surrounded by
                        awe-inspiring cliffs, and immerse yourself in nature's
                        beauty. Next, we'll navigate our way to the charming
                        town of Amalfi, making delightful stops at coastal
                        restaurants along the way to savor mouthwatering
                        cuisine. Unveiling secret sea caves and concealed gems
                        known exclusively to locals, you'll have the opportunity
                        to swim in unique waters or simply marvel at the natural
                        wonders. As the tour draws to a close, we'll cruise back
                        to Positano, basking in the coastal panorama while
                        indulging in the luxurious comforts of our private boat.
                        Raise a glass of prosecco to toast to the day's
                        adventures, enjoying the sun's warm embrace on the deck.
                        Throughout this remarkable journey, Nello, our
                        experienced local skipper, will be your guide, sharing
                        his wealth of knowledge and passion for the Amalfi
                        Coast. Join us and uncover the true essence of this
                        captivating region, creating memories that will last a
                        lifetime.
                        <a className="readmore" onClick={handleClick3}>
                          Read Less
                        </a>
                      </p>
                    </div>
                  )}

                  <Button text="book" onClick={handleClick2} />
                  <h6>
                    Drinks and snacks included in the price. <br /> Contact us
                    for more info.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContener">
            <div class="card">
              <div class="card-image">
                <img src="../Assets/positano-sunset.svg" alt="positano" />
              </div>
              <div class="card-body">
                <div class="card-title">
                  <h4>Sunset Cruise - Evening </h4>
                </div>
                <div class="card-exceprt">
                  <p>
                    Experience the magic of the Amalfi Coast with the sun
                    setting over the stunning coastline, this is a truly
                    unforgettable way to experience the beauty of this
                    enchanting region. Nello the captain will take you to the
                    most scenic spots, where you can relax and enjoy the
                    stunning views as the colors of the sky change with the
                    fading light.
                  </p>
                  <Button text=" book " />
                  <h6>
                    Drinks and snacks included in the price. <br /> Contact us
                    for more info.
                  </h6>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img src="../Assets/proposal.svg" alt="positano" />
              </div>
              <div class="card-body">
                <div class="card-title">
                  <h4>Romantic Proposal Tour </h4>
                </div>
                <div class="card-exceprt">
                  <p>
                    Make your proposal unforgettable with our boat tour on the
                    Amalfi Coast! Capture the perfect moment with a stunning
                    backdrop of the coastline, while i will take you on a tour
                    of the most romantic spots. And after the proposal, take
                    some selfies to remember the special moment forever. 
                  </p>
                  <Button text=" book " />
                  <h6>
                    {" "}
                    Drinks and snacks included in the price. <br /> Contact us
                    for more info.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Tours;
