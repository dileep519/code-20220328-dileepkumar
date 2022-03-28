import '../Common.css';
import './AboutUs.css';
import image1 from '../../Images/about-img1.png';
import image2 from '../../Images/about-img2.png';
import image3 from '../../Images/about-img3.png';
import image4 from '../../Images/about-img4.png';
import AboutUsTitle from './AboutUSTitle.js';


const AboutUs = () => {
    return ( 
       <div className="pageContainer">
            <div className="pageTitleContainer">
                About Us
            </div>
            <div className="pageInfoContainer">
                Allow us to tell you a short story...
            </div>
            <div className='aboutUsTiles'>
                <AboutUsTitle image={image1} infoHeading="Chapter I" infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"/>
                <AboutUsTitle image={image2} infoHeading="Chapter II" infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun" />
                <AboutUsTitle image={image3} infoHeading="Chapter III" infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"/>
                <AboutUsTitle image={image4} infoHeading="Chapter IV" infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"/>
            </div>
        </div>
     );
}
 
export default AboutUs;