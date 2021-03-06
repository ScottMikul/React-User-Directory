import React from "react";
import TableHead from "./TableHead"
import TableBody from "./TableBody"
import SearchForm from "./SearchForm";
       

class Table extends React.Component{

    constructor() {
        super();

        // Bind the this context to the handler function
        this.updateColSort = this.updateColSort.bind(this);

        this.updateSearch = this.updateSearch.bind(this);


        this.state = {
            filterType:"asc",
            filterCol:"0",
            search:"",
        }
    }
    updateSearch(newSearch){
        this.setState({search:newSearch});
    }

     updateColSort(col){
        if(this.state.filterCol ===col){
            if(this.state.filterType==="asc"){
                this.setState({ filterType:"desc" })
                
            }
            else{
                this.setState({ filterType:"asc" })
            }
        }else{
            this.setState({filterType:"asc", filterCol:col})
        }
    }

    render(){
        return ( 
            <div className = "container">
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <SearchForm updateSearch={this.updateSearch} />
                </div>

                <table className="table table-striped">
            
                <TableHead updateColSort={this.updateColSort} 
                filterCol={this.state.filterCol} 
                filterType={this.state.filterType}/>
                <TableBody search={this.state.search} 
                    filterCol={this.state.filterCol} 
                    filterType={this.state.filterType} />
            
                </table>
             </div>
            )
    }

}

export default Table;