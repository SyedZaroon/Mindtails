import React from 'react';
import Error404 from './Error404'; 
import { Blog } from '../data/Blog';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
    let { slug } = useParams(); 
    let currentData = Blog.find((post) => post.slug === slug);

    if (!currentData) {
        return <Error404 />;
    }

    return (
        <div className='mb-4 p-4 border rounded-md shadow-md'>
            <h1 className='font-bold text-2xl mb-2'>{currentData.title}</h1>
            <img src={currentData.image} alt={currentData.title} className="w-full h-auto mb-4 rounded-md" />
            <p className="text-gray-600">{currentData.description}</p>
        </div>
    );
}
