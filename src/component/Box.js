import React from "react";

const Box = (props) => {
  let result = props.result;
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;

// 가위: https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png
// 바위: https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png
// 보: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvciv57AXv5krjeGZ2dBEtESuvSk33dpvT_-AebVrCx5Flo2ME_F-r9vw7Ayqdx9oq10s&usqp=CAU
