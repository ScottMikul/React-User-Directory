import React from "react";

class SearchForm extends React.Component{


    render(){
        return(
            <div>
                <label htmlFor="search">Search</label>
                <input className="ml-3" name="search" type="text" onChange={(event)=>{this.props.updateSearch(event.target.value)}}></input>
            </div>
            )
    }


}


export default SearchForm;