import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {First,Second,Third,Fourth} from "../comp/Redux/Action";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  var lis_=["Home","Search","Saved"];
    var [on, setoff] = useState(0);

  var state=useSelector(state=>state.type);
  console.log(state);
  var [value,setvalue]=useState({
    val:""
  })
  console.log(value);
  var dispatch=useDispatch();
  function evenlister(e){
    console.log(e.target.innerText);
    var value = e.target.innerText;
    if (value==="Home"){
      dispatch(First);
    }
    else if (value==="Search"){
      dispatch(Second);
    }
    else{
      dispatch(Third);
    }
  }
  return (
    <div id="header">
      <div id="logo">PokiSearch</div>
      <input
        disabled={state !== 2 ? true : false}
        placeholder={state !== 2 ? "  Disabled" : "Search your Poki..."}
        onChange={(e) => {
          // console.log(e.target.value);
          Fourth.value = e.target.value;
          dispatch(Fourth);
          // setvalue({
          //   ...value,val:e.target.value
          // })
        }}
        id="inp"
      />
      <div id="slide">
        {lis_.map((e, i) => {
          return (
            <li onClick={evenlister} key={i} id="same">
              {" "}
              {e}
            </li>
          );
        })}
      </div>
      <div onClick={e=>{
        if(on===0){
          setoff(1);
        }
        else{
          setoff(0);
        }
      }} id='menuicon'><MenuIcon/></div>
      {
        on?
        <div id='abs'>{
          lis_.map((e, i) => {
          return (
            <li onClick={evenlister} key={i} id="abssame">
              {" "}
              {e}
            </li>
          );
        })}
        </div>:""
        }
    </div>
  );
}
