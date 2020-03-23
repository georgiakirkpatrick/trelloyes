import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';
// import { isMainThread } from 'worker_threads';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List key="4" header="Fourth list" 
                cards={
                    `'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
                    'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum'}`
                } 
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});