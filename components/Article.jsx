import React from 'react';

export default function Article(title) {
    return (
        <div>
            <div id="author">${author}</div>
            <div id="author_img">${author_img}</div>
            <div id="title">${title}</div>
            <div id="sub_title">${sub_title}</div>
            <div id="date">${date}</div>
            <div id="article">${article}</div>
        </div>
    );
}
