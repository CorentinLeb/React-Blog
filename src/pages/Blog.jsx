import React, { useState,useEffect } from 'react' 
import '../css/blog.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../components/form'
import Article from '../components/Article'
import{NavLink} from'react-router-dom'
import axios from 'axios';


const url = "http://localhost:3000/api/v1/posts"

const Blog = () => {
    const [posts, setPosts] = useState([]);
    async function getPosts() {
        try {
            const res = await axios.get(url);
            setPosts(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getPosts()
    },[])

    return (
        <>
        <Router>
            <h1>BLOG</h1>
            <button><NavLink to="/blog">Les articles</NavLink></button>

            <button><NavLink to="blog/form">créer un article</NavLink></button>
            <Switch>
                <Route path="/blog" key="/blog" exact>
                    <Article posts={posts} />
                </Route>
                <Route path = {url} exact>
                    {console.log({url})}
                    <div>
                        Plus la
                    </div>
                </Route>
                <Route path="/blog/form" exact>
                    <Form/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Blog