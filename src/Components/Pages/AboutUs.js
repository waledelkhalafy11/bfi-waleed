import imgbox from "../../Assets/imgs/about-us/11.png";
import box9 from "../../Assets/imgs/about-us/box9.jpg";
import Footer from "../Layouts/Footer";
import { Link } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";

const AboutUs = () => {
    const prag1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `

    console.log(process.env.REACT_APP_TEST);

    document.getElementById('bfiTitle').innerHTML = 'BFI | About Us' ;
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    return (
        // ================> Cards photo

        <div className=" bg-[#f2f2f2] mt-[80px]">
            <div className="row    w-full  p-[20px]  ">

                {/* left side */}
                <div className="col-lg-6 col-md-12 col-sm-12 md:my-auto  ">
                    <div className=" w-[100%]     ">
                        <img className="mx-auto  " src={imgbox} alt="" />
                    </div>
                </div>







                {/* right side */}

                <div className=" col-lg-6 col-md-12 col-sm-12 mx-auto sm:my-auto  md:my-auto " >
                    <div className=" w-full  md:w-[80%] mx-auto"  >
                        <h1 className="text-[300%] sm:text-[200%] md:text-[400%] font-semibold leading-[86px] text-[#45b6ca] text-justify">BFI Company</h1>

                        <p className="mt-[25px] not-italic font-medium text-[18px] leading-[135.2%px] text-justify  text-xl ">{prag1}</p>
                        <div className="mt-[38px] text-left">

                            <Link to="/contact-us" className="bg-[#45b6ca] py-[15px]  px-[25px] rounded-[64px] text-white font-bold w-[164px] h-[57px]   text-center hover:opacity-80">Contact Us</Link>

                        </div>

                        <div className="mt-[50px]">

                            <div className="line mb-5 my-0 mx-auto  w-[100%] h-[2px] bg-[#45b6ca] "></div>

                        </div>
                        <div className="">
                            <p className=" text-justify font-medium not-italic text-[18px] mt-[0px]">Have any Questions? <br /> Contact Us!</p>
                            <h1 className="text-justify  h-[46px] ">+201111101011</h1>
                        </div>
                    </div>
                </div>
            </div>






            {/*---------------------------------- down card-------------------------------------------------------------- */}




            <div className=" down    ">

                <div className="h-[300px]  w-full bg-[#f2f2f2]   " ></div>


                <div className="  w-full bg-[#45b6ca]  " >

                    <div className="bg-[#ffffff]  p-[30px] w-[80%] relative md:bottom-[200px] bottom-[100px] mx-auto rounded-md row  ">
                        <div className="col-lg-7  ">
                            <div>
                                <div>
                                    <h1 className="text-left font-semibold text-[#45b6ca] text-[200%]">About Us</h1>
                                </div>
                                <div className="text-left">
                                    <p className="lg:w-[80%] w-full  text-justify ">

                                        <ReactReadMoreReadLess
                                            charLimit={350}
                                            readMoreText={<button className="text-[#45b6ca]    font-bold  hover:opacity-80">Read more</button>}
                                            readLessText={<button className="text-[#45b6ca]    font-bold  hover:opacity-80">Read less</button>}
                                            readMoreClassName="read-more-less--more"
                                            readLessClassName="read-more-less--less"
                                        >
                                            {prag1}
                                        </ReactReadMoreReadLess>




                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5  my-auto">
                            <div className="lg:w-[85%] w-full   rounded-md overflow-hidden mx-auto">
                                {/* <img src={box9} className="object-cover rounded-md h-[300px] w-full" alt="" /> */}
                                {/* <iframe  className="object-cover rounded-md h-[300px] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13816.546198328997!2d31.43418945!3d30.03294015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cdcbdb3ffd5%3A0x8ab89c3070c8d026!2sEdulinx%20Education%20Ltd.!5e0!3m2!1sen!2seg!4v1653831483637!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            <iframe  className="object-cover rounded-md h-[300px] w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13816.546198328997!2d31.43418945!3d30.03294015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cdcbdb3ffd5%3A0x8ab89c3070c8d026!2sEdulinx%20Education%20Ltd.!5e0!3m2!1sen!2seg!4v1653831483637!5m2!1sen!2seg" ></iframe>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
















            <div className=" " >
                <Footer />
            </div>

        </div>
    )
};
export default AboutUs;