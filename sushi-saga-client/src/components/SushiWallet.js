import React from "react";

const SushiWallet = ({ remainingCash, updateCash }) => {
  return (
    <form>
      <label htmlFor="money">Add more money you hungry fool!</label>
      <input
        id="money"
        type="number"
        value={remainingCash}
        onChange={updateCash}
      />
    </form>
  );
};

export default SushiWallet;
