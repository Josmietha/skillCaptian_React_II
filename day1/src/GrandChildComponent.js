import React from 'react';
function GrandChildComponent(props) {
    return (
        <div>
            <p>Data from Grand Child: {props.data}</p>
        </div>
    );
}
export default GrandChildComponent;