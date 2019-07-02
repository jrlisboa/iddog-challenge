import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

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
    const [currentList, setCurrentList] = useState([]);
    const [currentLoading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (list.length) {
            const slicedList = (list || []).slice(0, offset);
            setCurrentList(slicedList);
        }

        return loading
            ? setLoading(true)
            : setLoading(false);
    }, [list, offset, loading]);

    useEffect(() => {
        if (list.length) {
            setOffset(0);
        }
    }, [list.length]);

    const handleLoad = () => {
        if (list.length > 0) {
            return offset + 10 > list.length
                ? setCurrentList(list)
                : setOffset(offset + 10);
        }
        return false;
    };


    const listItems = (currentList || []).map((image, index) => {
        return (
            <ImageItem
                key={`image-key-${image}`}
                onClick={() => {
                    return selectImage(index);
                }}
                src={currentLoading || image}
                alt={image} />
        );
    });

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={handleLoad}
            hasMore={true || false}
            useWindow>
            <MainWrapper>
                {listItems}
            </MainWrapper>
        </InfiniteScroll>
    );
}

FeedList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectImage: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default FeedList;
