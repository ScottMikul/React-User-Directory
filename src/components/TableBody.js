import React from "react";
import API from "../utils/API";



class TableBody extends React.Component{

    state = {
        Employees:[]
    }

    
    componentDidMount(){
        API.getEmployees()
        .then(res=> this.setState(
            {Employees:res.data.results.map((employee,index) =>
             [  index,
                 employee.picture.medium,
                employee.name.first ,
                employee.name.last,
                employee.phone,
                employee.email
            ])}))
        .catch(err => console.log(err));
    }

    render(){
        let filteredRows = this.state.Employees;
        let Search = this.props.search;
        if(this.props.search!==""){
            filteredRows = this.state.Employees.filter(employee => employee.join(" ").includes(Search))
        }
        const sortedRows = filteredRows.sort((a,b)=>{
            if(this.props.filterType==="asc"){
                if(a[this.props.filterCol]>b[this.props.filterCol]){
                    return 1;
                }
                else if(a===b){
                    return 0;
                }
                else{
                    return -1;
                }
            }
            else{
                if(a[this.props.filterCol]<b[this.props.filterCol]){
                    return 1;
                }
                else if(a===b){
                    return 0;
                }
                else{
                    return -1;
                }
            }

        })



       const rows =  sortedRows.map((employee, index) =>{
           return (
               <tr key={index}>
                <th scope="row">{employee[0]}</th>
                <td><img src={employee[1]} alt="profile"/></td>
                <td>{employee[2]}</td>
                <td>{employee[3]}</td>
                <td>{employee[4]}</td>
                <td>{employee[5]}</td>
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