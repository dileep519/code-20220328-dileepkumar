import {RiArrowDownSLine} from 'react-icons/ri'

const ArrowIcon = (props) => {
    return ( 
        <RiArrowDownSLine onClick={props.onClick} size={props.size}/>
     );
}
 
export default ArrowIcon;