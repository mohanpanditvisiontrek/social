import React, { useContext} from 'react'
import "./css/leftbar.css";
import "./css/sidebars.css";
import "./sidebars.js";
import Avatar from 'react-avatar';
import image1 from './images/group.png';
import { NavLink } from "react-router-dom"
import pageicon from './images/page.png';
import groupicon from './images/group.jpg';
import eventicon from './images/even.png';
import reelicon from './images/reel.png';
import p1 from './images/p.jpg';
import share from './images/share.jpg';
import comment from './images/comment.png';
import like from './images/like.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import UserData from "../context/usercontext";


const LeftBar = () => {

  const userdata=useContext(UserData)

  return (
    <>
     <main className="d-flex flex-nowrap pt-5">
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width:355}}>
    
    <div className="list-group list-group-flush border-bottom scrollarea mt-5">
      <div className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <NavLink to="" className="mb-1 text-dark text-decoration-none">
          <Avatar googleId="118096717852922241760" src={"http://127.0.0.1:8000"+userdata.profile_pic} size="45" round={true} />  <strong>
          {userdata.username}</strong></NavLink>
        </div>
      </div>

      <div className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <NavLink to="" className="mb-1 text-dark text-decoration-none">
            <Avatar googleId="118096717852922241760" src={image1} size="45" round={true} /> <strong>
            Friends</strong></NavLink>
        </div>
      </div>
      <div className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <NavLink to="/"  className="mb-1 text-dark text-decoration-none">
          <Avatar googleId="118096717852922241760" src={pageicon} size="45" round={true} /> 
            <strong>Pages</strong></NavLink>
        </div>
      </div>
      <div className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <NavLink to="/"  className="mb-1 text-dark text-decoration-none">
          <Avatar googleId="118096717852922241760" src={groupicon} size="45" round={true} /> 
            <strong>Group</strong></NavLink>
        </div>
      </div>

      <div className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <NavLink to="/"  className="mb-1 text-dark text-decoration-none">
          <Avatar googleId="118096717852922241760" src={eventicon} size="45" round={true} /> 
            <strong>Events</strong></NavLink>
        </div>
      </div>

      <div className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <NavLink to="/"  className="mb-1 text-dark text-decoration-none">
          <Avatar googleId="118096717852922241760" src={reelicon} size="40" round={true} /> 
            <strong>Reels</strong></NavLink>
        </div>
      </div>

   
    </div>
  </div>

  <div className='posts scrollarea'>
  <Card style={{ width: '30rem' }} className="mt-3">
     <Card.Title>
  
     <Avatar googleId="118096717852922241760" className='ms-2 mt-1' src={"http://127.0.0.1:8000"+userdata.profile_pic} size="65" round={true} /> 
     <strong className='ms-3'>{userdata.username}</strong>
     </Card.Title>
      <Card.Body>
      <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" className='mt-2'  src={p1} />    
        <hr></hr>     
        <ButtonGroup  className="w-100" aria-label="Basic example">
          <Button variant="white"  ><Image src={like} style={{width:35}}></Image></Button>
          <Button variant="white"> <Image src={comment} style={{width:35}}></Image> </Button>
          <Button variant="white"><Image src={share} style={{width:35}}></Image> </Button>
       </ButtonGroup>
      </Card.Body>
    </Card>

  

  </div>
</main>
    </>
  );
};

export default LeftBar;
