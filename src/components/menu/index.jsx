import React from 'react';
import PropTypes from 'prop-types';

import {
    MenuWrapper,
    Item,
} from './index.style';

function Menu(props) {
    const {
        items,
        activeIndex,
        change,
    } = props;

    return (
        <MenuWrapper>
            {
                (items || {}).map((item, index) => {
                    return (
                        <Item
                            onClick={() => {
                                return change(index);
                            }}
                            key={`menu-key-${item}`}
                            active={index === activeIndex}>
                            {item}
                        </Item>
                    );
                })
            }
        </MenuWrapper>
    );
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeIndex: PropTypes.number.isRequired,
    change: PropTypes.func.isRequired,
};

export default Menu;
