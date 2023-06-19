import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Search({arr_}) {
  var filtered_arr=[];
  const state = useSelector((state) => state.value);
  // console.log(state);
  if (arr_.length!==0){
    filtered_arr=arr_.filter((e)=>{
      if (e.name.includes(state)){
        return e;
      }
    })
    console.log(filtered_arr);
  }
  
  
  return (
    <div id="search">
      {state ? (
        filtered_arr.length !== 0 ? (
          filtered_arr.map((e, i) => {
            return (
              <div key={i} id="s_div">
                <img style={{width:"90%",height:"90%"}} src={e.front_img} />
                <h2>{e.name}</h2>
              </div>
            );
          })
        ) : (
          <h1
            style={{
              color: "white",
              fontWeight: 500,
              letterSpacing: "2px",
              marginTop: "5%",
              textShadow: "2px 2px 4px black",
              wordSpacing: "5px",
            }}
          >
            Search your Faviorate Pokimon
          </h1>
        )
      ) : (
        <h1
          style={{
            color: "white",
            fontWeight: 500,
            letterSpacing: "2px",
            marginTop: "5%",
            textShadow: "2px 2px 4px black",
            wordSpacing: "5px",
          }}
        >
          Search your Faviorate Pokimon
        </h1>
      )}
{/* 
      {filtered_arr.length !== 0 ? (
        filtered_arr.map((e, i) => {
          return <h2>{e.name}</h2>;
        })
      ) : (
        <h1
          style={{
            color: "white",
            fontWeight: 500,
            letterSpacing: "2px",
            marginTop: "5%",
            textShadow: "2px 2px 4px black",
            wordSpacing: "5px",
          }}
        >
          Search your Faviorate Pokimon
        </h1>
      )} */}
      {}
    </div>
  );
}
