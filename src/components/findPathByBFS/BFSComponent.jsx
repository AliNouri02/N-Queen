import React, { useState } from "react";
import Heading from "./Header";
import Grid from "./Grid";

const BFSComponent = () => {
  const [start, setStart] = useState(false);
  const [target, setTarget] = useState(false);
  const [search, setSearch] = useState(false);
  const [wall, setWall] = useState(false);

  const startHandler = (data) => {
    if (data === "true") setStart(true);
    if (data === "false") setStart(false);
  };

  const targetHandler = (data) => {
    if (data === "true") setTarget(true);
    if (data === "false") setTarget(false);
  };
  const searchHandler = () => {
    setSearch(true);
  };

  const drawWallHandler = () => {
    setWall(true);
  };

  
  return (
    <>
      <React.Fragment>
      <Heading onStart={startHandler} onTarget={targetHandler} onSearch={searchHandler} onWall={drawWallHandler}/>

        <Grid
          start={start}
          target={target}
          onStart={startHandler}
          onTarget={targetHandler}
          search={search}
          wall={wall}
        />
      </React.Fragment>
    </>
  );
};

export default BFSComponent;
