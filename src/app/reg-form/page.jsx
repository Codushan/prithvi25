import React from "react";
import FormFile from "./form";

function page() {
  return (
    <div className="flex w-screen h-screen flex-col md:flex-row justify-around items-center">
      <div className="flex flex-col w-[80%] my-10 md:w-[40%] h-fit rounded-xl bg-[#D9D9D9]">
        <h1 className="flex bg-[#D9D9D9] rounded-t-xl drop-shadow-xl px-5 py-2 text-[30px] itim-regular text-[#464646] ">
          Guidelines
        </h1>
        <div className="flex flex-col p-5">
          <div className="flex flex-row justify-around">
            <div className="flex w-1/3 m-6 rounded-xl bg-cyan-200 items-center justify-center">
              Image
            </div>
            <div className="flex w-2/3 flex-col itim-regular me-5 my-5 p-5">
              <span className="text-[24px] pb-2">
                AutoCAD Design <br />
                Competition
              </span>
              <span className="text-[24px] border-t-2 pt-2">
                Contacts <br />
                <span className="flex justify-between">
                  <span>9876543210</span>
                  <span>9876543210</span>
                </span>
              </span>
            </div>
          </div>
          <p className="flex border-t-2 flex-col px-7 pt-5 itim-regular text-[20px] ">
            <span> 1. Life’s too short for bad vibes and slow WiFi.</span>
            <span>
              2. I told my suitcase we’re not going on vacation, now it’s
              emotional baggage.
            </span>
            <span>
              3. Some people graduate with honors, I am just honored to
              graduate.
            </span>
            <span>
              4. Parallel lines have so much in common—it’s a shame they’ll
              never meet.
            </span>
            <span>
              5. I used to play piano by ear, but now I use my hands. Why don’t
              skeletons fight each other? They don’t have the guts.
            </span>
            <span>
              6. I have a fear of speed bumps, but I’m slowly getting over it.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[80%] my-10 md:w-[50%] h-fit rounded-xl bg-[#D9D9D9] ">
        <h1 className="flex w-full bg-[#D9D9D9] rounded-t-xl drop-shadow-xl px-5 py-2 text-[30px] itim-regular text-[#464646] ">
          Registration Form
        </h1>
        <FormFile />
      </div>
    </div>
  );
}

export default page;
