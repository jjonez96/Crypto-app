import React, { useState, useEffect } from "react";

const Exa1 = (props) => {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return <div>{time}</div>;
};

export default Exa1;
