import React from "react";
import TableHead from "./TableHead"
import TableBody from "./TableBody"
       

function Table (){
   return ( 
   <table className="table table-striped">

    <TableHead />
    <TableBody />

    </table>
    )
}

export default Table;