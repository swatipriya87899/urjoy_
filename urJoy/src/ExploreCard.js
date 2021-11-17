import React from 'react'

const box = {
    width: "70%",
    height: "50%",
  };

const canteen={
    textAlign: "center",
    marginTop: "2rem"
}

const subHeading={
        fontSize:'4rem',
        color: 'white',
        textAlign: 'center',
}
  

const ExploreCard = (props) => {
    return (
        <div>
            <div style={canteen}>
        <div style={subHeading}>{props.subHeading}</div>
        <div style={{ marginTop: "2rem" }}>
          <img src={props.img} style={box} />
        </div>
      </div>
            
        </div>
    )
}

export default ExploreCard
