import "./MainSection.css";
import MainSectionTour from "../MainSectionTours/MainSectionTours"
import MainSectionDescription from "../MainSectionDescription/MainSectionDescription";
import MainSectionLast from "../MainSectionLast/MainSectionLast";
import MainSectionAbouts from "../MainSectionAbouts/MainSectionAbouts";
import MainSectionLogo from "../MainSectionLogo/MainSectionLogo";
import MainSectionPhoto from "../MainSectionPhoto/MainSectionPhoto";

function MainSection () {

    return (
        <>
            <MainSectionDescription/>
            <MainSectionTour/>
            <MainSectionLogo/>
            <MainSectionAbouts/>
            <MainSectionPhoto/>
            <MainSectionLast/>
            
        </>
    );
}
export default MainSection;