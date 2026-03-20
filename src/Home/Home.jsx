import Header from "./Header";
import GridMotion from './background/GridMotion';
import Work from "./work";
import About from "./About";
import Contact from "./contact";
import BonaRetro from '../assets/Images/Hero/BonaRetroDesign.jpg';
import ChaMagazineImg from '../assets/Images/Hero/ChaMagazineImg.jpg';
import DOF from '../assets/Images/Hero/DOF.jpg';
import FocusTheme from '../assets/Images/Hero/FocusTheme.jpg';
import HBDDesignAmyO from '../assets/Images/Hero/HBDDesignAmyO.jpg';
import JoshIsBack from '../assets/Images/Hero/JoshIsBack.jpg';
import RenaCoachOfTourney from '../assets/Images/Hero/RenaCoachOfTourney.jpg';
import SammyAdenikeHBD from '../assets/Images/Hero/SammyAdenikeHBD.jpg';
import PromiseCanvas from '../assets/Images/Hero/PromiseCanvas.jpg';
import JessicaGraduation from '../assets/Images/Hero/JessicaGraduation.jpeg';
import LetsTalkLight from '../assets/Images/Hero/LetsTalkLight.jpeg';
import Reopening from '../assets/Images/Hero/Re-opening.jpg';
import Artboard1 from '../assets/Images/Hero/Artboard1.jpg';
import Independance65 from '../assets/Images/Hero/Independance65.jpg';
import Front from '../assets/Images/Hero/Front.jpg';


const Home = () => {
    // note: you'll need to make sure the parent container of this component is sized properly
    const items = [
        <img key="josh-back" src={JoshIsBack} alt="Josh Is Back" />,
        <img key="cha-magazine" src={ChaMagazineImg} alt="Cha Magazine" />,
        <img key="rena-coach" src={RenaCoachOfTourney} alt="Rena Coach of Tourney" />,
        <img key="sammy-hbd" src={SammyAdenikeHBD} alt="Sammy Adenike HBD" />,
        <img key="artboard1" src={Artboard1} alt="Artboard 1" />,
        <img key="bona-retro" src={BonaRetro} alt="Bona Retro Design" />,
        <img key="hbd-amy" src={HBDDesignAmyO} alt="Happy Birthday Amy" />,
        <img key="dof" src={DOF} alt="DOF" />,
        <img key="focus-theme" src={FocusTheme} alt="Focus Theme" />,
        <img key="independance65" src={Independance65} alt="Independance 65" />,
        <img key="promise-canvas" src={PromiseCanvas} alt="Promise Canvas" />,
        <img key="jessica-graduation" src={JessicaGraduation} alt="Jessica Graduation" />,
        <img key="lets-talk-light" src={LetsTalkLight} alt="Let's Talk Light" />,
        <img key="reopening" src={Reopening} alt="Re-opening" />,
        <img key="front" src={Front} alt="Front" />
        // Add more items as needed below
    ];


    return (
        <div style={{ position: "relative", background: "transparent", overflow: "visible" }}>
            <section id="home-section" style={{ position: "relative", minHeight: "110vh", overflow: "visible" }}>
                <div style={{ position: "absolute", inset: 0, zIndex: -2, pointerEvents: "none", overflow: "visible" }}>
                    <GridMotion items={items} gradientColor="black" />
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 3,
                        pointerEvents: "none"
                    }}
                >
                    <Header />
                </div>
            </section>

            <section style={{ position: "relative", zIndex: 2 }}>
                <Work />
            </section>

            <section style={{ position: "relative", zIndex: 2 }}>
                <About />
            </section>

            <section style={{ position: "relative", zIndex: 2 }}>
                <Contact />
            </section>
        </div>
    );
}

export default Home;
