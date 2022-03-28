import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import './NavBar.css';

const NavBar = () => {
    return ( 
        <>
            <div className="logoContainer">
                <div className="logo">
                    Your Logo
                </div>
            </div>
            <Navigation />
            <MobileNavigation />
        </>
     );
}
 
export default NavBar;