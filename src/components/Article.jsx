import{Link} from'react-router-dom'

const Article = ({posts}) => {

    return(
        <>
        
        {posts.map((p) => {
            const { id, title, content, tags} = p;
            const url = `/blog/${p.id}`
            
            return (
               <Link to={`blog/${title}`}>
                <div className="article" key={id} >
                    <h2 className="title-article">{title}</h2>
                    <p className="content-article">{content.substring(0,300)}...</p>
                    <p className="tags-article">{tags.slice(' ')}</p>
                </div>
                </Link>
        )
        })}
        
        </>
    )    
}

export default Article