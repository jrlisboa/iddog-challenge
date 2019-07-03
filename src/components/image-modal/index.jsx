/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {
    MainWrapper,
    ImageWrapper,
    Image,
    fadeIn,
    fadeOut,
} from './index.style';

const target = document.querySelector('#root');
const modalRoot = document.getElementById('modal-root');

class ImageModal extends Component {
    el = document.createElement('div');

    constructor(props) {
        super(props);
        const { selected } = this.props;
        this.state = {
            fade: fadeIn,
            render: selected,
        };
    }

    componentDidUpdate(prevProps) {
        const { selected } = this.props;
        if (
            selected !== prevProps.selected
            && prevProps.selected === undefined
        ) {
            this.setState({
                fade: fadeIn,
                render: selected,
            });
            modalRoot.appendChild(this.el);
            this.setBlur();
        }
        else if (selected !== prevProps.selected) {
            this.setState({
                fade: fadeOut,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        render: selected,
                    });
                    modalRoot.removeChild(this.el);
                    target.removeAttribute('style');
                }, 300);
            });
            this.setBlur();
        }
    }

    setBlur = () => {
        target.setAttribute('style', 'filter: blur(5px);');
    }

    render() {
        const {
            list,
            change,
        } = this.props;
        const {
            render,
            fade,
        } = this.state;

        const url = list[render];
        const renderModal = () => {
            return (
                <MainWrapper
                    onClick={() => {
                        change(undefined);
                    }}>
                    <ImageWrapper
                        fade={fade}
                        onClick={(e) => {
                            e.preventDefault();
                        }}>
                        <Image
                            src={url} />
                    </ImageWrapper>
                </MainWrapper>
            );
        };
        const portal = (
            ReactDOM.createPortal(
                renderModal(),
                this.el,
            )
        );

        return render !== undefined ? portal : null;
    }
}

ImageModal.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.number,
    change: PropTypes.func.isRequired,
};

ImageModal.defaultProps = {
    selected: undefined,
    list: [],
};

export default ImageModal;
