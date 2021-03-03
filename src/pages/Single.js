import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import axios from 'axios'


const apiUrl = 'http://localhost:3000/api/v1/posts'

const Single = () => {
    const [single, setSingle] = useState({});

    const getSingle = async () => {
        
    }
    const match = useRouteMatch();
    useEffect(() => {
        console.log(match.params)
    })
    return (
        <div>
            Single Post
        </div>
    )
}

export default Single
