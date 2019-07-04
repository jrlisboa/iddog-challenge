import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/404';

import {
    TitleStyle,
    MainWrapper,
    CatImage,
    GoToFeed,
} from '../../components/404/index.style';

describe('NotFound component', () => {
    const component = shallow(<NotFound />);

    it('Should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('Should render NotFound component without crash', () => {
        expect(component).toBeTruthy();
    });

    test('shold render all visual components', () => {
        expect(component.find(TitleStyle)).toHaveLength(1);
        expect(component.find(MainWrapper)).toHaveLength(1);
        expect(component.find(CatImage)).toHaveLength(1);
        expect(component.find(GoToFeed)).toHaveLength(1);
    });
});
