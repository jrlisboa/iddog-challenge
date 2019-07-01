import React from 'react';

import {
    MainWrapper,
    InputStyle,
} from './index.style';

function Input(props) {
    return (
        <MainWrapper>
            <InputStyle
                {...props} />
        </MainWrapper>
    );
}

export default Input;
