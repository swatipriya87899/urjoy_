import React from "react";
import Heading from "./Heading";
import OutlinedButton from "./OutlinedButton";
import "./Queues.css";
import SolidButton from "./SolidButton";
import QueueList from "./QueueList";
import { Link } from "react-router-dom";
import Profile from "./Profile";


const explore={
    fontSize:'1.5rem',
    marginTop: '.1rem',
    color:'#ac864d'
}

const Queues = () => {
  return (
    <div>
      <div className="head">
        <Heading></Heading>
        <div>
          <Profile name="Swati Priya" timing="02:25:30"></Profile>
          <Link to="/explore" style={{textDecoration: 'none'}}>
            <div style={explore}>Click Here to Explore Your College</div>
          </Link>
        </div>
      </div>

      <div className="heading">
        <div>Here is the Name in Queue</div>
      </div>
      <QueueList></QueueList>
      <div className="botton_btn">
        <div className="queue_bottom_btn">
          <Link to="/explore" style={{ textDecoration: "none" }}>
            <SolidButton name="Explore the College"></SolidButton>
          </Link>
          <div>
            <SolidButton name="Ask Your Queries"></SolidButton>
            <OutlinedButton name="Cancel Your Queue"></OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queues;
