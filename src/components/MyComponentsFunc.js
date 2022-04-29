import React from 'react';

const MyComponentsFunc = ({name, children}) => {
    return (
        <div>
            <h3>Hello, { name } </h3>
            {children}
        </div>
    );
};

export default MyComponentsFunc;