import './Outline.css'

const Outline = (props) => {
    return ( 
        <div  className="buttonContainer">
            {props.children}
        </div>
     );
}
 
export default Outline;