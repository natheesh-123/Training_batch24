import { Component } from "react";

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeDetails: [
                {
                    "empid": 101,
                    "empname": "Natheesh",
                    "emppost": "backend developer",
                    "empsal": 25000,
                    "empcontact": 99999,
                    "empaddress": "Chennai"
                },
                {
                    "empid": 102,
                    "empname": "raj",
                    "emppost": "java developer",
                    "empsal": 20000,
                    "empcontact": 8888,
                    "empaddress": "coimbatore"
                },
                {
                    "empid": 103,
                    "empname": "kavin",
                    "emppost": "data analyst",
                    "empsal": 30000,
                    "empcontact": 33333,
                    "empaddress": "salem"
                },
                {
                    "empid": 104,
                    "empname": "ram",
                    "emppost": "tester",
                    "empsal": 40000,
                    "empcontact": 444444,
                    "empaddress": "madurai"
                },
                {
                    "empid": 105,
                    "empname": "madhav",
                    "emppost": "Angular Developer",
                    "empsal": 32000,
                    "empcontact": 77777,
                    "empaddress": "mumbai"
                },
                {
                    "empid": 106,
                    "empname": "boopathi",
                    "emppost": " fromt end developer",
                    "empsal": 40000,
                    "empcontact": 555555,
                    "empaddress": "tamilnadu"
                },
                {
                    "empid": 107,
                    "empname": "Vikram",
                    "emppost": "engineer",
                    "empsal": 40000,
                    "empcontact": 99999,
                    "empaddress": "chennai"
                },
                {
                    "empid": 108,
                    "empname": "Lakshmi",
                    "emppost": "developer",
                    "empsal": 30000,
                    "empcontact": 1111,
                    "empaddress": "madurai"
                },
                {
                    "empid": 109,
                    "empname": "manik",
                    "emppost": "tester",
                    "empsal":40000,
                    "empcontact": 222222,
                    "empaddress": "Bangalore"
                },
                {
                    "empid":110,
                    "empname": "raja",
                    "emppost": "business analyst",
                    "empsal": 20000,
                    "empcontact": 11111,
                    "empaddress": "kerala"
                }
            ]

        }
    }

    render(){
        const {employeeDetails} = this.state;

        return(
            <table>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>salary</th><th>Post</th><th>Contact</th><th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeDetails.map((val, index)=>{
                        return <tr c>
                                    <td >{val.empid}</td><td>{val.empname}</td><td>{val.empsal}</td><td >{val.emppost}</td><td className="p-2">{val.empcontact}</td><td className="p-2">{val.empaddress}</td>
                                </tr>
                    })}
                </tbody>
            </table>
        );
    }


}

export default EmployeeDetails;