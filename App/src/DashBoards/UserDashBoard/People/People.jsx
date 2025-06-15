import React from 'react';
import './People.css';
import { BsFillHeartFill } from "react-icons/bs";
import { IoIosCloudUpload } from "react-icons/io";
import { BsEmojiAstonished } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import PData from './PData/PData';
const People = () => {
  const navigate = useNavigate()
  const handlerCelebration=()=>{
    alert("Hii boss welcome to see our celebrations")
    navigate('Celebration')
  }
  const handlerUpload=()=>{
    alert("Hey Dude can upload u details")
    navigate('Upload')
  }
  const handlerIntrest=()=>{
    navigate('ShownIntrest')
  }
   const handlerAstrology=()=>{
    alert('check ur jatakam')
    navigate('Astrology')
  }
  return (
    <div>
    <div className="people-container">
      <div className="button-group">
        <button onClick={handlerCelebration}>Celebrations < GiPartyPopper/></button>
        <button onClick={handlerUpload}>Upload_Details <IoIosCloudUpload/></button>
        <button onClick={handlerIntrest}>Shown_Interest <BsFillHeartFill/></button>
        <button onClick={handlerAstrology}>Check_Astrology <BsEmojiAstonished/></button>
      </div>
    </div>
    <PData/>
    </div>
  );
};

export default People;
