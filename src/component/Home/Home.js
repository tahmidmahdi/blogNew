import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogCart from '../BlogCart/BlogCart';
import './Home.css'
const Home = () => {
    const [post , setPost] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/home')
        .then(res => res.json())
        .then(data => {
            setPost(data)
        })
    },[])
    console.log(post);
    return (
        <div className="d-flex justify-content-around mt-5 ">
            {
                post.map(data => <BlogCart data={data}></BlogCart>)
            }
        </div>
    );
};

export default Home;