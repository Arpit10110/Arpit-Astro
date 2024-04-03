import React,{useEffect} from "react";
import Spline from "@splinetool/react-spline";
import "../style/home.css";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
//social media
import FacebookImg from "../assets/facebook.png" 
import GithubImg from "../assets/github.png" 
import InstaImg from "../assets/instagram.png" 
import TwiterImg from "../assets/twitter.png" 
import LinkdinImg from "../assets/linkedin.png" 
import Snapchat from "../assets/snapchat.png" 
import { useState } from "react";
const HomePage = () => {
    const downloadresume=()=>{
        window.open("https://drive.google.com/file/d/1fVCd2zqFGBzYAeI-biyLdByTdt9VgoD_/view?usp=sharing");
    }
    useEffect(() => {
      document.title = "Arpit | Home";
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <>
      <div className="section1">
        <div className="intro"  data-aos="fade-up" data-aos-duration="2000">
          <div className="typingdiv">
            <TypeAnimation
            className="typingtext"
              sequence={["Hello World </>", 1000, "I am Arpit", 1000]}
              wrapper="span"
              speed={0}
              style={{
                fontSize: "5em",
                cursor: "default",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </div>
          <div className="content">
          Hey there! I'm Arpit, a digital astronaut exploring the web cosmos with a passion for desi hip-hop. When not coding, I'm diving into video games for inspiration and innovation🌟🚀
          </div>
          <button onClick={downloadresume}>Launch Resume 🚀</button>
        </div>
        <div className="spline-rocket" >
        {/* <Spline scene="https://prod.spline.design/dlu8xkp09w7IB-L1/scene.splinecode" /> */}
        {/* data-aos="fade-up" data-aos-duration="2000" */}
        <Spline scene="https://prod.spline.design/tdBWR4CBjgIncqxz/scene.splinecode" />
        </div>
      </div> 
      <div className="section2">
        <div className="socialmedia-box" data-aos="zoom-in-right" data-aos-duration="2500">
          <h3>🚀Social Media🛰️</h3>
          <div className="socialmedia">
          <div className="socialmedia-1">
            <a href='https://www.facebook.com/arpit.agrahari.5' > <img src={FacebookImg} alt="FacebookImg" /> Facebook</a>
            <a href='https://www.instagram.com/___arpit_._/'  ><img src={InstaImg} alt="InstaImg" /> Instagram</a>
            <a href='https://github.com/Arpit10110'  > <img src={GithubImg} alt="GithubImg" />Github</a>
          </div>
          <div className="socialmedia-2">
            <a href="https://www.snapchat.com/add/arpit237753?share_id=yyQ7v3PcffI&locale=en-GB" > <img src={Snapchat} alt="GithubImg" />Snapchat</a>
            <a href='https://www.linkedin.com/in/arpit-agrahari-54aa192a1/' ><img src={LinkdinImg} alt="LinkdinImg" /> Linkedin</a>
            <a href='https://x.com/ArpitAgrahari26?t=IyDaE6R8sNL10VQlozEYrQ&s=09'  ><img src={TwiterImg} alt="TwiterImg" /> Twitter</a>
          </div>
          </div>
        </div>
        <div className="modelastro">
        <div class="sketchfab-embed-wrapper"> <iframe title="Franz Viehböck's Sokol Space Suit" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="750" height="400" src="https://sketchfab.com/models/a2d679620a254660b12c7274de9bfc07/embed?autostart=1&annotations_visible=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"> </iframe> </div>
        </div>
      </div>
      <div className="section3">
      </div>
    </>
  );
};

export default HomePage;
