import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function PercentageBar({ number, total, name, selectedOption }) {
  const percentage = (number / total) * 100;

  return (
    <div className="results">
      {selectedOption && <div className="circle">YOUR VOTE</div>}
      Would you rather {name} ?
      <ProgressBar
        now={percentage}
        animated
        striped
        variant="success"
        label={`${percentage}%`}
      />
      <div className="vote-count">
        {number} of {total} votes
      </div>
    </div>
  );
}

export default PercentageBar;
