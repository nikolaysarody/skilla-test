import React, { FC } from 'react';
import './style/index.scss';
import { CallPage } from '../pages/call-page/ui/CallPage';

const App: FC = () => {
    return (
        <div className="App">
            <CallPage />
        </div>
    );
};

export default App;
