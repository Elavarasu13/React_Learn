import React from "react";

class Apple extends React.Component{
    render(){
       const { appleInfo } = this.props;  //this represent object of class
       const {type , color} = appleInfo;
        return(
            <h1>Im a{color} {type} Apple!</h1>
        )
    }
      
}
export default Apple;