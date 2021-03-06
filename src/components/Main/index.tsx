import React from 'react';

import ProfilePage from '../ProfilePage';

import { Container, 
        Header, 
        BackIcon, 
        ProfileInfo, 
        BottomMenu, 
        HomeIcon,
        SearchIcon, 
        BellIcon, 
        EmailIcon } 
from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>Pedro Maranini</strong>
                    <span>330 tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage></ProfilePage>

            <BottomMenu>
                <HomeIcon className="active" />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    )
}

export default Main;