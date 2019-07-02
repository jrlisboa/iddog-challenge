import React from 'react';
import PropTypes from 'prop-types';

import {
    MainWrapper,
    ImageItem,
} from './index.style';

function FeedList(props) {
    const {
        list,
        selectImage,
        loading,
    } = props;

    return (
        <MainWrapper>
            {
                (list || []).map((image, index) => {
                    return (
                        <ImageItem
                            loading={loading}
                            key={`image-key-${image}`}
                            onClick={() => {
                                return selectImage(index);
                            }}
                            src={image}
                            alt={image} />
                    );
                })
            }
        </MainWrapper>
    );
}

FeedList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectImage: PropTypes.func.isRequired,
    loading: PropTypes.string.isRequired,
};

export default FeedList;
