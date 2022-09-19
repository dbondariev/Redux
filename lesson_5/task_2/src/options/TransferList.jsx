import React from 'react'
import AvailableOption from "../options/AvailableOption";
import SelectedOption from "../options/SelectedOption";

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOption title="Available options" />
      <SelectedOption title="Selected options" />
    </div>
  );
}

export default TransferList;