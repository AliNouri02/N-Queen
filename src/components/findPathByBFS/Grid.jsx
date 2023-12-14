import React, { useEffect, useState } from "react";
import Styles from "./Grid.module.css";

let time = 0;
let vis = [];

const Grid = (props) => {
  const [startNode, setStartNode] = useState({});
  const [endNode, setEndNode] = useState({});
  const [array2D, setArray2D] = useState([]);

  let start = props.start;
  let target = props.target;
  let wall = props.wall;

  let draw = [];
  for (let i = 0; i <= 50; i++) draw[i] = i;
  let arr = [];

  useEffect(() => {
    // make 2D greed

    for (let i = 0; i <= 50; i++) {
      let a = [];
      for (let j = 0; j <= 50; j++) {
        a.push(1);
      }
      arr.push(a);
    }

    // make visited array
    for (let i = 0; i <= 50; i++) {
      let d = [];
      for (let j = 0; j <= 50; j++) {
        d.push(false);
      }
      vis.push(d);
    }

    setArray2D(arr);
  }, []);

  console.log("Hi Mehedi", array2D);

  const getGridNumberHandler = (i, j, event, check) => {
    if (check === "start") {
      // get starting point
      setStartNode({ i: i, j: j });

      event.target.style.backgroundColor = "green";
      props.onStart("false");
    }
    if (check === "target") {
      // get end point
      setEndNode({ i: i, j: j });
      event.target.style.backgroundColor = "red";
      props.onTarget("false");
    }

    if (check === "wall") {
      // visited node for wall node
      event.target.style.backgroundColor = "black";
      vis[i][j] = true;
      console.log(vis[i][j]);
    }
  };

  // find Path
  function isValid(vis, row, col) {
    if (row < 0 || col < 0 || row >= 50 || col >= 50) {
      return false;
    }

    if (vis[row][col]) {
      return false;
    }

    return true;
  }
  function BFS(si, sj, ei, ej) {
    // dricection
    console.log("BFS Call");
    let dRow = [-1, 0, 1, 0];
    let dCol = [0, 1, 0, -1];

    console.log(vis);

    let path = {};
    let queue = [];
    queue.push([si, sj]);

    while (queue.length > 0) {
      let [x, y] = queue[0];

      queue.shift();

      for (let i = 0; i < 4; i++) {
        let adjx = x + dRow[i];
        let adjy = y + dCol[i];

        if (isValid(vis, adjx, adjy)) {
          if (path[`${adjx}-${adjy}`] === undefined) {
            path[`${adjx}-${adjy}`] = [];
          }
          if (!(adjx === ei && adjy === ej) && !(adjx === si && adjy === sj)) {
            // sleep
            setTimeout(function () {
              let btn = document.getElementById(`${adjx}-${adjy}`);
              btn.style.backgroundColor = "blue";
            }, 10 * time);

            time++;
          }

          path[`${adjx}-${adjy}`].push([x, y]);
          queue.push([adjx, adjy]);
          vis[adjx][adjy] = true;
        }

        if (adjx === ei && adjy === ej) return { path, adjx, adjy };
      }
    }

    return 0;
  }

  const findPathHandler = () => {
    console.log(startNode, endNode);
    console.log(startNode.length, endNode.length);
    if (Object.keys(startNode).length && Object.keys(endNode).length) {
      console.log("Before BFS");
      let ans = BFS(startNode.i, startNode.j, endNode.i, endNode.j);
      console.log("After BFS");
      console.log(ans);
      if (ans !== 0) {
        let x = ans.adjx,
          y = ans.adjy;

        while (true) {
          let id = ans.path[`${x}-${y}`];
          x = id[0][0];
          y = id[0][1];
          if (startNode.i === x && startNode.j === y) break;
          setTimeout(() => {
            let btn = document.getElementById(`${id[0][0]}-${id[0][1]}`);
            btn.style.backgroundColor = "orange";
          }, 10 * time);
          time++;
        }
      }
    } else {
      console.log("Hi We are going to find Path");
    }
  };

  // path find all call
  if (props.search === true) {
    findPathHandler();
  }

  // Grid Draw from Here
  let gridDraw = (
    <table className={Styles.table}>
      {draw.map((element, i) => {
        return (
          <tr>
            {draw.map((element1, j) => {
              return (
                <td
                  id={`${i}-${j}`}
                  onClick={(event) => {
                    start && getGridNumberHandler(i, j, event, "start");
                    target && getGridNumberHandler(i, j, event, "target");
                    wall && getGridNumberHandler(i, j, event, "wall");
                  }}
                ></td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );

  return (
    <React.Fragment>
      <h2>Breadth-First Search</h2>
      {gridDraw}
    </React.Fragment>
  );
};

export default Grid;
