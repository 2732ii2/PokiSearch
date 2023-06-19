import React, { useEffect, useState } from 'react'


export default function BookMark ({arr_}){
    console.log(arr_);
    var filtered=[];
    var li=["Hp","Attack","Defence","Speed"];
    var [state,setstate]=useState([]);
    console.log(state);
    if(state){
      filtered=arr_.filter((e, i) => {
        if (state.includes(e["name"]))
        {
          return e;
        }
      });
    }
    console.log(filtered);
    function caller(){
      var c=JSON.parse(localStorage.getItem("list"));
      setstate(c);
    }
    useEffect(()=>{
      caller();
    },[]);
  return (
    <div id="bookmark">
      {filtered.length !== 0 ? (
        filtered.map((e, i) => {
          var me = e;
          return (
            <div id="bdiv">
              <div id="left">
                <img
                  src={e.front_img}
                  style={{
                    width: "90%",
                    height: "80%",
                    // border: "1px solid white",
                  }}
                />
                <h2>{e.name}</h2>
              </div>
              <div id="right">
                <div id="brig">
                  HP
                  <div
                    style={{
                      width: "70%",
                      border: "1px solid black",
                      height: "30%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: `${me.hp}%`,
                        height: "100%",
                        background: "green",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                </div>
                <div id="brig">
                  Attack
                  <div
                    style={{
                      width: "70%",
                      border: "1px solid black",
                      height: "30%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: `${me.attack}%`,
                        height: "100%",
                        background: "green",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                </div>
                <div id="brig">
                  Defence
                  <div
                    style={{
                      width: "70%",
                      border: "1px solid black",
                      height: "30%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: `${me.defence}%`,
                        height: "100%",
                        background: "green",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                </div>
                <div id="brig">
                  Speed
                  <div
                    style={{
                      width: "70%",
                      border: "1px solid black",
                      height: "30%",
                      borderRadius: "20px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "start",
                      alignContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: `${me.speed}%`,
                        height: "100%",
                        background: "green",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ color: "white", fontSize: "24px" }}>
          <h3 style={{marginTop:"20%"}}>Go and Add your Faviorite Pokimon !</h3>
        </div>
      )}
    </div>
  );
}