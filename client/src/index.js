import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/sass/custom.scss';

const Comp = () => {
    return <h1>Pacific Client</h1>;
};

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Comp} />
                {/* <Route component={Error} /> */}
            </Switch>
        </Router>
    );
}
render(<App />, document.getElementById('app'));
