import React, {component} from 'react';
import { Comments } from './components/comments';
import { News } from './components/news';
import { Input } from './components/testInput';
import './App.css';
import * as ReactDOM from "react-dom";

let my_news = [
    {
        author : 'Urwqe',
        text: 'sample',
        fullText : 'text'
    },
    {
        author : 'me',
        text: 'sample text',
        fullText : 'awwwwarwr'
    },
    {
        author : 'uria2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis harum id impedit, necessitatibus obcaecati optio perspiciatis repellat similique vero. Consequatur molestiae, temporibus? Blanditiis commodi, excepturi harum mollitia quibusdam similique.',
        fullText : 'awwwwarwr'
    },
    {
        author : 'uria2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis harum id impedit, necessitatibus obcaecati optio perspiciatis repellat similique vero. Consequatur molestiae, temporibus? Blanditiis commodi, excepturi harum mollitia quibusdam similique.',
        fullText : 'awwwwarwr'
    }
];

class App extends React.Component{
    render () {
        return(
            <div className={"app"}>
                Good NEWS eweryone!
                <News data = {my_news}/>
                <Comments/>
                <Input/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);