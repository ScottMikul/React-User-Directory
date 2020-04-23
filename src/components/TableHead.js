   import React from "react";

   class TableHead extends React.Component{

    putAscOrDescIcon(col, filterCol, filterType){
        if(col+""!==filterCol+""){
            return "";
        }
        else{
            if(filterType==="asc"){
                return <i className="fas fa-sort-up"></i>;
            }else{
                return <i className="fas fa-sort-down"></i>
            }
        }

    }
    render(){
        return(
            <thead>
                <tr>
                <th scope="col" onClick={() => {this.props.updateColSort(0)}}># {this.putAscOrDescIcon(0,this.props.filterCol, this.props.filterType)}</th>
                <th scope="col" >Profile</th>
                <th scope="col" onClick={() => {this.props.updateColSort(2)}}>First {this.putAscOrDescIcon(2,this.props.filterCol, this.props.filterType)}</th>
                <th scope="col" onClick={() => {this.props.updateColSort(3)}}>Last {this.putAscOrDescIcon(3,this.props.filterCol, this.props.filterType)}</th>
                <th scope="col" onClick={() => {this.props.updateColSort(4)}}>Phone {this.putAscOrDescIcon(4,this.props.filterCol, this.props.filterType)}</th>
                <th scope="col" onClick={() => {this.props.updateColSort(5)}}>Email {this.putAscOrDescIcon(5,this.props.filterCol, this.props.filterType)}</th>
                </tr>
             </thead>
           )
    }


   }


export default TableHead;