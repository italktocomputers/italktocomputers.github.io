import React from 'react';
import Article from './Article';
import ArticleList from './ArticleList';
import Header from './Header';
import Footer from './Footer';

export default function Site() {
    return (
        <div>
            <Header />
            <Article />
            <ArticleList />
            <Footer />
        </div>
    );
}
