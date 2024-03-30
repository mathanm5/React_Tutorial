import React from "react";
class Car extends React.Component{
    constructor(){ // why this constructor means we are going to use components interior available function by using super() inorder to apply for Car class
          super();
          this.state= {color:"Red"}
    }
    render(){
        return (
             <>
                <h1>Hello Class Exapmle My Favorite Color is {this.state.color}</h1>
                <button onClick={()=>{this.setState({color:"Blue"})}}>Change Color Class!</button>
        </> 
        );
    }
}
export default Car;