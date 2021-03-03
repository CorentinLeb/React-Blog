import '../css/form.css'
import React, { useState } from 'react'



const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setPost({title,content,tags});
        console.log(post)
    }

    const [title,setTitle]= useState('');
    const [content,setContent]= useState('');
    const [tags,setTags]= useState([]);
    const [submit,setSubmit]= useState(false);
    const [post,setPost]= useState({});
    
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
                <div className='post-form' >
                    <label htmlFor="post-title">Titre du post</label>
                    <input type="text" name="post-title" id="post-title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <label htmlFor="post-content">Contenu : </label>
                    <textarea name="post-content" id="post-content" cols="30" rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                    <label htmlFor="post-tags">Tag </label>
                    <input type="text" name="post-tags" id="post-tags" value={tags} onChange={(e)=>
                        {let newTags = e.target.value.split(',');
                            setTags(newTags)}}/>
                    <input type='submit' id="go-btn" value='Go' />
                </div>

        </form>
        </div>
    )
}

export default Form