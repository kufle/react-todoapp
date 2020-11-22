import React from 'react';

const Button = ({label,variant,action}) => {
    return(
        <button className={`btn btn-${variant}`} onClick={action}>{label}</button>
    )
}

export default Button;