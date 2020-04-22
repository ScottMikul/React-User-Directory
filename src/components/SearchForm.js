import React from "react";

class TableHead extends React.Component{


 render(){
     return(
         <thead>
             <tr>
             <th scope="col" onClick={() => {this.props.updateColSort(0)}}>#</th>
             <th scope="col" >Profile</th>
             <th scope="col" onClick={() => {this.props.updateColSort(2)}}>First</th>
             <th scope="col" onClick={() => {this.props.updateColSort(3)}}>Last</th>
             <th scope="col" onClick={() => {this.props.updateColSort(4)}}>Email</th>
             <th scope="col" onClick={() => {this.props.updateColSort(5)}}>Phone</th>
             </tr>
          </thead>
        )
 }


}


export default TableHead;