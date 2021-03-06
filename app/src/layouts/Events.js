import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';
import {buttons} from './SectionIntro';

const Events = ({events, image, content}) => (
  <div style={{background: 'black', color: 'white', minWidth: "100vw", minHeight: '100vh',}}>
    <div style={{
      position: 'absolute',
      top: '50%',
      width: '100vw',
      transform:'translateY(-50%)',
    }}>
    <div className={css(styles.row)}>
      <div className={css(styles.half)}>
        <div dangerouslySetInnerHTML={{__html: content}} style={{fontWeight: '300', fontSize: '22px'}}/>
      </div>
      <div className={css(styles.half)}>
        <div className={css(styles.events)} >
          <h1>Upcoming Appearances</h1>
          {events.map(event=>{
            const mapsSearchUrl = `https://www.google.com/maps/search/${event.address}`
            return (
              <div key={event.id} style={{
                padding: '15px 0'
              }}>
                <span className={css(styles.eventTitle)}
                      dangerouslySetInnerHTML={{__html: event.title}}
                />
                <div>
                  <a href={mapsSearchUrl} target="_blank" style={{color: 'white',}}>{event.venue}</a>
                </div>
                <div>
                {event.eventTime} on {moment(event.eventDate).format('dddd, MMMM Do YYYY')}
                </div>
              </div>
            )
          })}
          <a  href="mailto:charlie.duke@charlieduke.net"
              style={{color: 'white',
                      textDecoration:'none',
                      width: '100%',
                      padding: '15px',
                      fontSize: '26px',
                      margin: '15px 0px',
                      display: 'inline-block',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                      border:'2px solid white',
                      textTransform:'uppercase'}}>
            Contact
          </a>
        </div>
      </div>
    </div>
</div>
  </div>
)


const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '25px',
  },
  half: {
    width: '50%',
    '@media(max-width: 960px)':{
      width: '50%',
    },
    '@media (max-width: 670px)':{
      width: '100%'
    }
  },
  events: {
    // maxWidth: '1440px',
    // minWidth: '70vw',
    // background: 'rgba(0,0,0,.75)',
    // margin: '0 auto',
    // padding: '15px 100px 30px 100px',
    // color: 'white',
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // // width: '100%',
    // '@media (max-width: 670px)':{
    //   padding: '22px 22px 100px 22px',
    //   position: 'relative',
    // }
  },
  eventTitle: {
    fontSize: '33px',
    '@media (max-width: 670px)':{
      fontSize: '22px',
    }
  }
})


const mapStateToProps = state => {
  const { events } = state

  return {
    events
  }
}

export default connect(mapStateToProps)(Events)
