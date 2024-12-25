import { Component } from "react";
import commonData from '../shared/constant/constantData';

class ToggleImageTask extends Component {

    constructor() {
        super(props);

    }
    render() {
        return (
            <div>
                <img src={commonData.car} alt="car" height="200px" weight="200px"></img>

            </div>
        )

    }
}