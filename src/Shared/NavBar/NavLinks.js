import ArrowIcon from '../ArrowIcon/ArrowIcon';
import './NavBar.css';

const NavLinks = (props) => {
    return ( 
        <>
            <div>
                Explore
            </div>
            <div>
                About us
            </div>
            <div className='citiesContainer'>
                Cities <ArrowIcon size="24px"/>
            </div>
            <div>
                Call
            </div>        
        </>
     );
}
 
export default NavLinks;