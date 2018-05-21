import React, { Component } from 'react';
//import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';


import './Blog.css';

class Blog extends Component {

    render () {  

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                exact
                                to={{
                                    pathname: '/',
                                    hash: '#submit',
                                    search: '?query-peram=true'
                                }}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/new-post">
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;