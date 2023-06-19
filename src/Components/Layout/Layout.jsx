import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";


function Layout () {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>

            {/* <Route path="Tours" element={NewCard}/>  richiamo il path prenotazione*/}

            </Routes>
            <Header/>    
            <MainSection/>
            <Footer/>
        </BrowserRouter>
        
    );
}

export default Layout;