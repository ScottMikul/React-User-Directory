import React from "react";

class SearchForm extends React.Component{


    render(){
        return(
            <input type="text" onChange={(event)=>{this.props.updateSearch(event.target.value)}}></input>
            )
    }


}


export default SearchForm;