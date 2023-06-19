import React, { useEffect, useState } from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { json } from 'react-router-dom';
export default function Home({arr_}) {
  return (
    <div id="home">
      {arr_.length > 1 ? (
        <div id="cards">
          {arr_.map((e, i) => {
            var maine=e;
            return (
              <div key={i} id="card">
                <img
                  src={e.front_img}
                  style={{
                    width: "90%",
                    borderRadius: "50px",
                    minHeight: "80%",
                    // boxShadow: "2px 19px 21px -7px rgb(200, 200, 220,.8)",
                    borderBottom: "1px solid rgb(231, 226, 226,.7)",
                  }}
                />
                <h3>{`${e.weight} kg`}</h3>
                <div id="slit">
                  {<h6>{e.name}</h6>}{" "}
                  <FavoriteIcon 
                    style={{ fontSize: "26px", cursor: "pointer" }}
                    onClick={(e) => {
                      if (!localStorage.getItem("list")){
                        localStorage.setItem("list", JSON.stringify([maine["name"]]));
                      }
                      else if(localStorage.getItem("list")){
                          var b = JSON.parse(localStorage.getItem("list"));
                          if(!b.includes(maine["name"]))
                          {
                            b.push(maine["name"]);
                            localStorage.setItem(
                              "list",
                              JSON.stringify(b)
                            );
                          }
                          else {
                            b.indexOf(maine["name"]);
                            b.splice(b, 1);
                            localStorage.setItem("list", JSON.stringify(b));
                          }
                          console.log(b);
                      }
                      console.log(e.target);
                      if (e.target.style.color === "red") {
                        e.target.style.color = "white";
                      } else {
                        e.target.style.color = "red";
                        setTimeout(()=>{
                          e.target.style.color = "white";
                        },1000)
                      }
                    }}
                  />{" "}
                </div>
              </div>
            );
          })}
          <div>

            {/* <button> Load More</button> */}
          </div>
        </div>
      ) : (
        <div id="animate">
          <div id="innercircle"></div>
        </div>
      )}
    </div>
  );
}
