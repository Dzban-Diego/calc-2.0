import React from 'react';

class Btt extends React.Component {
    style={
        float: "left",
        margin: "2px",
        width: "60px",
        height: "60px",
        fontSize: "25px",
    }

    render() {
        return (
            <div>
                <button style={this.style} onClick={()=>this.props.click(this.props.value)}>{this.props.value}</button>
            </div>
        );
    }
}

export default Btt;