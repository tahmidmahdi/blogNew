import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    let { id } = useParams();
    console.log('from', id);

    return (
        <div>
            hello
        </div>
    );
};

export default BlogDetails;