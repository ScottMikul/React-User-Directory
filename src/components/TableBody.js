import React from "react";
import API from "../utils/API";



class TableBody extends React.Component{

    state = {
        filterType:"asc",
        filterCol:"1",
        search:"",
        Employees:[]
    }

    
    componentDidMount(){
        API.getEmployees()
        .then(res=> this.setState({Employees:res.data.results}))
        .catch(err => console.log(err));
    }

    render(){
        console.log(this.state.Employees);
       const rows =  this.state.Employees.map((employee, index) =>{
           return (
               <tr>
                <th scope="row">{index}</th>
                <td><img src={employee.picture.medium} alt="profile"/></td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
             </tr>
           )
       })
        
    return (
        <tbody>
            {rows}
        </tbody>
        )
    }

}


export default TableBody;