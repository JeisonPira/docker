import React from 'react';
import AppHeader from "./AppHeader";

const AppFrame = ({header, body}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header}/>
                <div>{body}</div>
            </div>
            <div>Footer Simple</div>
        </div>
    );
};

export default AppFrame;
