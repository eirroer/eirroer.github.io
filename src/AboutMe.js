// import css

import './AboutMe.css';
import Carousel from './Carousel';
import img1 from './img/IMG_0299.JPG';
import img2 from './img/IMG_0319.JPG';
import img3 from './img/IMG_0453.JPG';
import img4 from './img/IMG_0454.JPG';
const images = [img1, img2, img3, img4];

function AboutMe() {
    return (
      <div className="about-me">
        <h2 className="about-me-title">Om meg</h2>
        <div className="about-me-description">
            <p>
            Jeg er en 22 år gammel masterstudent og studerer fjerde året ved
            studieprogrammet Informatikk: programmering og systemarkitektur ved
            Universitetet i Oslo. Mine faglige interesser inkluderer å finne
            mønster i data gjennom bruk av maskinlæringmetoder og algoritmer, i
            tillegg synes jeg funksjonell programmering er ganske kult. Jeg
            skriver for øyeblikket master om hvordan man kan bruke
            maskinlæringteknikker for å finne viktige biomarkører for kreft.
            </p>
        </div>
        <Carousel images={images}/>
      </div>
      
    ); 
}

export default AboutMe;
