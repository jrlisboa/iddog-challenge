/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import ImageModal from '../../components/image-modal';

describe('ImageModal component', () => {
    const list = [
        'https://images.dog.ceo/breeds/pug/n02110958_10.jpg',
        'https://images.dog.ceo/breeds/pug/n02110958_10186.jpg',
        'https://images.dog.ceo/breeds/pug/n02110958_10193.jpg',
    ];
    const onChangeMock = jest.fn();
    const component = mount(
        <ImageModal
            list={list}
            selected={0}
            change={onChangeMock}
            category="pug" />,
    );

    it('Should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('Should render correct image', () => {
        expect(component.find('img').props().src).toBe(list[0]);
    });

    it('Should call the change function with undefined', () => {
        component.simulate('click');
        expect(onChangeMock.mock.calls.length).toBe(1);
        expect(onChangeMock).toHaveReturnedWith(undefined);
    });
});
