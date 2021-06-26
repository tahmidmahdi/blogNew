import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogCart = ({ data }) => {
    let history = useHistory();

    const handleClick = (id) =>{
        console.log(id);
        history.push(`/home/`+id);

    }
    console.log(data);
    return (
        <div>
            <div class="card" style={{width: '30rem'}}>
                <img src={data._embedded?.source_url} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{data.title.rendered}</h5>
                    <p class="card-text">...</p>
                    <a onClick={()=>handleClick(data.id)} href="#" class="btn btn-primary">ReadMore</a>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;