import Outline from "../../../Shared/Outline/Outline";
import './ExploreTile.css';

const ExploreTile = (props) => {
    return ( 
        <>
            <div className='explorerTile'>
                    <div className='imageContainer'>
                        <img src={`${props.exploreImg}`} alt="not found"/>
                    </div>
                   
                    <div className='glossyFooterContainer'>
                        <div className='propertyInfoContainer'>
                            <span className="propertyInfoText">{props.inoText}</span>
                            <div className='subInfoContainer'>
                                <Outline>
                                    <span className='infoText'>
                                        {props.price}
                                    </span>
                                </Outline>
                                <Outline>
                                    <span className='infoText'>
                                        {props.dimension}
                                    </span>
                                </Outline>
                            </div>
                        </div>
                        <div className="exploreButtonContainer">
                            <Outline>
                                <button className='exploreButton'>
                                     Book!
                                </button>
                            </Outline>
                        </div>
                    </div>
                    
                    
                </div>
        </>
     );
}
 
export default ExploreTile;