import * as React from 'react';
import '../style/main.scss';

import { Button } from './atoms/';
import { Header } from './organisms';
import { PlayerPage } from './layout/PlayerPage';

export const App = () => {
    return (
        <>
            <Header />
            <PlayerPage />
        </>
    );
};
