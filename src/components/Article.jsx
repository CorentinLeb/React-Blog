import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import{NavLink} from'react-router-dom'




const Article = ({posts}) => {

    return(
        <>
        
        {posts.map((p) => {
            const { id, title, content, tags} = p;
            const url = `/blog/${p.id}`
            

            return (
                <Router>
                    <Switch>
                        <Route path = {url} exact>
                            <h2>
                                Article deja lu
                            </h2>
                        </Route>
                    <Route path ='/blog' exact>
                <div className="article" key={id} >
                    <h2 className="title-article">{title}</h2>
                    <p className="content-article">{content.substring(0,300)}...</p>
                    <p className="tags-article">{tags.slice(' ')}</p>
                    <button><NavLink to={url}>Deja lu</NavLink></button>
                </div>
                    </Route>
                    </Switch>
                </Router>
        )
        })}
        </>
    )    
}

export default Article