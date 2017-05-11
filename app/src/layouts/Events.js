import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';

const Events = ({events, image}) => (
  <div style={{background: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height:'100vh', position: 'relative', overflowY: 'scroll'}}>
  <div className={css(styles.events)} >
    <h1>Upcoming Events</h1>
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
  </div>
  </div>
)


const styles = StyleSheet.create({
  events: {
    maxWidth: '1440px',
    minWidth: '70vw',
    background: 'rgba(0,0,0,.75)',
    margin: '0 auto',
    padding: '15px 100px 30px 100px',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '100%',
    '@media (max-width: 670px)':{
      padding: '22px 22px 100px 22px',
      position: 'relative',
    }
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
