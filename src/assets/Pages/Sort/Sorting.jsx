import React from "react";
import Bars from "./Bars";
import Buttons from "./Buttons";
import styled from "styled-components";

const Blured = styled.div`
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(100px); /* Add the blur effect to the background */
  box-shadow: 0px 0px 30px 20px rgba(255, 168, 0, 0.18);
  overflow: hidden;
`;

function Sorting() {
  return (
    <>
      <div className="flex flex-col mx-auto w-[80vw] h-[75vh] mt-5 gap-5">
        <div className="flex w-[100%]">
          <Buttons />
        </div>
        <Blured className="bg-black w-[100%] h-[100%] rounded-lg">
          <Bars/>
        </Blured>
      </div>
    </>
  );
}

export default Sorting;
