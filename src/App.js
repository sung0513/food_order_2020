import React from "react";

function Food( name, pictrue) {
  return (
    <div> 
      <h2>주문 리스트 확인</h2>
        <img src={pictrue} alt={name} />
    </div>
  )
}


//component의 재사용성
const foodIlike = [
  {
    id:1,
    name:"치킨",
    image:
      "http://www.momstouch.co.kr/data/shopimages/xboard/menu/20170825527729.jpg"
  },
  
  {
    id:2,
    name:"피자",
    image: "https://cdn.dominos.co.kr/admin/upload/goods/20200119_h150V2hn.jpg" 
  },
  
  {
    id:3,
    name: "1인 배달",
    image: "https://steemitimages.com/DQmZQcAQYCxHKLtomTLdjkMBqiAc5yZqq4dKwK6wZNvSeq4/44.jpg"
  },
  {
    id:4,
    name:"뭐뭐",
    image: "http://www.momstouch.co.kr/data/shopimages/xboard/menu/20170825900916.jpg"
  }
];  
//map이 랜더링 조집니다. 

function App() {
  return (
    <div> 
         {foodIlike.map(dish => (
           <Food key={dish.id} name={dish.name} pictrue={dish.image} />  
         ))}
    </div>
  );
}



export default App;

//props => chicken이라고 전달함

//리액트란 사용하는 모든 요소를 생성한다.