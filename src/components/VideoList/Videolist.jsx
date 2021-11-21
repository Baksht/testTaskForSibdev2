import React from 'react';
import styles from './VideoList.module.scss';
import {VideoItem} from "../VideoItem/VideoItem";

export const Videolist = ({videos, masonry, setPageDisplay, searchText, totalResults}) => {


    return (
        <>
            <div className={styles.searchInfo}>
                <div className={styles.totalVideoCounter}>
                    Видео по запросу <b>"{searchText}"</b> <span>{totalResults}</span>
                </div>

                {
                    masonry
                        ?
                        <img
                        className={styles.displayModeButton}
                        src="/icons/itemsList.svg"
                        alt={"itemsList"}
                        onClick={setPageDisplay}
                    />
                        : <img
                            className={styles.displayModeButton}
                            src="/icons/itemsMasonry.svg"
                            alt={"itemMasonry"}
                            onClick={setPageDisplay}
                        />
                }
            </div>

            <div className={!masonry ? styles.container : styles.masonryContainer}>

                {videos.map(video =>
                    <VideoItem
                        key={video.id.videoId}
                        videoImage={video.snippet.thumbnails.medium.url}
                        title={video.snippet.title}
                        channelTitle={video.snippet.channelTitle}
                        masonry={masonry}
                    />
                )}

            </div>
        </>
    );
};

