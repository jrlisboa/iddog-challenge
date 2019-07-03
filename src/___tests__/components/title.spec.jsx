import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../components/title';

describe('Title component', () => {
    test('Should render Title component with correct text', () => {
        const component = shallow(<Title />);
        expect(component.find('THE IDDOG')).toBeTruthy();
    });
});
