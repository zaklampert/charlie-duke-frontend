import React from 'react';
import { AudioClip, VideoPlayer } from '../components';
import { StyleSheet, css } from 'aphrodite';
import {showModal} from '../actions';
import {connect} from 'react-redux';

const ImageWithText = ({image, content, caption, imageLink, openModal, dispatch, imageWidth, imageHeight, video}) => {
  const isPortrait = ((imageWidth / imageHeight) < 1);

  return <div className={css(styles.imageWithText)}>
    <div style={{
      margin: '0 auto',
      display: 'block',
      position: 'relative',
      padding: '67px 12px',
    }}>
      {(video && video.length > 0) ?
        <VideoPlayer video={video}/> :
        <div style={{
          display: 'table',
          maxWidth: '100%',
          maxHeight: '60vh',
          margin: '0 auto',
        }}>
        <img data-src={image}
             data-image={image}

             style={{
                maxWidth: '100%',
                maxHeight: '60vh',
                minHeight: '20vh',
                cursor:'zoom-in'
               }}
           />

             <div  style={{
               display: 'table-caption',
               captionSide: 'bottom',
               width: '100%',

             }} dangerouslySetInnerHTML={{__html: content}}></div>
             {(imageLink) ?
               <div  style={{
                 display: 'table-caption',
                 captionSide: 'bottom',
                 textAlign: 'center',

               }}>
                <AudioClip source={imageLink} /> </div>: null }
         </div>
      }
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '5px 15px'
      }}>




      </div>
    </div>
  </div>
}

const styles = StyleSheet.create({
  imageWithText: {
    maxWidth: '1440px',
    margin: '0 auto',
  }
})

export default connect()(ImageWithText);
