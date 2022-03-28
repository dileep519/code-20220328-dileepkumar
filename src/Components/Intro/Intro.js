import ArrowIcon from '../../Shared/ArrowIcon/ArrowIcon';
import Glossy from '../../Shared/Glossy/Glossy';
import NavBar from '../../Shared/NavBar/NabBar';
import Search from '../Search/Search';
import './Intro.css';

const Intro = (props) => {
    return ( 
        <div className="introContainer">
            <header className="headerContainer">
                <NavBar/>
            </header>
            
            <div className="messageContainer">
                <div className="mainMessage">
                    Rethink your <br/> living & renting
                </div>
                <div className="tagMessage">
                    Make your stay painless with us
                </div>
            </div>
            <Glossy>
                <Search/>
            </Glossy>
            <div className='arrowContainer'>
                <ArrowIcon onClick={props.onArrowClicked} size="46px" />
            </div>
        </div>
          
     );
}

export default Intro;