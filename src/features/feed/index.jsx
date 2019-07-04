import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { feed as feedAction } from './store/actions';

import {
    MainWrapper,
    NavigationStyle,
} from './index.style';
import queryString from '../../utils/qs';

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

class Feed extends Component {
    constructor(props) {
        super(props);
        this.category = queryString().category;
        if (!this.category) history.push(`/feed?category=${breeds[0]}`);

        this.state = {
            currentTab: breeds.indexOf(this.category) > -1
                ? breeds.indexOf(this.category) : 0,
            currentImage: undefined,
        };
    }

    componentDidMount() {
        const { dispatchFeed } = this.props;
        dispatchFeed(this.category);
    }

    handleChangeTab = (index) => {
        const { dispatchFeed } = this.props;
        history.push(`/feed?category=${breeds[index]}`);
        dispatchFeed(breeds[index]);
        this.setState({
            currentTab: index,
        });
    };

    handleSelectImage = (index) => {
        const { currentTab } = this.state;
        if (index === undefined) {
            history.push(`/feed?category=${breeds[currentTab]}`);
        }
        this.setState({
            currentImage: index,
        });
    }

    render() {
        const { feed } = this.props;
        const {
            currentTab,
            currentImage,
        } = this.state;
        const {
            loading,
            list,
        } = feed;

        return (
            <MainWrapper>
                <NavigationStyle>
                    <Title />
                    <Menu
                        activeIndex={currentTab}
                        change={this.handleChangeTab}
                        items={breeds} />
                </NavigationStyle>
                <FeedList
                    loading={loading}
                    selectImage={this.handleSelectImage}
                    list={list} />
                <ImageModal
                    list={list}
                    change={this.handleSelectImage}
                    category={breeds[currentTab]}
                    selected={currentImage} />
            </MainWrapper>
        );
    }
}

Feed.propTypes = {
    feed: PropTypes.shape({
        loading: PropTypes.bool,
        breed: PropTypes.object,
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
