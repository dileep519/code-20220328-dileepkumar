import exploreImg1 from '../../Images/explore-img1.png';
import exploreImg2 from '../../Images/explore-img2.png';
import ExploreTile from './ExploreTile/ExploreTile';
import './Explore.css';
import '../Common.css';
import { useEffect, useRef } from 'react';

const Explore = (props) => {

    const myRef = useRef(null);

    useEffect(() => {
        if (props.arrowClicked) {
            myRef.current.scrollIntoView() 
        }
    },[props.arrowClicked])

    return ( 
        <div ref={myRef} className="pageContainer">
            <div className="pageTitleContainer">
                Explore
            </div>
            <div className="pageInfoContainer">
                From one-guest rooms to <br/> penthouses with pools and gardens
            </div>
            <div className='explorerTilesContainer'>
                <ExploreTile exploreImg={exploreImg1} inoText="Room with one king-size bed" price="35$" dimension="28м²" />
                <ExploreTile exploreImg={exploreImg2}  inoText="Penthouse for 8 person" price="2039$" dimension="438м²"/>
            </div>
        </div>
     );
}
 
export default Explore;