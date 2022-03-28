import NavLinks from '../../Shared/NavBar/NavLinks';
import './Footer.css';

const Footer = () => {
    return ( 
        <footer className="footerContainer">
            <div className='footerLogoContainer'>
                <span>Your Logo</span>
                <div className='companyRights'>
                    <span>&copy;  2021  Company Name</span>
                    <span>All rights reserved</span>
                </div>
            </div>
            <div className='footerNavLinks'>
                <NavLinks />
            </div>
        </footer>
     );
}
 
export default Footer;