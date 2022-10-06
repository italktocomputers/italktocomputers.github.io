import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/styles.scss';

export default function ArticleHeader({author, authorImg, title, subTitle, date}) {
    ArticleHeader.propTypes = {
        author: PropTypes.string,
        authorImg: PropTypes.string,
        title: PropTypes.string,
        subTitle: PropTypes.string,
        date: PropTypes.date,
    };

    return (
        <div>
            <div className={styles.author}>{author}</div>
            <div className={styles.authorImage}>
                <img src="" />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subTitle}</div>
            <div className={styles.date}>{date}</div>
            <hr />
        </div>
    );
}
