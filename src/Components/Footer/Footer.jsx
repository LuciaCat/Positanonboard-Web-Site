import "./Footer.css";


function Footer () {

    return(

        <>
            <footer>
                <div className="footerContenitor">
                    
                    <a href="/" className="logo"><img src="../Assets/navLogo.svg" /></a>
                    <span className="spanContact">CONTACTS</span>
                </div>
                <div className="Contacts" id ="Contacts">
                            <ul>
                                <p> Find us </p>
                                <li><a href="https://goo.gl/maps/K7WPTRr4wPMVRsqM6?coh=178573&entry=tt" target="_blank"> Positano, 84017 (SA)</a></li>
                                <p> Phone </p>
                                <li><a href="tel:+393382016803">+39 3382016803</a></li>
                                <p> Email </p>
                                <li><a href="mailto:positanonboard@gmail.com" target="_blank"> positanonboard@gmail.com</a></li>
                            </ul>
                </div>
                
                <hr/>
                <div className="copyright">
                    <span>&copy; 2023 Positanonboard. All rights reserved. <br/> P.IVA: 06168110655</span>
                    {/* <span className="insta">Take a look</span> */}
                    <div className="instaLogo">
                        <a href="https://www.instagram.com/positanonboard/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank">
                            <img src="../Assets/instacolor.svg"  alt="search us on"/>
                        </a>    
                    </div>
                </div>
                
            </footer>    
        </>
    );
}
export default Footer;