import './AboutUsTitle.css';

const AboutUsTitle = (props) => {
    return ( 
        <div className='aboutUsSubContainer'>
            <div className='aboutUsImage'>
                <img src={props.image} alt="not found" />
            </div>
            <div className='glossyAboutFooterContainer'>
                <div className='aboutFooterHeadingContainer'>
                    {props.infoHeading}
                </div>
                <div className='aboutTextHeadingContainer'>
                    {props.infoText}
                </div>
            </div>
        </div>
     );
}
 
export default AboutUsTitle;