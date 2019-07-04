import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { feed as feedAction } from './store/actions';

import { State } from './store/constants';

import {
    MainWrapper,
    NavigationStyle,
} from './index.style';

import Title from '../../components/title';
import Menu from '../../components/menu';
import FeedList from '../../components/feed-list';
import ImageModal from '../../components/image-modal';

const history = createBrowserHistory();

const breeds = [
    'husky',
    'labrador',
    'hound',
    'pug',
];

function Feed(props) {
    const {
        feed,
        dispatchFeed,
    } = props;
    const {
        loading,
        list,
        state,
    } = feed;

    const [currentTab, setCurrentTab] = useState(0);
    const [currentImage, setCurrentImage] = useState(undefined);
    useEffect(() => {
        if (state === State.IDLE) {
            dispatchFeed(breeds[currentTab]);
        }
    });

    const handleChangeTab = (index) => {
        history.push(`/feed?category=${breeds[index]}`);
        dispatchFeed(breeds[index]);
        setCurrentTab(index);
    };

    const handleSelectImage = (index) => {
        setCurrentImage(index);
    };

    return (
        <MainWrapper>
            <NavigationStyle>
                <Title />
                <Menu
                    activeIndex={currentTab}
                    change={handleChangeTab}
                    items={breeds} />
            </NavigationStyle>
            <FeedList
                loading={loading}
                selectImage={handleSelectImage}
                list={list} />
            <ImageModal
                list={list}
                change={handleSelectImage}
                selected={currentImage} />
        </MainWrapper>
    );
}

Feed.propTypes = {
    feed: PropTypes.shape({
        loading: PropTypes.bool,
        list: PropTypes.array,
    }).isRequired,
    dispatchFeed: PropTypes.func.isRequired,
};

function mapStateToProps({ feed }) {
    return {
        feed,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchFeed: (params) => {
            return dispatch(feedAction(params));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
