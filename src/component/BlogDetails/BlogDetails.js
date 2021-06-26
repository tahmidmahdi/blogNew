import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    let { e } = useParams();
    console.log('from', e);
    const [post, setPost] = useState({})


    // const data =   useSelector((state) => {
    //     return state.state
    // }

    // let value = data.find(p => p.id === e)
    // console.log(value);
    // setPost(value)

    useEffect(() => {

        

        fetch(`http://localhost:4000/home`)
        .then(res => res.json())
        .then(data => {
            let value = data.find(p => p.id == e);
            console.log(value);
            setPost(value)
        })
    },[])

    
    return (
        <div className="text-center cart-div">
            <h1 className="text-center mt-5">{post.title?.rendered}</h1>
            <img className="mt-5" style={{width:'400px'}} src={post._embedded?.['wp:featuredmedia'][0]?.source_url} alt="" />
            <p className="text-center mt-5">{post._embedded?.author[0]?.name}</p>
        </div>
    );
};

export default BlogDetails;