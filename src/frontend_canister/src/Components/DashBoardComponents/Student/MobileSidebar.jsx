import React, { useState } from 'react';
import { logoutStart } from '../../Reducers/InternetIdentityReducer';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const MobileSideBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); // Toggle the active state
    };

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            dispatch(logoutStart());
            setIsLoading(false);
            window.location.href =
                process.env.DFX_NETWORK === "ic" ?
                    '/' :
                    `/?canisterId=${process.env.FRONTEND_CANISTER_CANISTER_ID}`;
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        <div className='w-full h-[80px] bottom-0 bg-white rounded-t-3xl flex justify-evenly items-center'>

            <div className={`hover:bg-[#7B61FF] hover:text-white text-[#CDCAFF] p-2 rounded-2xl ${isActive ? 'icon-active' : 'icon-normal'}`} onClick={handleClick}>
                <Link to='/student-dashboard '>
                    <svg className='group-hover:fill-current' width="30" height="30" viewBox="0 0 23 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg ">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.57672 0H6.26625C6.85867 0 7.33675 -4.81959e-08 7.72611 0.025875C8.12582 0.0522291 8.4797 0.108292 8.81484 0.242937C9.61975 0.567274 10.2592 1.18914 10.5926 1.97177C10.7316 2.2976 10.7892 2.64165 10.8164 3.03073C10.843 3.40879 10.843 3.87358 10.843 4.44954V6.09213C10.843 6.66808 10.843 7.13288 10.8164 7.51142C10.7892 7.90002 10.7316 8.24406 10.5926 8.5699C10.2592 9.35238 9.61969 9.97407 8.81484 10.2983C8.4797 10.4334 8.12582 10.4894 7.72562 10.5158C7.33675 10.5417 6.85867 10.5417 6.26625 10.5417H4.57672C3.9843 10.5417 3.50622 10.5417 3.11686 10.5158C2.71715 10.4894 2.36327 10.4334 2.02813 10.2983C1.22312 9.97413 0.583488 9.35244 0.249881 8.5699C0.111387 8.24406 0.0537219 7.90002 0.0266145 7.51094C-4.95735e-08 7.13335 0 6.66856 0 6.0926V4.45002C0 3.87406 -4.95735e-08 3.40927 0.0266145 3.03073C0.0537219 2.64213 0.111387 2.29808 0.249881 1.97225C0.58338 1.18952 1.22303 0.567649 2.02813 0.243417C2.36327 0.108771 2.71715 0.0527085 3.11735 0.0263543C3.50573 1.46373e-07 3.9843 0 4.57672 0ZM3.20656 1.30046C2.87339 1.3225 2.6792 1.36419 2.53134 1.4236C2.29212 1.51993 2.07477 1.66112 1.89168 1.83912C1.7086 2.01711 1.56337 2.22843 1.46429 2.461C1.40318 2.60475 1.36079 2.79354 1.33763 3.11746C1.31446 3.44712 1.31446 3.86831 1.31446 4.47206V6.0696C1.31446 6.67335 1.31446 7.09502 1.33763 7.42421C1.3603 7.74813 1.40318 7.93692 1.46429 8.08067C1.56337 8.31324 1.7086 8.52455 1.89168 8.70255C2.07477 8.88055 2.29212 9.02174 2.53134 9.11806C2.6792 9.17748 2.87339 9.21869 3.20656 9.24121C3.54565 9.26373 3.97888 9.26373 4.59988 9.26373H6.24309C6.86409 9.26373 7.29781 9.26373 7.63641 9.24121C7.96958 9.21917 8.16377 9.17748 8.31163 9.11806C8.55085 9.02174 8.7682 8.88055 8.95129 8.70255C9.13438 8.52455 9.2796 8.31324 9.37868 8.08067C9.43979 7.93692 9.48218 7.74813 9.50534 7.42421C9.52851 7.09454 9.52851 6.67335 9.52851 6.0696V4.47206C9.52851 3.86831 9.52851 3.44665 9.50534 3.11746C9.48267 2.79354 9.43979 2.60475 9.37868 2.461C9.2796 2.22843 9.13438 2.01711 8.95129 1.83912C8.7682 1.66112 8.55085 1.51993 8.31163 1.4236C8.16377 1.36419 7.96958 1.32298 7.63641 1.30046C7.29732 1.27794 6.86409 1.27794 6.24309 1.27794H4.59988C3.97888 1.27794 3.54516 1.27794 3.20656 1.30046Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.57672 12.4585H6.26625C6.85867 12.4585 7.33675 12.4585 7.72611 12.4844C8.12582 12.5107 8.4797 12.5668 8.81484 12.7014C9.61979 13.0257 10.2593 13.6476 10.5926 14.4303C10.7316 14.7561 10.7892 15.1001 10.8164 15.4892C10.843 15.8673 10.843 16.3321 10.843 16.908V18.5506C10.843 19.1266 10.843 19.5914 10.8164 19.9699C10.7892 20.3585 10.7316 20.7026 10.5926 21.0284C10.2593 21.8111 9.61979 22.4329 8.81484 22.7572C8.4797 22.8919 8.12582 22.9479 7.72562 22.9743C7.33675 23.0002 6.85867 23.0002 6.26625 23.0002H4.57672C3.9843 23.0002 3.50622 23.0002 3.11686 22.9743C2.71715 22.9479 2.36327 22.8919 2.02813 22.7572C1.22303 22.433 0.58338 21.8111 0.249881 21.0284C0.111387 20.7026 0.0537219 20.3585 0.0266145 19.9694C-4.95735e-08 19.5919 0 19.1271 0 18.5511V16.9085C0 16.3326 -4.95735e-08 15.8678 0.0266145 15.4892C0.0537219 15.1006 0.111387 14.7566 0.249881 14.4307C0.58338 13.648 1.22303 13.0261 2.02813 12.7019C2.36327 12.5673 2.71715 12.5112 3.11735 12.4849C3.50573 12.4585 3.9843 12.4585 4.57672 12.4585ZM3.20656 13.759C2.87339 13.781 2.6792 13.8227 2.53134 13.8821C2.29212 13.9784 2.07477 14.1196 1.89168 14.2976C1.7086 14.4756 1.56337 14.6869 1.46429 14.9195C1.40318 15.0632 1.36079 15.252 1.33763 15.576C1.31446 15.9056 1.31446 16.3268 1.31446 16.9306V18.5281C1.31446 19.1319 1.31446 19.5535 1.33763 19.8827C1.3603 20.2066 1.40318 20.3954 1.46429 20.5392C1.56337 20.7717 1.7086 20.9831 1.89168 21.161C2.07477 21.339 2.29212 21.4802 2.53134 21.5766C2.6792 21.636 2.87339 21.6772 3.20656 21.6997C3.54565 21.7222 3.97888 21.7222 4.59988 21.7222H6.24309C6.86409 21.7222 7.29781 21.7222 7.63641 21.6997C7.96958 21.6777 8.16377 21.636 8.31163 21.5766C8.55085 21.4802 8.7682 21.339 8.95129 21.161C9.13438 20.9831 9.2796 20.7717 9.37868 20.5392C9.43979 20.3954 9.48218 20.2066 9.50534 19.8827C9.52851 19.553 9.52851 19.1319 9.52851 18.5281V16.9306C9.52851 16.3268 9.52851 15.9051 9.50534 15.576C9.48267 15.252 9.43979 15.0632 9.37868 14.9195C9.2796 14.6869 9.13438 14.4756 8.95129 14.2976C8.7682 14.1196 8.55085 13.9784 8.31163 13.8821C8.16377 13.8227 7.96958 13.7815 7.63641 13.759C7.29732 13.7364 6.86409 13.7364 6.24309 13.7364H4.59988C3.97888 13.7364 3.54516 13.7364 3.20656 13.759Z" fill="currentColor" />
                        <path d="M13.4712 4.47201C13.4712 3.28128 13.4712 2.68615 13.6713 2.21609C13.8034 1.90604 13.9971 1.62433 14.2413 1.38705C14.4854 1.14978 14.7752 0.961581 15.0942 0.833214C15.5772 0.638672 16.1893 0.638672 17.4141 0.638672H19.0573C20.2821 0.638672 20.8942 0.638672 21.3772 0.833214C21.6962 0.961581 21.986 1.14978 22.2301 1.38705C22.4743 1.62433 22.6679 1.90604 22.8001 2.21609C23.0002 2.68567 23.0002 3.28128 23.0002 4.47201V6.06907C23.0002 7.2598 23.0002 7.8554 22.8001 8.32498C22.5332 8.95114 22.0213 9.44856 21.3772 9.70786C20.8942 9.9024 20.2821 9.9024 19.0573 9.9024H17.4141C16.1893 9.9024 15.5772 9.9024 15.0942 9.70786C14.45 9.44856 13.9382 8.95114 13.6713 8.32498C13.4712 7.8554 13.4712 7.2598 13.4712 6.06907V4.47201Z" fill="currentColor" />
                        <path d="M13.4712 16.9305C13.4712 15.7398 13.4712 15.1446 13.6713 14.6746C13.8034 14.3645 13.9971 14.0828 14.2413 13.8455C14.4854 13.6083 14.7752 13.4201 15.0942 13.2917C15.5772 13.0972 16.1893 13.0972 17.4141 13.0972H19.0573C20.2821 13.0972 20.8942 13.0972 21.3772 13.2917C21.6962 13.4201 21.986 13.6083 22.2301 13.8455C22.4743 14.0828 22.6679 14.3645 22.8001 14.6746C23.0002 15.1442 23.0002 15.7398 23.0002 16.9305V18.5276C23.0002 19.7183 23.0002 20.3139 22.8001 20.7835C22.5332 21.4096 22.0213 21.9071 21.3772 22.1664C20.8942 22.3609 20.2821 22.3609 19.0573 22.3609H17.4141C16.1893 22.3609 15.5772 22.3609 15.0942 22.1664C14.45 21.9071 13.9382 21.4096 13.6713 20.7835C13.4712 20.3139 13.4712 19.7183 13.4712 18.5276V16.9305Z" fill="currentColor" />
                    </svg>

                </Link>
            </div>

            <div className={`hover:bg-[#7B61FF] hover:text-white text-[#CDCAFF] p-2 rounded-2xl ${isActive ? 'icon-active' : 'icon-normal'}`} onClick={handleClick}>
                <Link to='/my-courses'>
                    <svg className='group-hover:fill-current' width="30" height="30" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 7.85714C10.6877 7.85714 9.89361 7.62674 9.21819 7.19506C8.54278 6.76338 8.01635 6.14982 7.70549 5.43197C7.39463 4.71412 7.3133 3.92422 7.47177 3.16215C7.63025 2.40008 8.02142 1.70007 8.59581 1.15065C9.17021 0.601233 9.90203 0.227073 10.6987 0.0754882C11.4954 -0.0760966 12.3213 0.00170219 13.0717 0.299046C13.8222 0.596391 14.4637 1.09993 14.915 1.74598C15.3663 2.39203 15.6071 3.15158 15.6071 3.92857C15.6071 4.44448 15.5009 4.95534 15.2945 5.43197C15.0881 5.90861 14.7856 6.34169 14.4042 6.70649C14.0228 7.07129 13.57 7.36067 13.0717 7.5581C12.5734 7.75553 12.0394 7.85714 11.5 7.85714ZM11.5 16.2486C12.0319 15.1914 12.8045 14.2617 13.7611 13.5275C14.7177 12.7933 15.8341 12.2733 17.0282 12.0057H17.0693C16.7519 10.8235 16.0324 9.77589 15.0241 9.02783C14.0158 8.27976 12.776 7.87376 11.5 7.87376C10.224 7.87376 8.98418 8.27976 7.97589 9.02783C6.96761 9.77589 6.24811 10.8235 5.93071 12.0057C7.13233 12.268 8.25684 12.7855 9.22092 13.52C10.185 14.2544 10.9639 15.187 11.5 16.2486ZM20.1825 15.7143C19.5092 15.7141 18.8368 15.7587 18.17 15.8479C14.6625 16.3036 11.9764 17.9143 11.5986 19.9021C11.5475 20.074 11.5145 20.2504 11.5 20.4286C11.5012 20.2412 11.4819 20.0542 11.4425 19.8707C11.0236 17.8829 8.3375 16.2721 4.87107 15.8164C4.18993 15.736 3.50369 15.7019 2.8175 15.7143H0V22H23V15.7143H20.1825ZM12.3871 16.3193C12.1088 16.8168 11.8937 17.3443 11.7464 17.8907C12.9868 16.4921 15.2457 15.455 18.055 15.0936C18.7593 14.9917 19.4702 14.9365 20.1825 14.9286H21.3571V12.5714H18.9421C18.3611 12.5724 17.7822 12.6383 17.2171 12.7679C16.1983 13.0064 15.2426 13.4454 14.411 14.0568C13.5794 14.6683 12.8901 15.4388 12.3871 16.3193ZM4.92857 15.07C7.73786 15.4314 9.99679 16.4686 11.2454 17.8671C10.9589 16.861 10.4478 15.9263 9.74726 15.1274C9.04672 14.3284 8.1734 13.6843 7.1875 13.2393C6.72705 13.0341 6.2452 12.8761 5.75 12.7679C5.19565 12.6407 4.6279 12.5748 4.05786 12.5714H1.64286V14.9286H2.8175C3.52377 14.9288 4.22916 14.9761 4.92857 15.07Z" fill="currentColor" />
                    </svg>

                </Link>
            </div>

            <div className={`hover:bg-[#7B61FF] hover:text-white text-[#CDCAFF] p-2 rounded-2xl ${isActive ? 'icon-active' : 'icon-normal'}`} onClick={handleClick}>
                <Link to='/allCourses'>
                    <svg className='group-hover:fill-current' width="30" height="28" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1825 5.68426C19.5092 5.68409 18.8368 5.72893 18.17 5.81847C14.6625 6.27637 11.9764 7.89479 11.5986 9.89216C11.5475 10.0649 11.5145 10.2421 11.5 10.4211C11.5012 10.2328 11.4819 10.045 11.4425 9.86058C11.0236 7.86321 8.3375 6.24479 4.87107 5.78689C4.18993 5.70606 3.50369 5.67177 2.8175 5.68426H0V12.0001H23V5.68426H20.1825ZM12.3871 6.29216C12.1088 6.79202 11.8937 7.3221 11.7464 7.8711C12.9868 6.46584 15.2457 5.42373 18.055 5.06058C18.7593 4.95819 19.4702 4.9028 20.1825 4.89479H21.3571V2.52637H18.9421C18.3611 2.52736 17.7822 2.59359 17.2171 2.72374C16.1983 2.96338 15.2426 3.40447 14.411 4.01887C13.5794 4.63327 12.8901 5.40749 12.3871 6.29216ZM4.92857 5.03689C7.73786 5.40005 9.99679 6.44215 11.2454 7.84742C10.9589 6.8365 10.4478 5.89729 9.74726 5.09453C9.04672 4.29176 8.1734 3.64452 7.1875 3.19742C6.72705 2.99126 6.2452 2.83248 5.75 2.72374C5.19565 2.59601 4.6279 2.52979 4.05786 2.52637H1.64286V4.89479H2.8175C3.52377 4.89505 4.22916 4.94254 4.92857 5.03689Z" fill="currentColor" />
                    </svg>

                </Link>
            </div>

            <div className={`hover:bg-[#7B61FF] hover:text-white text-[#CDCAFF] p-2 rounded-2xl ${isActive ? 'icon-active' : 'icon-normal'}`} onClick={handleClick}>
                <Link to='/Certificates'>
                    <svg className='group-hover:fill-current' width="30" height="30" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.1705 14.9334C25.1705 15.5696 24.9763 16.1917 24.6124 16.7207C24.2485 17.2498 23.7313 17.6621 23.1261 17.9056C22.521 18.1491 21.8551 18.2128 21.2127 18.0887C20.5703 17.9646 19.9802 17.6582 19.517 17.2082C19.0538 16.7583 18.7384 16.1851 18.6106 15.561C18.4829 14.9369 18.5484 14.2901 18.7991 13.7022C19.0498 13.1143 19.4742 12.6119 20.0189 12.2584C20.5635 11.9049 21.2038 11.7162 21.8588 11.7162C22.7368 11.7171 23.5786 12.0563 24.1995 12.6595C24.8204 13.2626 25.1696 14.0804 25.1705 14.9334ZM19.7992 19.1487V22.5147C19.7992 22.5992 19.8218 22.6822 19.8649 22.7555C19.9081 22.8289 19.9701 22.89 20.045 22.9329C20.1199 22.9757 20.2051 22.9989 20.292 23C20.3789 23.0011 20.4646 22.9801 20.5407 22.9391L21.4963 22.425C21.6073 22.3653 21.7321 22.334 21.859 22.334C21.9859 22.334 22.1107 22.3653 22.2218 22.425L23.1769 22.9391C23.2529 22.98 23.3386 23.0008 23.4254 22.9997C23.5123 22.9985 23.5973 22.9754 23.6721 22.9325C23.747 22.8897 23.809 22.8286 23.8521 22.7553C23.8952 22.682 23.9178 22.5991 23.9178 22.5147V19.1487C23.2754 19.449 22.5715 19.605 21.8585 19.605C21.1455 19.605 20.4417 19.449 19.7992 19.1487ZM28 0.485022V19.0856C28 19.2143 27.9474 19.3376 27.8538 19.4286C27.7601 19.5196 27.6331 19.5707 27.5007 19.5707H25.4137V18.0671C26.2209 17.2121 26.6681 16.0939 26.6669 14.9338C26.6688 14.1745 26.4802 13.4261 26.1172 12.7535C25.7543 12.081 25.228 11.5045 24.584 11.0741C23.9399 10.6437 23.1976 10.3723 22.4213 10.2835C21.6449 10.1947 20.858 10.2911 20.1286 10.5643C19.3993 10.8376 18.7495 11.2794 18.2356 11.8517C17.7218 12.4239 17.3592 13.1092 17.1795 13.8482C16.9997 14.5873 17.0082 15.3577 17.2041 16.0928C17.4 16.828 17.7775 17.5056 18.3039 18.0671V19.5707H0.499287C0.366868 19.5707 0.239872 19.5196 0.146238 19.4286C0.0526034 19.3376 0 19.2143 0 19.0856V0.485022C0 0.356386 0.0526034 0.233019 0.146238 0.14206C0.239872 0.0511003 0.366868 0 0.499287 0H27.5007C27.6331 0 27.7601 0.0511003 27.8538 0.14206C27.9474 0.233019 28 0.356386 28 0.485022ZM8.6826 3.91413C8.68246 4.00971 8.70175 4.10437 8.73934 4.1927C8.77693 4.28102 8.83209 4.36128 8.90166 4.42886C8.97123 4.49644 9.05384 4.55003 9.14477 4.58654C9.23569 4.62306 9.33314 4.64179 9.43153 4.64166H18.5685C18.7671 4.64166 18.9576 4.56501 19.098 4.42858C19.2385 4.29214 19.3174 4.10708 19.3174 3.91413C19.3174 3.72118 19.2385 3.53613 19.098 3.39969C18.9576 3.26325 18.7671 3.1866 18.5685 3.1866H9.43153C9.33314 3.18647 9.23569 3.2052 9.14477 3.24172C9.05384 3.27823 8.97123 3.33182 8.90166 3.3994C8.83209 3.46699 8.77693 3.54724 8.73934 3.63557C8.70175 3.72389 8.68246 3.81855 8.6826 3.91413ZM15.4679 13.828C15.468 13.7324 15.4488 13.6377 15.4112 13.5494C15.3736 13.4611 15.3184 13.3808 15.2488 13.3133C15.1793 13.2457 15.0967 13.1921 15.0057 13.1556C14.9148 13.1191 14.8174 13.1003 14.719 13.1005H3.52996C3.33133 13.1005 3.14083 13.1771 3.00038 13.3135C2.85993 13.45 2.78103 13.635 2.78103 13.828C2.78103 14.0209 2.85993 14.206 3.00038 14.3424C3.14083 14.4789 3.33133 14.5555 3.52996 14.5555H14.719C14.8174 14.5557 14.9148 14.5369 15.0057 14.5004C15.0967 14.4639 15.1793 14.4103 15.2488 14.3427C15.3184 14.2751 15.3736 14.1949 15.4112 14.1066C15.4488 14.0182 15.468 13.9236 15.4679 13.828ZM16.4914 10.525C16.4916 10.4294 16.4723 10.3347 16.4347 10.2464C16.3971 10.1581 16.3419 10.0778 16.2724 10.0103C16.2028 9.94267 16.1202 9.88909 16.0293 9.85257C15.9383 9.81606 15.8409 9.79733 15.7425 9.79745H3.52996C3.33133 9.79745 3.14083 9.8741 3.00038 10.0105C2.85993 10.147 2.78103 10.332 2.78103 10.525C2.78103 10.7179 2.85993 10.903 3.00038 11.0394C3.14083 11.1759 3.33133 11.2525 3.52996 11.2525H15.7425C15.8409 11.2526 15.9383 11.2339 16.0293 11.1974C16.1202 11.1609 16.2028 11.1073 16.2724 11.0397C16.3419 10.9721 16.3971 10.8919 16.4347 10.8036C16.4723 10.7152 16.4916 10.6206 16.4914 10.525ZM25.219 7.21713C25.2184 7.02434 25.1394 6.83958 24.999 6.70325C24.8587 6.56693 24.6685 6.49011 24.47 6.4896H3.52996C3.33133 6.4896 3.14083 6.56625 3.00038 6.70269C2.85993 6.83913 2.78103 7.02418 2.78103 7.21713C2.78103 7.41009 2.85993 7.59514 3.00038 7.73158C3.14083 7.86802 3.33133 7.94467 3.52996 7.94467H24.47C24.5684 7.94479 24.6659 7.92606 24.7568 7.88955C24.8477 7.85303 24.9303 7.79945 24.9999 7.73186C25.0695 7.66428 25.1246 7.58403 25.1622 7.4957C25.1998 7.40737 25.2191 7.31271 25.219 7.21713Z" fill="currentColor" />
                        <path d="M25.1705 14.9334C25.1705 15.5696 24.9763 16.1917 24.6124 16.7207C24.2485 17.2498 23.7313 17.6621 23.1261 17.9056C22.521 18.1491 21.8551 18.2128 21.2127 18.0887C20.5703 17.9646 19.9802 17.6582 19.517 17.2082C19.0538 16.7583 18.7384 16.1851 18.6106 15.561C18.4829 14.9369 18.5484 14.2901 18.7991 13.7022C19.0498 13.1143 19.4742 12.6119 20.0189 12.2584C20.5635 11.9049 21.2038 11.7162 21.8588 11.7162C22.7368 11.7171 23.5786 12.0563 24.1995 12.6595C24.8204 13.2626 25.1696 14.0804 25.1705 14.9334ZM19.7992 19.1487V22.5147C19.7992 22.5992 19.8218 22.6822 19.8649 22.7555C19.9081 22.8289 19.9701 22.89 20.045 22.9329C20.1199 22.9757 20.2051 22.9989 20.292 23C20.3789 23.0011 20.4646 22.9801 20.5407 22.9391L21.4963 22.425C21.6073 22.3653 21.7321 22.334 21.859 22.334C21.9859 22.334 22.1107 22.3653 22.2218 22.425L23.1769 22.9391C23.2529 22.98 23.3386 23.0008 23.4254 22.9997C23.5123 22.9985 23.5973 22.9754 23.6721 22.9325C23.747 22.8897 23.809 22.8286 23.8521 22.7553C23.8952 22.682 23.9178 22.5991 23.9178 22.5147V19.1487C23.2754 19.449 22.5715 19.605 21.8585 19.605C21.1455 19.605 20.4417 19.449 19.7992 19.1487ZM28 0.485022V19.0856C28 19.2143 27.9474 19.3376 27.8538 19.4286C27.7601 19.5196 27.6331 19.5707 27.5007 19.5707H25.4137V18.0671C26.2209 17.2121 26.6681 16.0939 26.6669 14.9338C26.6688 14.1745 26.4802 13.4261 26.1172 12.7535C25.7543 12.081 25.228 11.5045 24.584 11.0741C23.9399 10.6437 23.1976 10.3723 22.4213 10.2835C21.6449 10.1947 20.858 10.2911 20.1286 10.5643C19.3993 10.8376 18.7495 11.2794 18.2356 11.8517C17.7218 12.4239 17.3592 13.1092 17.1795 13.8482C16.9997 14.5873 17.0082 15.3577 17.2041 16.0928C17.4 16.828 17.7775 17.5056 18.3039 18.0671V19.5707H0.499287C0.366868 19.5707 0.239872 19.5196 0.146238 19.4286C0.0526034 19.3376 0 19.2143 0 19.0856V0.485022C0 0.356386 0.0526034 0.233019 0.146238 0.14206C0.239872 0.0511003 0.366868 0 0.499287 0H27.5007C27.6331 0 27.7601 0.0511003 27.8538 0.14206C27.9474 0.233019 28 0.356386 28 0.485022ZM8.6826 3.91413C8.68246 4.00971 8.70175 4.10437 8.73934 4.1927C8.77693 4.28102 8.83209 4.36128 8.90166 4.42886C8.97123 4.49644 9.05384 4.55003 9.14477 4.58654C9.23569 4.62306 9.33314 4.64179 9.43153 4.64166H18.5685C18.7671 4.64166 18.9576 4.56501 19.098 4.42858C19.2385 4.29214 19.3174 4.10708 19.3174 3.91413C19.3174 3.72118 19.2385 3.53613 19.098 3.39969C18.9576 3.26325 18.7671 3.1866 18.5685 3.1866H9.43153C9.33314 3.18647 9.23569 3.2052 9.14477 3.24172C9.05384 3.27823 8.97123 3.33182 8.90166 3.3994C8.83209 3.46699 8.77693 3.54724 8.73934 3.63557C8.70175 3.72389 8.68246 3.81855 8.6826 3.91413ZM15.4679 13.828C15.468 13.7324 15.4488 13.6377 15.4112 13.5494C15.3736 13.4611 15.3184 13.3808 15.2488 13.3133C15.1793 13.2457 15.0967 13.1921 15.0057 13.1556C14.9148 13.1191 14.8174 13.1003 14.719 13.1005H3.52996C3.33133 13.1005 3.14083 13.1771 3.00038 13.3135C2.85993 13.45 2.78103 13.635 2.78103 13.828C2.78103 14.0209 2.85993 14.206 3.00038 14.3424C3.14083 14.4789 3.33133 14.5555 3.52996 14.5555H14.719C14.8174 14.5557 14.9148 14.5369 15.0057 14.5004C15.0967 14.4639 15.1793 14.4103 15.2488 14.3427C15.3184 14.2751 15.3736 14.1949 15.4112 14.1066C15.4488 14.0182 15.468 13.9236 15.4679 13.828ZM16.4914 10.525C16.4916 10.4294 16.4723 10.3347 16.4347 10.2464C16.3971 10.1581 16.3419 10.0778 16.2724 10.0103C16.2028 9.94267 16.1202 9.88909 16.0293 9.85257C15.9383 9.81606 15.8409 9.79733 15.7425 9.79745H3.52996C3.33133 9.79745 3.14083 9.8741 3.00038 10.0105C2.85993 10.147 2.78103 10.332 2.78103 10.525C2.78103 10.7179 2.85993 10.903 3.00038 11.0394C3.14083 11.1759 3.33133 11.2525 3.52996 11.2525H15.7425C15.8409 11.2526 15.9383 11.2339 16.0293 11.1974C16.1202 11.1609 16.2028 11.1073 16.2724 11.0397C16.3419 10.9721 16.3971 10.8919 16.4347 10.8036C16.4723 10.7152 16.4916 10.6206 16.4914 10.525ZM25.219 7.21713C25.2184 7.02434 25.1394 6.83958 24.999 6.70325C24.8587 6.56693 24.6685 6.49011 24.47 6.4896H3.52996C3.33133 6.4896 3.14083 6.56625 3.00038 6.70269C2.85993 6.83913 2.78103 7.02418 2.78103 7.21713C2.78103 7.41009 2.85993 7.59514 3.00038 7.73158C3.14083 7.86802 3.33133 7.94467 3.52996 7.94467H24.47C24.5684 7.94479 24.6659 7.92606 24.7568 7.88955C24.8477 7.85303 24.9303 7.79945 24.9999 7.73186C25.0695 7.66428 25.1246 7.58403 25.1622 7.4957C25.1998 7.40737 25.2191 7.31271 25.219 7.21713Z" fill="currentColor" />
                    </svg>

                </Link>
            </div>

            <div className={`hover:bg-[#7B61FF] hover:text-white text-[#CDCAFF] p-2 rounded-2xl ${isActive ? 'icon-active' : 'icon-normal'}`} onClick={handleClick}>
                <Link to='/student-profile'>
                    <svg className='group-hover:fill-current' width="30" height="30" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.94505 15.5823C8.65466 15.4489 10.3721 15.4489 12.0817 15.5823C13.0127 15.6349 13.9393 15.7476 14.8555 15.9199C16.8383 16.3087 18.1327 16.9431 18.6875 17.9662C19.1042 18.7647 19.1042 19.7153 18.6875 20.5138C18.1327 21.5369 16.8897 22.2122 14.835 22.5601C13.9194 22.7388 12.9927 22.8551 12.0612 22.9079C11.1982 23 10.3353 23 9.46203 23H7.8902C7.56145 22.9591 7.24298 22.9386 6.93478 22.9386C6.00326 22.8922 5.07628 22.7794 4.16097 22.601C2.17821 22.2327 0.883765 21.5778 0.329003 20.5547C0.114845 20.1584 0.00194047 19.7156 0.000123759 19.2656C-0.00420887 18.8128 0.105281 18.366 0.318729 17.9662C0.863218 16.9431 2.15766 16.278 4.16097 15.9199C5.08032 15.7452 6.01046 15.6324 6.94505 15.5823ZM9.50312 0C12.9471 0 15.7391 2.78049 15.7391 6.21041C15.7391 9.64032 12.9471 12.4208 9.50312 12.4208C6.05911 12.4208 3.26719 9.64032 3.26719 6.21041C3.26719 2.78049 6.05911 0 9.50312 0Z" fill="currentColor" />
                    </svg>
                </Link>
            </div>


        </div >
    );
};

export default MobileSideBar;