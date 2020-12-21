import React from 'react';
import Btt from './btt';

class Keyboard extends React.Component {
    constructor(props) {
        super(props)

        this.click = this.click.bind(this)
        this.state = {
            flag: false,
            equals: '',
            screen:'',
            op: false,
            dot: false,
        }
    }
    
    click(value){
        if(value==="C"){
            this.setState({
                equals: '',
                screen: '',
                flag: false,
            })
        }else if(value==="="){
            var eq = eval(this.state.equals)
            console.log(eq)
            if(eq < 10){
                this.setState({
                    equals: eq,
                    screen: eval(this.state.equals),
                    flag: true,
                })
            }else{
                this.setState({
                    equals: 'ERR',
                    screen: eval(this.state.equals),
                    flag: true,
                })
            }        
        }else if(value==="<"){
            if(!this.state.flag){
                if(this.state.op){
                    this.setState({
                        equals: this.state.equals.slice(0, -1),
                        screen: this.state.equals.slice(0, -1),
                        flag: false,
                        op: false,
                    })
                }else{
                    this.setState({
                        equals: this.state.equals.slice(0, -1),
                        screen: this.state.screen.slice(0, -1),
                        flag: false,
                    })
                }
            }
        }else if(value==="/" || value==="*" || value==="+" || value==="-"){
            if(!this.state.op){
                this.setState({
                    equals: this.state.equals + value,
                    screen: value,
                    op: true,
                })
            }
        }else{
            if(this.state.screen.length < 9){
                if(this.state.op){
                    this.setState({
                        equals: this.state.equals + value,
                        screen: value,
                        flag: false,
                        op: false,
                    })
                }else{
                    this.setState({
                        equals: this.state.equals + value,
                        screen: this.state.screen + value,
                        flag: false,
                        op: false,
                    })
                }
            }
        }  
    }

    screen={
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2px",
        marginBottom: "2px",
        height: "60px",
        width: "256px",
        border: "solid black 4px",
        textAlign: "right",
        fontSize: "50px",
    }

    keyboard={
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2px",
        marginBottom: "2px",
        height: "320px",
        width: "256px",
        border: "solid black 4px",
        fontSize: "25px",
    }
    
    render() {
        return (
            <div>
                <p style={this.screen}>{this.state.screen}</p>
                <div style={this.keyboard}>
                    <Btt value="C" click = {this.click}/>
                    <Btt value="<" click = {this.click}/>
                    <Btt value="-" click = {this.click}/>
                    <Btt value="+" click = {this.click}/>

                    
                    <Btt value="1" click = {this.click}/>
                    <Btt value="2" click = {this.click}/>
                    <Btt value="3" click = {this.click}/>
                    <Btt value="/" click = {this.click}/>

                    <Btt value="4" click = {this.click}/>
                    <Btt value="5" click = {this.click}/>
                    <Btt value="6" click = {this.click}/>
                    <Btt value="*" click = {this.click}/>

                    <Btt value="7" click = {this.click}/>
                    <Btt value="8" click = {this.click}/>
                    <Btt value="9" click = {this.click}/>
                    <Btt value="=" click = {this.click}/>

                    <Btt value="." click = {this.click}/>
                    <Btt value="0" click = {this.click}/>
                    <Btt value="=" click = {this.click}/>
                    <Btt value="=" click = {this.click}/>
                </div>
            </div>
        );
    }
}

export default Keyboard;