import React from "react";
import { BsTrophy } from "react-icons/bs";

function Trophey({ position }) {
  const colors = ["#ffc107", "#8a9597", "#cd7f32"];
  return (
    <>
      <div id="tri"></div>
      <div id="trophey">
        <BsTrophy
          className="trophey"
          style={{ color: colors[position] }}
        ></BsTrophy>
      </div>
    </>
  );
}

export default Trophey;
