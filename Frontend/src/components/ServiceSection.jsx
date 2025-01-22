import React from "react";
import lights from "../assets/light.webp";
import hand from "../assets/hand.webp";
import hand1 from "../assets/hand1.webp";
import { LuSquareArrowUpRight } from "react-icons/lu";
import { PiGearSixLight } from "react-icons/pi";
import { swing } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { FaRegLightbulb } from "react-icons/fa";
import a1 from "../assets/a1.webp";
import a2 from "../assets/a2.webp";
import a3 from "../assets/a3.webp";
import a4 from "../assets/a4.webp";
import a5 from "../assets/a5.webp";
import a6 from "../assets/a6.webp";
import a7 from "../assets/a7.webp";
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
    <Tilt className="md:w-[200px] w-[110px] h-[110px] md:h-[200px] xl:w-[300px] xl:h-[300px]" >
      <img
        src={source}
        className=" rotate-left hover:drop-shadow-[0_0_10px_rgba(80,80,225,1)] transition-all ease-in-out "
      />
    </Tilt>
  );
}

function ServiceSection() {
  return (
    <div id="services" className="w-screen min-h-screen bg-[#00031D] overflow-hidden">
      <div className=" absolute flex flex-row justify-between w-full h-full mt-64">
        <img src={lights} className="w-1/3 rotate-180" />
        <img src={lights} className="w-1/3" />
      </div>

      <div className="relative flex flex-col min-h-full w-screen z-10">
        <div className="flex md:flex-row flex-col justify-between items-center">
          {/* content */}
          <div className="md:w-1/2 w-full pl-12 mt-16 md:mt-0 flex flex-col items-center text-white">
            <div>
              <div className="flex gap-2 items-center text-xs md:text-lg">
                <div className="h-[1px] w-[40px] bg-white"></div>
                <p>Services</p>
              </div>
              <h1 className="text-4xl font-semibold">
                What We Cook / Services
              </h1>
              <a className="flex items-center gap-2 cursor-pointer mt-2">
                <div className="rounded-full border-2 p-1 m-1 flex items-center text-2xl xl:text-3xl">
                  <PiGearSixLight />
                </div>
                <div className="flex flex-col xl:text-2xl">
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
            )} md:w-1/2 w-full select-none relative left-20 xl:top-40`}
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
            )}  md:w-1/2 w-full select-none relative right-20 xl:bottom-30`}
          />

          {/* content */}
          <div className="">
            <div className="w-full pr-12 md:pr-32 xl:pr-72 flex md:flex-row flex-col items-center text-white">
              <div>
                <h1 className="text-2xl xl:text-4xl font-semibold">Domains We Handle</h1>
                <a className="flex items-center cursor-pointer gap-2 mt-2">
                  <div className="rounded-full border-2 p-1 m-1 flex items-center text-2xl md:text-3xl">
                    <FaRegLightbulb />
                  </div>
                  <div className="flex flex-col text-xs md:text-md xl:text-xl">
                    ML/DL, Gen-AI , Web Development, App Development, Data
                    Analytics, Testers, UI/UX, Digital Media.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
