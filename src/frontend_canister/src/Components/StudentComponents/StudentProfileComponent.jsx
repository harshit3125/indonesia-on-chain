import React, { useState,useEffect } from "react";
import User from '../../../assets/Vectors/User12.png'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const StudentProfileComponent = () => {


    const selectActor = useSelector((currState) => currState.actors.actor);

    useEffect(() => {
        // dispatch({type:'CHECK_USER_PRESENT'});
        const fetchData = async () => {
            console.log("selectActor harshit", selectActor)
            try {
                // const Actor = await select(selectActor);
                // console.log("Actor Courece",Actor);
                const user = await selectActor.get_user_info();
                console.log("selectActor", selectActor)
                console.log("user", user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
    return (
        <>
            <div className='md:flex md:justify-center w-full gap-6 -z-10 '>

                <div className='items-start block md:hidden'>
                    <h1 className='font-poppins font-bold text-2xl mb-[24px] leading-10 text-black'>Profile</h1>
                </div>
                <div className='bg-white rounded-xl shadow-lg p-10 md:w-1/2  w-full md:ml-12 relative'>
                    <div className="flex flex-col justify-start">
                        <div className='flex  md:flex-col   lg:flex-row'>
                            <img
                                className="md:w-24 md:h-24 w-16 h-16 rounded-full border-2 border-purple-500"
                                src={User}
                                alt="Profile"
                            />
                            <div className='ml-4 sm:my-auto mt-2 md:mt-2 '>
                                <div className="font-[400] text-sm text-[#707070] font-poppins flex items-center gap-2">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.11098 9.67599C2.22675 10.2025 -0.0916471 11.2776 1.32041 12.6229C2.01019 13.28 2.77843 13.75 3.74429 13.75H9.25571C10.2216 13.75 10.9898 13.28 11.6796 12.6229C13.0916 11.2776 10.7732 10.2025 9.88902 9.67599C7.81551 8.44134 5.18449 8.44134 3.11098 9.67599Z" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.3125 4.0625C9.3125 5.6158 8.0533 6.875 6.5 6.875C4.9467 6.875 3.6875 5.6158 3.6875 4.0625C3.6875 2.5092 4.9467 1.25 6.5 1.25C8.0533 1.25 9.3125 2.5092 9.3125 4.0625Z" stroke="#707070" />
                                    </svg>

                                    Jhon
                                </div>
                                <div className="font-[400] text-sm text-[#707070] font-poppins flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3997 9.59269L10.0253 8.08049C9.87246 8.01498 9.70564 7.98864 9.54 8.00386C9.37436 8.01908 9.21514 8.07537 9.07674 8.16764C9.0627 8.17665 9.04933 8.18668 9.03674 8.19764L7.27311 9.69769C7.25481 9.70767 7.23444 9.71325 7.21361 9.714C7.19278 9.71474 7.17207 9.71063 7.15311 9.70198C6.0195 9.15482 4.84517 7.98763 4.29587 6.86973C4.28672 6.85105 4.28196 6.83053 4.28196 6.80973C4.28196 6.78893 4.28672 6.76841 4.29587 6.74973L5.80092 4.96395C5.81172 4.95074 5.82173 4.9369 5.83092 4.92252C5.92191 4.78359 5.97688 4.62418 5.99084 4.45869C6.00481 4.29321 5.97734 4.12684 5.91092 3.97463L4.40944 0.605934C4.32417 0.407076 4.17671 0.241236 3.98919 0.133306C3.80166 0.0253749 3.58419 -0.0188247 3.36941 0.00734026C2.43597 0.130057 1.57914 0.58846 0.959057 1.29689C0.338971 2.00532 -0.00194841 2.91529 8.37698e-06 3.85677C8.37698e-06 9.44983 4.55016 14 10.1432 14C11.0846 14.0018 11.9945 13.6608 12.7029 13.0408C13.4113 12.4207 13.8698 11.564 13.9926 10.6306C14.0187 10.4168 13.9751 10.2003 13.8683 10.0133C13.7615 9.82631 13.5972 9.67878 13.3997 9.59269ZM10.1432 13.1428C5.02303 13.1428 0.85718 8.97695 0.85718 3.85677C0.854792 3.12383 1.11933 2.4151 1.60138 1.86299C2.08343 1.31087 2.75 0.953152 3.47655 0.856657H3.49298C3.52177 0.857194 3.54972 0.866416 3.57317 0.883114C3.59663 0.899812 3.61449 0.923207 3.62442 0.950232L5.13161 4.31535C5.14021 4.33406 5.14466 4.35441 5.14466 4.375C5.14466 4.39559 5.14021 4.41594 5.13161 4.43464L3.6237 6.22471C3.61245 6.23749 3.60218 6.2511 3.59299 6.26543C3.49863 6.40947 3.44307 6.57544 3.43168 6.74726C3.42029 6.91909 3.45346 7.09094 3.52798 7.24618C4.16158 8.54337 5.46876 9.84056 6.78024 10.4741C6.93638 10.5483 7.10907 10.5806 7.28146 10.5681C7.45384 10.5556 7.62004 10.4986 7.76384 10.4027C7.77741 10.3934 7.79098 10.3834 7.80384 10.3727L9.56676 8.87266C9.58417 8.86331 9.6034 8.85783 9.62312 8.85659C9.64285 8.85536 9.66261 8.85841 9.68105 8.86552L13.0562 10.3777C13.0837 10.3895 13.1069 10.4096 13.1224 10.4352C13.1379 10.4608 13.145 10.4907 13.1426 10.5206C13.0466 11.2475 12.6892 11.9145 12.1372 12.3971C11.5852 12.8797 10.8764 13.1448 10.1432 13.1428Z" fill="#707070" />
                                    </svg>
                                    9876543210
                                </div>
                                <div className="font-[400] text-sm text-[#707070] font-poppins flex items-center gap-2 ">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.541389 0.537841L0.541534 -0.000261104C0.398687 -0.000191855 0.261676 0.0565673 0.160641 0.15753C0.0596059 0.258493 0.00282355 0.395389 0.00278524 0.538103L0.541389 0.537841ZM13.4679 0.531575L14.0065 0.531314C14.0065 0.3886 13.9498 0.251759 13.8488 0.150894C13.7479 0.0500294 13.6109 -0.00659686 13.468 -0.00652761L13.4679 0.531575ZM0.541245 1.07594L13.4677 1.06968L13.468 -0.00652761L0.541534 -0.000261104L0.541245 1.07594ZM12.9293 0.531836L12.927 9.14148L14.0042 9.14095L14.0065 0.531314L12.9293 0.531836ZM12.0291 10.0387L1.97512 10.0436L1.97483 11.1198L12.0288 11.115L12.0291 10.0387ZM1.07768 9.14722L1.07999 0.53758L0.00278524 0.538103L0.000474097 9.14774L1.07768 9.14722ZM1.97512 10.0436C1.4796 10.0439 1.07755 9.64228 1.07768 9.14722L0.000474097 9.14774C0.000333629 9.67103 0.208266 10.1728 0.578529 10.5426C0.948792 10.9125 1.45106 11.1201 1.97483 11.1198L1.97512 10.0436ZM12.927 9.14148C12.9268 9.63653 12.5246 10.0385 12.0291 10.0387L12.0288 11.115C12.5525 11.1147 13.0549 10.9066 13.4254 10.5364C13.7958 10.1662 14.004 9.66424 14.0042 9.14095L12.927 9.14148Z" fill="#707070" />
                                        <path d="M0.541504 0.537842L7.00214 6.99037L13.4662 0.53158" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    jhondeo998@gmail.com
                                </div>
                            </div>
                            <div className='absolute right-8'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z" stroke="#2A353D" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M13 4L20 11" stroke="#2A353D" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M14 22L22 22" stroke="#2A353D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                        </div>
                        <div className='flex gap-4 mt-4 items-center'>
                            <span className='font-poppins font-[600] text-xl text-black'>John Deo</span>
                            <span className='bg-[#EFF1FF] rounded-full font-poppins font-[500] text-sm text-[#6478FF] text-center py-1 px-3 '> Student</span>
                        </div>


                    </div>

                    <div className="mt-6">
                        <p className="font-[400] font-poppins text-black text-base leading-6">
                            Hey, I'm a product designer specialized in user interface designs (Web & Mobile) with 10 years of experience, Last year I have been ranked as a top-rated designer on Upwork working for over +3,750 hours with high clients satisfaction, on-time delivery and top quality output
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col justify-start">
                        <h3 className="text-xl font-[600] text-black font-poppins">Education</h3>



                        <div className='mt-4 mb-4 space-y-4'>
                            <div className='flex items-center  gap-2'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_110_2577)">
                                        <path d="M14 15.75C14.9665 15.75 15.75 14.9665 15.75 14C15.75 13.0335 14.9665 12.25 14 12.25C13.0335 12.25 12.25 13.0335 12.25 14C12.25 14.9665 13.0335 15.75 14 15.75Z" fill="black" />
                                        <path d="M15.3125 21.875H12.6875V27.125H15.3125V21.875Z" fill="black" />
                                        <path d="M14.875 6.5625V6.125H19.25C19.4821 6.125 19.7046 6.03281 19.8687 5.86872C20.0328 5.70462 20.125 5.48206 20.125 5.25V1.75C20.125 1.51794 20.0328 1.29538 19.8687 1.13128C19.7046 0.967187 19.4821 0.875 19.25 0.875H14C13.7679 0.875 13.5454 0.967187 13.3813 1.13128C13.2172 1.29538 13.125 1.51794 13.125 1.75V6.5625L6.475 11.55C6.36633 11.6315 6.27813 11.7372 6.21738 11.8587C6.15663 11.9802 6.125 12.1142 6.125 12.25V26.25C6.125 26.4821 6.21719 26.7046 6.38128 26.8687C6.54538 27.0328 6.76794 27.125 7 27.125H10.9375V21C10.9375 20.7679 11.0297 20.5454 11.1938 20.3813C11.3579 20.2172 11.5804 20.125 11.8125 20.125H16.1875C16.4196 20.125 16.6421 20.2172 16.8062 20.3813C16.9703 20.5454 17.0625 20.7679 17.0625 21V27.125H21C21.2321 27.125 21.4546 27.0328 21.6187 26.8687C21.7828 26.7046 21.875 26.4821 21.875 26.25V12.25C21.875 12.1142 21.8434 11.9802 21.7826 11.8587C21.7219 11.7372 21.6337 11.6315 21.525 11.55L14.875 6.5625ZM14 17.5C13.3078 17.5 12.6311 17.2947 12.0555 16.9101C11.4799 16.5256 11.0313 15.9789 10.7664 15.3394C10.5015 14.6999 10.4322 13.9961 10.5673 13.3172C10.7023 12.6383 11.0356 12.0146 11.5251 11.5251C12.0146 11.0356 12.6383 10.7023 13.3172 10.5673C13.9961 10.4322 14.6999 10.5015 15.3394 10.7664C15.9789 11.0313 16.5256 11.4799 16.9101 12.0555C17.2947 12.6311 17.5 13.3078 17.5 14C17.5 14.9283 17.1313 15.8185 16.4749 16.4749C15.8185 17.1313 14.9283 17.5 14 17.5ZM0.875 15.75V26.25C0.875 26.4821 0.967187 26.7046 1.13128 26.8687C1.29538 27.0328 1.51794 27.125 1.75 27.125H4.375V14.875H1.75C1.51794 14.875 1.29538 14.9672 1.13128 15.1313C0.967187 15.2954 0.875 15.5179 0.875 15.75ZM26.25 14.875H23.625V27.125H26.25C26.4821 27.125 26.7046 27.0328 26.8687 26.8687C27.0328 26.7046 27.125 26.4821 27.125 26.25V15.75C27.125 15.5179 27.0328 15.2954 26.8687 15.1313C26.7046 14.9672 26.4821 14.875 26.25 14.875Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_110_2577">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="font-[400] font-poppins text-sm">University Name</div>
                            </div>
                            <div className='flex items-center  gap-2'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 9.625C10.0888 9.625 6.125 10.8237 6.125 13.125V16.8962C7.9625 15.5225 10.99 14.875 14 14.875C17.01 14.875 20.0375 15.5225 21.875 16.8962V13.125C21.875 10.8237 17.9113 9.625 14 9.625Z" fill="black" />
                                    <path d="M14 23.625C18.3492 23.625 21.875 22.058 21.875 20.125C21.875 18.192 18.3492 16.625 14 16.625C9.65076 16.625 6.125 18.192 6.125 20.125C6.125 22.058 9.65076 23.625 14 23.625Z" fill="black" />
                                    <path d="M27.1251 11.1299C27.1289 11.0804 27.1289 11.0307 27.1251 10.9812L27.0376 10.8324C27.0124 10.7861 26.9831 10.7422 26.9501 10.7012C26.9066 10.6558 26.8564 10.6175 26.8013 10.5874C26.7701 10.5564 26.7348 10.5299 26.6963 10.5087L14.4463 4.48867C14.3265 4.42994 14.1948 4.39941 14.0613 4.39941C13.9278 4.39941 13.7961 4.42994 13.6763 4.48867L1.36505 10.4999C1.15609 10.6005 0.995583 10.7799 0.918801 10.9987C0.849921 11.221 0.865499 11.4609 0.962551 11.6724L4.37505 18.5762V13.1249C4.37505 9.50242 9.20505 7.87492 14.0001 7.87492C18.7951 7.87492 23.6251 9.50242 23.6251 13.1249V18.5762L25.3751 15.0237V22.7499C25.3751 22.982 25.4672 23.2045 25.6313 23.3686C25.7954 23.5327 26.018 23.6249 26.2501 23.6249C26.4821 23.6249 26.7047 23.5327 26.8688 23.3686C27.0329 23.2045 27.1251 22.982 27.1251 22.7499V11.2699C27.1292 11.2233 27.1292 11.1765 27.1251 11.1299Z" fill="black" />
                                </svg>

                                <div className="font-[400] font-poppins text-sm">Major</div>
                            </div>
                            <div className='flex items-center  gap-2'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 19.4512V26.2499C7.00012 26.3943 7.03598 26.5365 7.10439 26.6637C7.1728 26.7909 7.27163 26.8992 7.39206 26.9789C7.51249 27.0586 7.65078 27.1072 7.79459 27.1205C7.9384 27.1338 8.08326 27.1112 8.21625 27.0549L14 24.5787L19.7838 27.0549C19.8917 27.1009 20.0077 27.1247 20.125 27.1249C20.2965 27.1236 20.4639 27.0719 20.6062 26.9762C20.7266 26.8969 20.8255 26.7891 20.8942 26.6624C20.9629 26.5357 20.9993 26.394 21 26.2499V19.4512C19.0044 21.0209 16.539 21.8743 14 21.8743C11.461 21.8743 8.99565 21.0209 7 19.4512Z" fill="black" />
                                    <path d="M14 20.125C15.9036 20.125 17.7645 19.5605 19.3474 18.5029C20.9302 17.4453 22.1638 15.9421 22.8923 14.1833C23.6208 12.4246 23.8114 10.4893 23.4401 8.62226C23.0687 6.75519 22.152 5.04018 20.8059 3.6941C19.4598 2.34802 17.7448 1.43133 15.8777 1.05995C14.0107 0.688563 12.0754 0.87917 10.3167 1.60766C8.55793 2.33616 7.05471 3.56982 5.9971 5.15264C4.9395 6.73546 4.375 8.59636 4.375 10.5C4.375 13.0527 5.38906 15.5009 7.1941 17.3059C8.99914 19.1109 11.4473 20.125 14 20.125ZM14 4.375C15.2114 4.375 16.3956 4.73423 17.4029 5.40725C18.4101 6.08028 19.1952 7.03687 19.6588 8.15607C20.1223 9.27527 20.2436 10.5068 20.0073 11.6949C19.771 12.8831 19.1876 13.9744 18.331 14.831C17.4744 15.6876 16.3831 16.271 15.1949 16.5073C14.0068 16.7437 12.7753 16.6224 11.6561 16.1588C10.5369 15.6952 9.58027 14.9101 8.90725 13.9029C8.23422 12.8956 7.875 11.7114 7.875 10.5C7.875 8.87555 8.52031 7.31764 9.66897 6.16898C10.8176 5.02032 12.3755 4.375 14 4.375Z" fill="black" />
                                    <path d="M14 14.875C16.4162 14.875 18.375 12.9162 18.375 10.5C18.375 8.08375 16.4162 6.125 14 6.125C11.5838 6.125 9.625 8.08375 9.625 10.5C9.625 12.9162 11.5838 14.875 14 14.875Z" fill="black" />
                                </svg>

                                <div className="font-[400] font-poppins text-sm">CGPA</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col w-full lg:w-1/2 mr-10 justify-between space-y-3 mt-4 md:mt-0'>

                    <div className="bg-white w-full rounded-xl p-6 shadow-lg ">
                        <h3 className="text-xl font-poppins font-[600] mt-[1.2rem] ml-[2.25rem]">Interests</h3>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 mt-[2rem] ml-[1.5rem] pb-4">
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm ">Blockchain</div>
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm">Blockchain</div>
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm">Blockchain</div>
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm">Blockchain</div>
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm">Blockchain</div>
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm">Blockchain</div>
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm">Blockchain</div>
                            <div className="bg-[#EFF1FF] text-[#6478FF] rounded-full  px-4 py-1 font-poppins font-[500] text-sm">Blockchain</div>

                        </div>
                    </div>


                    <div className="bg-white w-full rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-poppins font-[600] mt-[1.2rem] ml-[2.25rem] mb-4">Social Media Accounts</h3>

                        <div className='space-y-4'>
                            <div className='border border-[#C1C9FF] rounded-md  '>
                                <div className='w-[30%] ml-4 flex gap-x-8 items-center py-2 cursor-pointer'>

                                    <div>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.6668 6.76667C24.7899 7.14711 23.8625 7.39861 22.9135 7.51333C23.9147 6.91521 24.665 5.97425 25.0252 4.865C24.0843 5.42507 23.0544 5.81968 21.9802 6.03167C21.2621 5.253 20.306 4.73468 19.2616 4.55799C18.2173 4.38131 17.1438 4.55625 16.2096 5.05539C15.2754 5.55452 14.5333 6.34962 14.0996 7.31598C13.666 8.28233 13.5653 9.36529 13.8135 10.395C11.9112 10.2988 10.0503 9.80345 8.35193 8.94117C6.65351 8.0789 5.15548 6.86898 3.95516 5.39C3.53416 6.1252 3.31294 6.95779 3.3135 7.805C3.312 8.59178 3.50508 9.36672 3.87554 10.0608C4.246 10.7549 4.78235 11.3467 5.43683 11.7833C4.67614 11.7626 3.9317 11.5585 3.26683 11.1883V11.2467C3.27253 12.349 3.65882 13.4156 4.36036 14.266C5.0619 15.1163 6.03563 15.6982 7.11683 15.9133C6.70063 16.04 6.26852 16.1068 5.8335 16.1117C5.53237 16.1082 5.23199 16.0808 4.93516 16.03C5.24306 16.9783 5.83889 17.807 6.63975 18.4009C7.44061 18.9947 8.40667 19.3241 9.4035 19.3433C7.72023 20.6678 5.64203 21.3907 3.50016 21.3967C3.11019 21.3979 2.72052 21.3746 2.3335 21.3267C4.52033 22.7386 7.06878 23.4882 9.67183 23.485C11.4681 23.5037 13.2502 23.1642 14.9138 22.4864C16.5774 21.8087 18.0894 20.8062 19.3612 19.5376C20.6331 18.269 21.6395 16.7596 22.3215 15.0977C23.0035 13.4358 23.3475 11.6547 23.3335 9.85833C23.3335 9.66 23.3335 9.45 23.3335 9.24C24.249 8.55728 25.0385 7.72033 25.6668 6.76667Z" fill="black" />
                                        </svg>
                                    </div>

                                    <div>
                                        <span className='font-poppins font-[400] text-sm text-black'>
                                            twitter.com
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <div className='border border-[#C1C9FF] rounded-md  '>
                                <div className='w-[30%] ml-4 flex gap-x-8 items-center py-2 cursor-pointer'>

                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.34 3.46C15.1027 3.46 14.8707 3.53038 14.6733 3.66224C14.476 3.79409 14.3222 3.98151 14.2313 4.20078C14.1405 4.42005 14.1168 4.66133 14.1631 4.89411C14.2094 5.12689 14.3236 5.34071 14.4915 5.50853C14.6593 5.67635 14.8731 5.79064 15.1059 5.83694C15.3387 5.88324 15.5799 5.85948 15.7992 5.76866C16.0185 5.67783 16.2059 5.52402 16.3378 5.32668C16.4696 5.12935 16.54 4.89734 16.54 4.66C16.54 4.34174 16.4136 4.03652 16.1885 3.81147C15.9635 3.58643 15.6583 3.46 15.34 3.46ZM19.94 5.88C19.9206 5.0503 19.7652 4.2294 19.48 3.45C19.2257 2.78313 18.83 2.17928 18.32 1.68C17.8248 1.16743 17.2196 0.774176 16.55 0.53C15.7727 0.236161 14.9508 0.07721 14.12 0.0599999C13.06 -5.58794e-08 12.72 0 10 0C7.28 0 6.94 -5.58794e-08 5.88 0.0599999C5.04915 0.07721 4.22734 0.236161 3.45 0.53C2.78168 0.776649 2.17693 1.16956 1.68 1.68C1.16743 2.17518 0.774176 2.78044 0.53 3.45C0.236161 4.22734 0.07721 5.04915 0.0599999 5.88C-5.58794e-08 6.94 0 7.28 0 10C0 12.72 -5.58794e-08 13.06 0.0599999 14.12C0.07721 14.9508 0.236161 15.7727 0.53 16.55C0.774176 17.2196 1.16743 17.8248 1.68 18.32C2.17693 18.8304 2.78168 19.2234 3.45 19.47C4.22734 19.7638 5.04915 19.9228 5.88 19.94C6.94 20 7.28 20 10 20C12.72 20 13.06 20 14.12 19.94C14.9508 19.9228 15.7727 19.7638 16.55 19.47C17.2196 19.2258 17.8248 18.8326 18.32 18.32C18.8322 17.8226 19.2283 17.2182 19.48 16.55C19.7652 15.7706 19.9206 14.9497 19.94 14.12C19.94 13.06 20 12.72 20 10C20 7.28 20 6.94 19.94 5.88ZM18.14 14C18.1327 14.6348 18.0178 15.2637 17.8 15.86C17.6403 16.2952 17.3839 16.6884 17.05 17.01C16.7256 17.3405 16.3332 17.5964 15.9 17.76C15.3037 17.9778 14.6748 18.0927 14.04 18.1C13.04 18.15 12.67 18.16 10.04 18.16C7.41 18.16 7.04 18.16 6.04 18.1C5.38089 18.1123 4.72459 18.0109 4.1 17.8C3.68578 17.6281 3.31136 17.3728 3 17.05C2.66809 16.7287 2.41484 16.3352 2.26 15.9C2.01586 15.2952 1.88044 14.6519 1.86 14C1.86 13 1.8 12.63 1.8 10C1.8 7.37 1.8 7 1.86 6C1.86448 5.35106 1.98295 4.70795 2.21 4.1C2.38605 3.67791 2.65627 3.30166 3 3C3.30381 2.65617 3.67929 2.3831 4.1 2.2C4.70955 1.98004 5.352 1.86508 6 1.86C7 1.86 7.37 1.8 10 1.8C12.63 1.8 13 1.8 14 1.86C14.6348 1.86728 15.2637 1.98225 15.86 2.2C16.3144 2.36865 16.7223 2.64285 17.05 3C17.3777 3.30718 17.6338 3.68273 17.8 4.1C18.0223 4.70893 18.1373 5.35178 18.14 6C18.19 7 18.2 7.37 18.2 10C18.2 12.63 18.19 13 18.14 14ZM10 4.87C8.98581 4.87198 7.99496 5.17453 7.15265 5.73942C6.31035 6.30431 5.65438 7.1062 5.26763 8.04375C4.88089 8.98131 4.78072 10.0125 4.97979 11.0069C5.17886 12.0014 5.66824 12.9145 6.38608 13.631C7.10392 14.3474 8.01801 14.835 9.01286 15.0321C10.0077 15.2293 11.0387 15.1271 11.9755 14.7385C12.9123 14.35 13.7129 13.6924 14.2761 12.849C14.8394 12.0056 15.14 11.0142 15.14 10C15.1413 9.3251 15.0092 8.65661 14.7512 8.03296C14.4933 7.40931 14.1146 6.84281 13.6369 6.36605C13.1592 5.88929 12.5919 5.51168 11.9678 5.25493C11.3436 4.99818 10.6749 4.86736 10 4.87ZM10 13.33C9.34139 13.33 8.69757 13.1347 8.14995 12.7688C7.60234 12.4029 7.17552 11.8828 6.92348 11.2743C6.67144 10.6659 6.6055 9.99631 6.73398 9.35035C6.86247 8.70439 7.17963 8.11104 7.64533 7.64533C8.11104 7.17963 8.70439 6.86247 9.35035 6.73398C9.99631 6.6055 10.6659 6.67144 11.2743 6.92348C11.8828 7.17552 12.4029 7.60234 12.7688 8.14995C13.1347 8.69757 13.33 9.34139 13.33 10C13.33 10.4373 13.2439 10.8703 13.0765 11.2743C12.9092 11.6784 12.6639 12.0454 12.3547 12.3547C12.0454 12.6639 11.6784 12.9092 11.2743 13.0765C10.8703 13.2439 10.4373 13.33 10 13.33Z" fill="black" />
                                        </svg>

                                    </div>

                                    <div>
                                        <span className='font-poppins font-[400] text-sm text-black'>
                                            instagram.com
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-[#C1C9FF] rounded-md  '>
                                <div className='w-[30%] ml-4 flex gap-x-8 items-center py-2 cursor-pointer'>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.4701 1.9999H3.53006C3.33964 1.99725 3.15056 2.03214 2.97362 2.10258C2.79669 2.17302 2.63536 2.27762 2.49886 2.41041C2.36235 2.5432 2.25334 2.70158 2.17805 2.87651C2.10276 3.05143 2.06267 3.23947 2.06006 3.4299V20.5699C2.06267 20.7603 2.10276 20.9484 2.17805 21.1233C2.25334 21.2982 2.36235 21.4566 2.49886 21.5894C2.63536 21.7222 2.79669 21.8268 2.97362 21.8972C3.15056 21.9676 3.33964 22.0025 3.53006 21.9999H20.4701C20.6605 22.0025 20.8496 21.9676 21.0265 21.8972C21.2034 21.8268 21.3648 21.7222 21.5013 21.5894C21.6378 21.4566 21.7468 21.2982 21.8221 21.1233C21.8974 20.9484 21.9375 20.7603 21.9401 20.5699V3.4299C21.9375 3.23947 21.8974 3.05143 21.8221 2.87651C21.7468 2.70158 21.6378 2.5432 21.5013 2.41041C21.3648 2.27762 21.2034 2.17302 21.0265 2.10258C20.8496 2.03214 20.6605 1.99725 20.4701 1.9999ZM8.09006 18.7399H5.09006V9.73989H8.09006V18.7399ZM6.59006 8.47989C6.17632 8.47989 5.77953 8.31554 5.48697 8.02298C5.19442 7.73042 5.03006 7.33363 5.03006 6.9199C5.03006 6.50616 5.19442 6.10937 5.48697 5.81681C5.77953 5.52425 6.17632 5.3599 6.59006 5.3599C6.80975 5.33498 7.03224 5.35675 7.24293 5.42378C7.45363 5.49081 7.6478 5.60159 7.81272 5.74886C7.97763 5.89613 8.10958 6.07657 8.19993 6.27838C8.29028 6.48018 8.33698 6.69879 8.33698 6.9199C8.33698 7.141 8.29028 7.35961 8.19993 7.56141C8.10958 7.76322 7.97763 7.94366 7.81272 8.09093C7.6478 8.23821 7.45363 8.34898 7.24293 8.41601C7.03224 8.48304 6.80975 8.50481 6.59006 8.47989ZM18.9101 18.7399H15.9101V13.9099C15.9101 12.6999 15.4801 11.9099 14.3901 11.9099C14.0527 11.9124 13.7242 12.0182 13.4489 12.2131C13.1735 12.408 12.9645 12.6826 12.8501 12.9999C12.7718 13.2349 12.7379 13.4825 12.7501 13.7299V18.7299H9.75006C9.75006 18.7299 9.75006 10.5499 9.75006 9.72989H12.7501V10.9999C13.0226 10.527 13.419 10.1374 13.8965 9.8731C14.374 9.60878 14.9146 9.47975 15.4601 9.49989C17.4601 9.49989 18.9101 10.7899 18.9101 13.5599V18.7399Z" fill="black" />
                                        </svg>
                                    </div>


                                    <div>
                                        <span className='font-poppins font-[400] text-sm text-black'>
                                            linkedin.com
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='font-circular md:mt-[2rem] md:ml-[4.7825rem] lg:w-[90%] w-full mt-6'>
                <h1 className='text-black font-[950] text-xl '>Description</h1>

                <span className='font-[450] text-sm text-[#737373]'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit
                </span>
            </div>

        </>
    )
}

export default StudentProfileComponent