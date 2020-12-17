import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = ({ sushis, moveConveyor, handleConsumption, eaten }) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map((sushi) => (
          <Sushi
            key={sushi.id}
            handleConsumption={handleConsumption}
            sushi={sushi}
            eaten={eaten}
          />
        ))}
        <MoreButton moveConveyor={moveConveyor} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
