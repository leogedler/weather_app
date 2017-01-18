import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function avegare(data){
    return _.round(_.sum(data)/data.length)
}

export default (props)=>{
    return(
        <div>
            <Sparklines height={80} width={180} data={props.data}>
                <SparklinesLine color={props.color} /> 
                <SparklinesReferenceLine type='avg' /> 
            </Sparklines>
            <div>{avegare(props.data)} {props.units}</div>
        </div>
    );
}