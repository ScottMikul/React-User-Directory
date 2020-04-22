import React from "react";
import TableHead from "./TableHead"
import TableBody from "./TableBody"
       

class Table extends React.Component{

    constructor() {
        super();

        // Bind the this context to the handler function
        this.updateColSort = this.updateColSort.bind(this);

        // Set some state
        this.state = {
            filterType:"asc",
            filterCol:"0",
            search:"",
        }
    }


    componentDidMount() {
        console.log("the state is set on mount? : "+ this.state.filterType);
      }
     updateColSort(col){
         console.log("col is "+col);
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
            <table className="table table-striped">
         
             <TableHead updateColSort={this.updateColSort} />
             <TableBody search={this.state.search} 
                filterCol={this.state.filterCol} 
                filterType={this.state.filterType} />
         
             </table>
            )
    }

}

export default Table;