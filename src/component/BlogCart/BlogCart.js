import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToState } from '../../Redux/actions/addToStateAction';
import './BlogCart.css'
const BlogCart = ({ data }) => {
    let history = useHistory();
    const dispatch = useDispatch()
    const handleClick = (e) =>{
        console.log(e);
        dispatch(addToState)
        history.push(`/home/`+parseInt(e));

    }
    console.log(data);
    const {date} = data
    return (
        <div>
            <div class="card" style={{width: '30rem'}}>
                <img src={data._embedded?.['wp:featuredmedia'][0]?.source_url} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p>{data._embedded.author[0].name }</p>
                    <p>{date}</p>
                    <h5 class="card-title">{data.title.rendered}</h5>
                    <p class="card-text">...</p>
                    <a onClick={()=>handleClick(data.id)} href="#" class="button"><FontAwesomeIcon icon={faArrowRight} />  ReadMore</a>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;