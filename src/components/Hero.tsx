import Info from "../components/Infor"
import girl from "../asset/girl.png";
import { GraduationCap, Star } from "lucide-react";
export default function Hero() {

    return (
        <div className="">
            <section
                className="w-full min-h-screen flex flex-col md:flex-row justify-between md:px-24 bg-gradient-to-l to-red-200 via-red-100 from-red-100">
                {/* Left Text Section */}
                <div className="flex flex-col gap-6 max-w-4xl md:py-20 justify-center md:text-start text-center">
                    <h1 className="md:text-7xl text-4xl font-bold leading-22 text-black ">
                        Your Resume <br />
                        <span className="relative text-red-600 font-bold inline-block">
                            Deserves A Yes
                            {/* <!-- Top underline: short + slight curve --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 30"
                                className="absolute -bottom-2 -left-20 w-full h-6">
                                <path d="M2 20 Q 125 10, 448 20"
                                    className="stroke-red-600" strokeWidth="5" fill="none" />
                            </svg>

                            {/* <!-- Bottom underline: longer + sits lower --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 40"
                                className="absolute -bottom-5 -left-0 w-full h-6">
                                <path d="M2 25 Q 150 10, 798 25"
                                    className="stroke-red-600" strokeWidth="5" fill="none" />
                            </svg>
                        </span>
                        {" "}
                        Let’s<br></br> Make It Happen
                    </h1>
                    <p className="text-gray-800 leading-relaxed font-light text-base max-w-xl">
                        If your resume isn’t getting responses, it’s time for an upgrade.
                        Get an ATS-optimized resume crafted by HR experts to help you land more
                        interviews. Our resumes are designed to get your foot in the door and
                        place your name at the top of the shortlist.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mt-2 items-center">
                        <button className="px-6 py-3 rounded-full  bg-white text-red-600  hover:bg-red-100 transition shadow-[4px_4px_15px_rgba(241,113,113,0.6)]">
                            RESUME PACKAGES
                        </button>
                        <button className="px-6 py-3 rounded-full bg-red-600 text-white  hover:bg-red-700 transition shadow-[4px_4px_15px_rgba(241,113,113,0.6)]">
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative  md:mt-0">
                    <img
                        src={girl}
                        alt="resume success"
                        className="w-[350px] md:w-[600px] rounded-full z-100"
                    />

                    {/* Rating Badge */}
                    <div className="absolute md:bottom-76 max-w-xl md:-left-10 bottom-40 left-5 bg-white md:px-6 md:py-8 p-2 rounded-xl shadow-lg flex items-center gap-3">
                        <span className="text-green-500 text-3xl md:text-6xl font-bold">4.9</span>
                        <div>
                            <div className="flex space-x-1">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Star key={index} className="text-yellow-400 fill-yellow-400 md:w-6 md:h-6 w-4 h-4" />
                                ))}
                            </div>
                            <p className="text-gray-700 font-medium text-md md:text-xl">Instructor Rating</p></div>
                    </div>
                    {/* Resume Count */}
                    <div className="absolute md:bottom-30 md:right-0 right-10 bottom-10 p-3 bg-white md:px-4 md:py-6  rounded-xl shadow-lg  items-center flex gap-3">
                        <GraduationCap className="fill-red-400 stroke-red-400 w-15 h-15 md:text-6xl md:w-20 md:h-20" />
                        <div>
                            <h3 className=" font-bold text-2xl md:text-5xl">260+</h3>
                            <p className="text-gray-700 text-md md:px-3 text-start">Online Resume<br></br> Created</p></div>
                    </div>
                </div>
            </section >

            <div className="flex flex-col">
                <Info />
            </div>

        </div >)
}