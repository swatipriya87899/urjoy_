import React from 'react'
import Heading from './Heading'
import './FirstPage.css'
import Header from './Header'
import Content from './Content'
import OutlinedButton from './OutlinedButton'
import {Link} from 'react-router-dom';
import man from './images/man.png'
import queue from './images/queue.png'


const FirstPage = () => {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <div className='images'>
            <img src={queue} alt='queue' className='queue'/>
            <img src={man} alt="man" className='man'/>
            </div>
      <div className='btn'>
        <Link to='/login' style={{textDecoration: 'none'}}>
      <OutlinedButton name='Login as Student'></OutlinedButton>
      </Link>
      <OutlinedButton name='Login as Admin'></OutlinedButton>
      </div>
    </div>
  )
}

export default FirstPage
