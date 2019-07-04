import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../components/input';

import {
    InputStyle,
} from '../../components/input/index.style';

describe('Input component', () => {
    const event = {
        target: {
            name: 'myInput',
            value: 'foo',
        },
    };
    const onChangeMock = jest.fn((e) => {
        return e;
    });
    const component = shallow(
        <Input
            name="myInput"
            onChange={onChangeMock} />,
    );

    it('Should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('Should Input change value', () => {
        component.find(InputStyle).simulate('change', event);
        expect(onChangeMock).toHaveReturnedWith(event);
    });
});
