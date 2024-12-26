import React from "react";
import lights from "../assets/light.png";
import hand from "../assets/hand.png";
import hand1 from "../assets/hand1.png";
import { LuSquareArrowUpRight } from "react-icons/lu";
import { PiGearSixLight } from "react-icons/pi";
import { swing } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { FaRegLightbulb } from "react-icons/fa";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import a7 from "../assets/a7.png";
import { Tilt } from "react-tilt";

const styles = StyleSheet.create({
  swing: {
    animationName: swing,
    animationDuration: "20s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  },
});

function ImgBlock({ source }) {
  return (
    <Tilt className="w-[200px] h-[200px]" >
      <img
        src={source}
        className=" rotate-left hover:drop-shadow-[0_0_10px_rgba(80,80,225,1)] transition-all ease-in-out "
      />
    </Tilt>
  );
}

function ServiceSection() {
  return (
    <div className="w-screen min-h-screen bg-[#00031D]">
      <div className=" absolute flex flex-row justify-between w-full h-screen mt-64">
        <img src={lights} className="w-1/3 rotate-180" />
        <img src={lights} className="w-1/3" />
      </div>

      <div className="relative flex flex-col min-h-screen w-screen z-10">
        <div className="flex flex-row justify-between items-center">
          {/* content */}
          <div className="w-1/2 pl-12 flex flex-col items-center text-white">
            <div>
              <div className="flex gap-2 items-center text-xs">
                <div className="h-[1px] w-[40px] bg-white"></div>
                <p>Services</p>
              </div>
              <h1 className="text-4xl font-semibold">
                What We Cook / Services
              </h1>
              <a className="flex items-center gap-2 cursor-pointer mt-2">
                <div className="rounded-full border-2 p-1 m-1 flex items-center text-2xl">
                  <PiGearSixLight />
                </div>
                <div className="flex flex-col">
                  Know more about what we{" "}
                  <div className="flex items-center gap-2">
                    {" "}
                    build and our services <LuSquareArrowUpRight />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* immage  */}
          <img
            src={hand}
            className={`${css(
              styles.swing
            )} w-1/2 select-none relative left-20`}
          />
        </div>

        {/* main sharingan contents */}
        <div className="w-full h-full flex flex-row justify-center rotate-right">
          <div className="flex flex-col items-center justify-center gap-5">
            <ImgBlock source={a1} />
            <ImgBlock source={a2} />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <ImgBlock source={a3} />
            <ImgBlock source={a4} />
            <ImgBlock source={a5} />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <ImgBlock source={a6} />
            <ImgBlock source={a7} />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          {/* immage  */}
          <img
            src={hand1}
            className={`${css(
              styles.swing
            )} w-1/2 select-none relative right-20`}
          />

          {/* content */}
          <div className="w-1/2 pr-12 flex flex-col items-center text-white">
            <div>
              <h1 className="text-4xl font-semibold">Domains We Handle</h1>
              <a className="flex items-center cursor-pointer gap-2 mt-2">
                <div className="rounded-full border-2 p-1 m-1 flex items-center text-2xl">
                  <FaRegLightbulb />
                </div>
                <div className="flex flex-col text-xs">
                  ML/DL, Gen-AI , Web Development, App Development, Data
                  Analytics, Testers, UI/UX, Digital Media.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
