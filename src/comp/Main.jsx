import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useSelector } from 'react-redux';
import Home from './Pages/Home';
import Search from './Pages/Search';
import { Bookmark } from '@mui/icons-material';
import BookMark from './Pages/BookMark';

export default function Main() {
    var filters_=["fire","water","normal","bug","grass"];
    var [on,seton]=useState("on");
    console.log(on);
    var item_checked = {
      fire: false,
      water: false,
      normal: false,
      bug: false,
      grass:false,
    };
    var [most,setmost]=useState([]);
    console.log(most);
    var [checked,setchecked]=useState(item_checked);
    console.log(checked);
    var [fil,setfil]=useState(filters_);
    const state=useSelector(state=>state);
    var [value,setvalue]=useState("");
    // console.log(value);
    var [l_1,setll_1] = useState([]);
    var [offset,setoffset]=useState(0);
    var [URL, SET_URL] = useState("https://pokeapi.co/api/v2/pokemon");
    var [arr_, setarr] = useState([]);
    console.log(arr_);
    async function caller() {
      try{
        var data;
      if(state.type===1){
        data = await fetch(`${URL}?offset=0&limit=${offset + 11}`);
      }
      else{
        data = await fetch(`${URL}?offset=0&limit=500`);

      }
      var main = await data.json();
      var c = main.results;
      var { next } = main;
      console.log(next);
      // Object.keys()
      var me = Object.keys(checked).filter((e) => {
        // console.log(e);
        if (checked[e] === true) {
          return e;
        }
      });
      // console.log(me);
      if (me.length!==0){
        seton("off");
      }
      else{
        seton("on");
      }
      c.forEach((e) => {

        fetch(e.url)
          .then((d) => d.json())
          .then((d) => {
            console.log(
              d.stats[0].base_stat,
              d.stats[1].base_stat,
              d.stats[2].base_stat,
              d.stats[5].base_stat
            );
            // console.log(d.types[0].type.name);
            // console.log(d.weight);
            var compare = d.types[0].type.name;
            if (!me.length){
                var nm = e.name;
                var front_img = d.sprites.other.home.front_default;

                var obj = {
                  name: nm,
                  front_img: front_img,
                  weight: d.weight,
                  type: compare,
                  hp: d.stats[0].base_stat,
                  attack: d.stats[1].base_stat,
                  defence: d.stats[2].base_stat,
                  speed: d.stats[5].base_stat,
                };

                var new_arr = [...arr_];
                
                if (!l_1.includes(obj.name))
                {
                  l_1.push(obj.name);
                  setll_1(l_1);
                  arr_.push(obj);
                  // new_arr.push(obj);
                  setTimeout(() => {
                    setarr(new_arr);
                  }, 1000);
                }
                
            }
            else if (me.length){
              // me.includes()
              console.log(me,arr_);
              var moss=arr_.filter((e,i)=>{
                if (me.includes(e.type)){
                  return e;
                }
              })
              setmost(moss);
            }

          });
        });
      }
      catch(e){
        console.log("some error is occuring",e.message);
      }

    }
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        console.log("hello");
        var focused =
          document.documentElement.childNodes[2].childNodes[3].childNodes[0]
            .childNodes[0].childNodes[1].childNodes[1].childNodes[0];
        console.log(
          // document.documentElement.scrollHeight,
          // document.documentElement.scrollTop,
          window.innerHeight,
          focused.scrollHeight,
          focused.scrollTop
        );
        if (focused.scrollTop > parseInt(`${offset?offset/8:1}000`)) {
          setoffset(offset + 10);
        }
      })
      caller();
    }, [offset,checked,state]);
  return (
    <div className="main">
      <Header />
      {/* <div></div> */}
      <div
        style={{
          width: "97%",
          height: "84%",
          marginTop: "4%",
          display: "flex",
        }}
      >
        <div id="filters">
          {fil.map((e, i) => {
            return (
              <div key={i} id="fillsame">
                <h2 style={{ color: "white", textTransform: "capitalize" }}>
                  {e}
                </h2>
                <input
                  name={e}
                  type="checkbox"
                  id="fix"
                  onChange={(e) =>
                    setchecked({
                      ...checked,
                      [e.target.name]: e.target.checked,
                    })
                  }
                />
              </div>
            );
          })}
          <div id="fillsame">
            <input
              placeholder="Add another one"
              style={{
                width: "75%",
                height: "90%",
                borderRadius: "10px",
                border: "1px solid white",
                background: "rgba(0,0,0,.5)",
                color: "white",
                paddingLeft: "2%",
                fontSize: "20px",
              }}
              onChange={(e) => {
                setvalue(e.target.value);
              }}
            />
            <button
              style={{
                width: "18%",
                height: "90%",
                background: "red",
                color: "white",
                border: "1px solid white",
                borderRadius: "10px",
                fontSize: "24px",
              }}
              onClick={() => {
                console.log(value, fil);
                fil.push(value);
                console.log(value, fil);

                var new_ar = [...fil];
                setfil(new_ar);
              }}
            >
              {" "}
              +
            </button>
          </div>
        </div>
        {state.type === 1 ? (
          <Home arr_={on === "on" ? arr_ : most} />
        ) : state.type === 2 ? (
          <Search arr_={on === "on" ? arr_ : most} />
        ) : state.type === 3 ? (
          <BookMark arr_={on === "on" ? arr_ : most} />
        ) : (
          <BookMark />
        )}
      </div>
      {/* {state.type === 1 ? (
        <button
          onClick={() => {
            // alert("hello");
            setoffset(offset + 10);
          }}
          style={{
            width: "200px",
            height: "50px",
            marginTop: "1%",
            background: "rgba(255,255,255,.3)",
            border: "1px solid white",
            color: "black",
            fontSize: "20px",
          }}
        >
          Load More ...{" "}
        </button>
      ) : (
        ""
      )} */}
    </div>
  );
}
