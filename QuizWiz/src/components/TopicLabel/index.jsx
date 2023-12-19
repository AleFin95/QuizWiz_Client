import React from 'react'
import { Link } from "react-router-dom";


const TopicLabel = ({ id, name, onClick, selected }) => {
    
      return (
        <div onClick={() => onClick(id)} style={{ cursor: 'pointer', color: selected ? 'red' : 'black' }}>
        <h3>{name}</h3>
      </div>
    );
  };
export default TopicLabel