import Input from "../../Shared/Input/Input";
import Outline from "../../Shared/Outline/Outline";
import SearchIcon from "../../Shared/SearchIcon/SearchIcon";
import './Search.css';
const Search = () => {
    return ( 
        <div className="searchContainer">
            <Input labelName="CITY" placeholder="Select your city"/>
            <Input labelName="DATES" placeholder="Select your dates"/>
            <Input labelName="GUESTS" placeholder="Add guests" />
            <button className="searchButton">
                <div className="searchButtonSubContainer">
                    <SearchIcon />
                    <span className="buttonText">
                        Search
                    </span>
                </div>
            </button>
        </div>
     );
}
 
export default Search;