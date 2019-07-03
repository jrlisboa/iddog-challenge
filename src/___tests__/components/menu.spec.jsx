import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../components/menu';

import {
    MenuWrapper,
    Item,
} from '../../components/menu/index.style';

describe('Menu component', () => {
    const items = [
        'foo',
        'bar',
        'bazz',
    ];
    const onChangeMock = jest.fn();
    const component = shallow(
        <Menu
            change={onChangeMock}
            activeIndex={0}
            items={items} />,
    );

    it('Should render Menu component with correct content', () => {
        expect(component.find(MenuWrapper)).toBeTruthy();
        expect(component.find(MenuWrapper).children()).toHaveLength(items.length);
    });

    it('Shold call click function items.length times', () => {
        component.find(Item).map((_item) => {
            return _item.simulate('click');
        });
        expect(onChangeMock.mock.calls.length).toBe(3);
    });
});
