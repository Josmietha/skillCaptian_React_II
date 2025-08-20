import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent(props) {
    return (
        <div>
            <p>Data from Child: {props.data}</p>
            <GrandChildComponent data={props.data} />
        </div>
    );
}

export default ChildComponent;
