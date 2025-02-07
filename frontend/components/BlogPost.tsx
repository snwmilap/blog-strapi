import React from 'react';

interface BlogPostProps {
    id: string;
    title: string;
    excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ id, title, excerpt }) => {
    return (
        <li key={id}>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <a href={`/posts/${id}`}>Read more</a>
        </li>
    );
};

export default BlogPost; 