import { Component } from "react";

class VirtualDom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breakFast: [
                { id: 101, name: "Idli", price: "30rs" },
                { id: 101, name: "Dosa", price: "30rs" },
                { id: 101, name: "vada", price: "30rs" },
                { id: 101, name: "upma", price: "30rs" }
            ],
            courses: ["java", "python", "javascript", "angular", "React"]
        }
    }
    render() {
        const { breakFast } = this.state;
        const{courses }=this.state;

        return (
            <div>

                <h2>This is Virtual dom Component</h2>
                <ul>
                    {
                        breakFast.map((val, index) => {
                            return <li key={val.id}> {val.name}--{val.price}</li>

                        })

                    }

                </ul>
                <hr />
                <select>
                    {
                        courses.length > 0 && courses.map((val, index) => {
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                </select>
            </div>


        )
    }
}
export default VirtualDom