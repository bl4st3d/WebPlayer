import * as React from 'react';
import '../style/main.scss';

import { Button } from './atoms/';
import { Header } from './organisms';

export const App = () => {
    return (
        <>
            <Header />
            <Button>Test</Button>
        </>
    );
};
