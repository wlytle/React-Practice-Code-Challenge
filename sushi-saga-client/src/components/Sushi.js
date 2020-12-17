import React from "react";

const Sushi = (props) => {
  const { name, img_url, price, id } = props.sushi;
  return (
    <div className="sushi">
      <div data-id={id} className="plate" onClick={props.handleConsumption}>
        {
          // /* Tell me if this sushi has been eaten! */
          props.eaten.includes(`${id}`) ? null : (
            <img src={img_url} alt={"Sushi"} width="100%" />
          )
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
