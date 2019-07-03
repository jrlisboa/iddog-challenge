import React from 'react';
import { Link } from 'react-router-dom';
import Cat from '../../ui/assets/cat.png';

import {
    TitleStyle,
    MainWrapper,
    CatImage,
    GoToFeed,
} from './index.style';

function Title() {
    return (
        <MainWrapper>
            <CatImage
                src={Cat} />
            <TitleStyle>
                Sorry, no dogs to see here.
            </TitleStyle>
            <GoToFeed>
                <Link to="/feed">
                    GO TO FEED
                </Link>
            </GoToFeed>
        </MainWrapper>
    );
}

export default Title;
