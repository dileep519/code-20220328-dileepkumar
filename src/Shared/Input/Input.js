import './Input.css';

const Input = (props) => {
    return ( 
        <div className="inputContainer">
            <span className='inputLabel'>
                {props.labelName}
            </span>
            <input className='inputBox' placeholder={`${props.placeholder ? props.placeholder :''}`}/>
        </div>
     );
}
 
export default Input;