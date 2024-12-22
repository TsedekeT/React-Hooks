import React from "react";
import { MyContext } from "../../App";

function Component3() {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => {
          return (
            <div>
              <h1>The last child</h1>
              <h3>Using context API: {data}</h3>
            </div>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

export default Component3;
