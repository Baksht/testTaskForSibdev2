import React from 'react';
import styles from './VideoItem.module.scss'




export const VideoItem = ({videoImage, title, channelTitle, masonry}) => {
    return (
        <div className={!masonry ? styles.card : styles.masonryCard}>
            <img className={styles.videoImage} src={videoImage} alt={"video snippet"}/>
            <div className={styles.videoDescription}>
                <div className={styles.videoTitle}>{title}</div>
                <div className={styles.channelName}>{channelTitle}</div>
            </div>
        </div>
    );
};
