import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../components/title';

import {
    TitleStyle,
} from '../../components/title/index.style';

describe('Title component', () => {
    const component = shallow(<Title />);
    it('Should render Title component without crash', () => {
        expect(component).toBeTruthy();
    });

    it('Should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('shold render all visual components', () => {
        expect(component.find(TitleStyle)).toHaveLength(1);
    });
});
