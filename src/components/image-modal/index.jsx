import React from 'react';
import PropTypes from 'prop-types';

import {
    MainWrapper,
    Image,
} from './index.style';

function ImageModal(props) {
    const {
        list,
        selected,
    } = props;

    if (!selected) {
        return <div />;
    }

    const url = list[selected];
    return (
        <MainWrapper>
            <Image
                src={url} />
        </MainWrapper>
    );
}

ImageModal.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.number,
};

ImageModal.defaultProps = {
    selected: undefined,
    list: [],
};

export default ImageModal;
