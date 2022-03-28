import './Glossy.css';

const Glossy = (props) => {
    return ( 
        <div className="glossyContainer">
            {props.children}
        </div>
     );
}
 
export default Glossy;