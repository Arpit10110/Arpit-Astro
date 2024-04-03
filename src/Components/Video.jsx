import React,{useState} from 'react'
import video from "../assets/video.mp4"
import "../style/video.css"
import {useNavigate} from "react-router-dom"
const Video = () => {
    const Navigate=useNavigate()
    let [Mute,SetMute]=useState(false);
    const Videodis=(ans)=>{
        SetMute(ans)
        let ansdiv = document.querySelector(".ans");
        let videodiv = document.querySelector(".video");
        let videoplayer = document.querySelector(".videoplayer");
        ansdiv.style="display:none;";
        videodiv.style="display:flex;";
        videoplayer.muted=ans;
        videoplayer.play();
        videoplayer.addEventListener("ended",function(){
            Navigate("/home")
           })
    }
  return (
    <>
    <div className="ans">
        <div className="ansbox">
            <h3>Do you want to allow sound ?</h3>
            <div className="ans-btn">
                <button onClick={()=>{Videodis(false)}}>Yes</button>
                <button onClick={()=>{Videodis(true)}}>No</button>
            </div>
        </div>
    </div>
    <div className="video">
        <video className='videoplayer' src={video} />
    </div>
    </>
  )
}

export default Video