import React from 'react';

import './costum-button.styles.scss';

const CostumButton = ({children,isGoogleSignIn,inverted, ...otherProps}) => (
    <button className={`${isGoogleSignIn? 'google-sign-in': ''} ${inverted? 'inverted': ''} custom-button`} {...otherProps}>
        {children}       
    </button>
)
export default CostumButton