import React from "react";
import Heading from "./Heading";
import Club from "./images/Club.png";
import "./Explore.css";
import ExploreCard from "./ExploreCard";
import Canteen from "./images/Canteen.png";
import Profile from "./Profile";


const Explore = () => {
  return (
    <div>
        <div className='Head'>
      <Heading></Heading>
      <Profile name="Swati Priya" timing='02:25:30'></Profile>
      </div>
      <div className="heading">
        <div>Let's Explore The College</div>
      </div>
      <ExploreCard subHeading='Canteen' img={Canteen}/>
      <ExploreCard subHeading='Club' img={Club}/>
    </div>
  );
};

export default Explore;
