import React from "react";
import "./form.css";
class SearchForm extends React.Component{


    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="text-center">Employee Directory</h1>
                    <h4>Type to search for an employee or phone number</h4>
                </div>
                <label htmlFor="search">Search</label>
                <input className="ml-3" name="search" type="text" onChange={(event)=>{this.props.updateSearch(event.target.value)}}></input>
            </div>
            )
    }


}


export default SearchForm;