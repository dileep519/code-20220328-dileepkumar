import NavLinks from "./NavLinks";
import Hamburger from '../../Shared/Hamburger/Hamburger';
import { useState } from "react";
import { CgCloseO } from 'react-icons/cg';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <Hamburger onClick={() => setOpen(!open)} />;

    const closeIcon = <CgCloseO size="36px" color='white' onClick={() => setOpen(!open)} />

    return ( 
        <>
            <nav className="mobileNavigation">
               <div className="hamburger">
                    {open  ? closeIcon : hamburgerIcon}
                </div>
                <div style={open ? {display : 'flex'} : {}} className="mobileLinks">
                    {open && <NavLinks />}
                </div>
            </nav>
        </>
     );
}
 
export default MobileNavigation;