import React, { useState } from "react";
import "../css/tabpane.css";
import { Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const Tabpane = ({join, onJoinChange}) => {

  return (
    <div className="tab">
      <div className="tabnav">
        <div style={{display:"flex",alignItems:"center",borderBottom:"2px solid #000000",height:"100%"}}>
          <span >All Posts(32)</span>
        </div>
        <span>Article</span>
        <span>Event</span>
        <span>Education</span>
        <span>Job</span>
      </div>
      <div className="post">
        <p>Posts(368)</p>
      </div>
      <Button className="filter">
        Filter: All <CaretDownOutlined />
      </Button>
      <div className="tabbuttons">
        <div style={{ backgroundColor: "#EDEEF0",display:"flex",alignItems:"center",padding:"0.5rem 0.8rem",borderRadius:"5px" }}>
          <span style={{marginRight:"0.8rem"}}>Write a Post</span>
          <img src="https://img.icons8.com/material-rounded/15/000000/sort-down.png" />
        </div>
        {
            join ? <div style={{ backgroundColor: "#2F6CE5",display:"flex",alignItems:"center",padding:"0.5rem 0.73rem",borderRadius:"5px",cursor:"pointer" }}>
            <img src="./assets/adduser.png" alt="adduser"/>
            <span style={{color:"#fff",marginLeft:"0.5rem"}} onClick={()=>{onJoinChange(!join)}} >Join Group</span>
          </div> : <div style={{ display:"flex",alignItems:"center",padding:"0.4rem",border:"0.8px solid #989898",borderRadius:"5px",cursor:"pointer" }}>
            <img style={{width:"1.25rem"}} src="./assets/leave.png" alt="leave"/>
            <span style={{color:"#6A6A6B",marginLeft:"0.5rem"}} onClick={()=>{onJoinChange(!join)}} >Leave Group</span>
          </div>
        }
        
      </div>
    </div>
  );
};

export default Tabpane;
