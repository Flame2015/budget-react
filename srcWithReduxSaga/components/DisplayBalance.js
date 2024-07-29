import React from "react";
import { Header,Statistic } from "semantic-ui-react";

function DisplayBlance({title, value, color="black", size="tiny"}){
 
    return (
        <Statistic size={size} color={color}>
        <Statistic.Label style={{textAlign:"left"}}>
           {title}
        </Statistic.Label>
        <Statistic.Value>
         {value}
        </Statistic.Value>
        </Statistic>
    )
}

export default DisplayBlance;