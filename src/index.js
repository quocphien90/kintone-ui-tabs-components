import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './tabs';
import * as serviceWorker from './serviceWorker';


class SampleApp extends React.Component {
    constructor(opts) {
        super(opts);
        const selectedValue = 0;
        const items = [
            {tabName: 'Hello World', tabContent: 'Welcome to learning React!'},
            {tabName: 'Installation', tabContent: 'You can install React from npm.',  isDisabled: true},
            {tabName: 'Tour Guide', tabContent: 'Welcome to tour guide React!'},
          ];
        this.state = { items: items, value: selectedValue};
    }
    onClickTabItem = (selectedValue) => {
        this.setState({
            value: selectedValue
        });
    }

    render() {
        return (
            <div>
                <Tabs items={this.state.items} value={this.state.value} onClickTabItem={this.onClickTabItem} />
            </div>
        );
    }
}
ReactDOM.render(
    <SampleApp />,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
