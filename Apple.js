import React from "react";

class Apple extends React.Component{
    render(){
        const {appleInfo} = this.props
        const {type, color} = appleInfo
        return(
            <>
                 <h1>Hi I'm {type}, A {color} Apple!</h1>
            </>
         
        );
    }
}
export default Apple;