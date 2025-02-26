"use client";
import Link from "next/link";

const data = [
  {
    topic: "Lecture1",
    name: "John Doe",
    position: "Speaker",
    price: "₹1/-",
    registration: "Open",
    description:
      "The Indian rupee (symbol: ₹; code: INR) is the official currency in the Republic of India. The rupee is subdivided into 100 paise. The issuance of the currency is controlled by the Reserve Bank of India.",
  },
  {
    topic: "Lecture2",
    name: "Jane Smith",
    position: "Mentor",
    price: "₹100/-",
    registration: "Open",
    description:
      "The Reserve Bank of India (RBI) manages currency issuance and monetary policies in India, ensuring economic stability and growth.",
  },
];

export default function Workshop() {
  return (
    <>
      <div
        className="min-h-screen bg-slate-500 py-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 0, 135, 0.57), rgba(255, 0, 135, 0.57)), url('./noisy-background.svg')",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 px-4">
          <div className="flex">
            <button className="w-[150px] md:w-[246px] h-[41px] rounded-xl border-black bg-gradient-to-b from-[#D9D9D9] to-[#D9D9D9] shadow-[6px_6px_0px_#060505] font-itim text-lg hover:scale-105 transition-transform duration-300">
              Lecture
            </button>
          </div>

          {/* Top Section with Rectangles */}
          <div className="relative w-full max-w-[1000px] h-[300px] md:h-[477px] border-black p-4 mx-auto">
            {/* Top-left rectangle */}
            <div className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[15%] w-[40%] md:w-[228px] h-[40%] md:h-[287px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md"></div>

            {/* Top-right text */}
            <div className="absolute top-[5%] right-[5%] md:top-[5%] md:right-[5%] w-[50%] md:w-[35%] text-right text-black text-sm md:text-base font-itim">
              <p className="text-lg md:text-3xl pl-4 md:pl-8">
                Equip yourself with the skills to shape the future
              </p>
            </div>

            {/* Center rectangle */}
            <div className="absolute top-1/2 left-1/2 w-[40%] md:w-[228px] h-[40%] md:h-[287px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Bottom-left text */}
            <div className="absolute bottom-[5%] left-[5%] md:bottom-[2%] md:left-[5%] w-[50%] md:w-[35%] text-left text-black text-sm md:text-base">
              <p className="text-lg md:text-3xl pr-4 md:pr-8">
                Equip yourself with the skills to shape the future
              </p>
            </div>

            {/* Bottom-right rectangle */}
            <div className="absolute bottom-[10%] right-[5%] md:bottom-[15%] md:right-[15%] w-[40%] md:w-[228px] h-[40%] md:h-[287px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md"></div>
          </div>

          <hr className="w-[80%] md:w-[45%] h-1 mx-auto my-4 bg-white border-0 rounded-sm md:my-10"></hr>

          {/* Workshop Cards */}
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[1178px] border-black p-4 mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <div className="flex flex-col items-start gap-4">
                  <p className="text-2xl md:text-4xl">{item.topic}</p>
                  <div className="w-full md:w-[282px] h-[200px] md:h-[322px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md"></div>
                </div>

                <div className="flex flex-col flex-grow pt-4 md:pt-12">
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-[80px] md:w-[130px] h-[80px] md:h-[130px] bg-[#D9D9D9] border-4 border-black rounded-lg shadow-md"></div>

                    <div className="flex flex-row w-full justify-between px-2 md:px-4">
                      <div className="flex flex-col">
                        <span className="text-lg md:text-2xl">{item.name}</span>
                        <span className="text-lg md:text-2xl">{item.position}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-lg md:text-2xl">
                          {item.registration} - Fee {item.price}
                        </span>
                        <button className="w-[110px] h-[40px] border-2 border-black rounded-lg bg-green-300 text-lg md:text-xl">
                          <Link href={`/reg-form?topic=${encodeURIComponent(item.topic)}`}>Register</Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <hr className="w-full h-[2px] my-4 bg-black border-0"></hr>

                  <div>
                    <p className="font-[500] text-base md:text-xl w-full md:w-[65%]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="w-[80%] md:w-[45%] h-1 mx-auto my-4 bg-white border-0 rounded-sm md:my-10"></hr>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}