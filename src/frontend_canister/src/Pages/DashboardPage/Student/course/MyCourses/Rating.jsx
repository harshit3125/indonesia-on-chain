import React, { useState } from 'react';

function Rating() {
    const [rating, setRating] = useState(4); // State to store the current rating

    return (
        <div className="container  px-4 py-2 font-poppins rounded-xl">
            <div className="bg-white w-full rounded-lg shadow-md px-8 py-6 flex">
                <div className='flex items-left justify-start'>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.3017 25.0001C47.3018 25.1892 47.2616 25.3762 47.1837 25.5486C47.1059 25.7209 46.9923 25.8748 46.8505 25.9999L42.6194 29.7209L44.4229 35.0596C44.4832 35.2388 44.5048 35.4288 44.4861 35.617C44.4674 35.8052 44.4088 35.9873 44.3144 36.1511C44.2196 36.3147 44.0911 36.4563 43.9375 36.5665C43.7838 36.6767 43.6085 36.753 43.4231 36.7902L37.8986 37.8986L36.7909 43.4229C36.7303 43.7245 36.5672 43.9959 36.3293 44.191C36.0913 44.386 35.7932 44.4926 35.4855 44.4927C35.342 44.4927 35.1982 44.4694 35.0596 44.4221L29.7217 42.6194L26 46.8497C25.7471 47.1374 25.383 47.3017 25.0002 47.3017C24.6175 47.3017 24.2532 47.1374 24.001 46.8497L20.2794 42.6194L14.9415 44.4221C14.8043 44.4689 14.6604 44.4927 14.5155 44.4927C14.2817 44.4927 14.0521 44.4311 13.8497 44.3141C13.686 44.2194 13.5443 44.091 13.434 43.9373C13.3237 43.7837 13.2474 43.6083 13.2101 43.4229L12.1017 37.8986L6.57748 36.7902C6.39218 36.753 6.21692 36.6768 6.06336 36.5666C5.9098 36.4564 5.78145 36.3147 5.68686 36.1511C5.59213 35.9874 5.53344 35.8053 5.51473 35.6171C5.49602 35.4288 5.51771 35.2388 5.57836 35.0596L7.38098 29.7209L3.15061 25.9999C3.00855 25.8749 2.89477 25.7211 2.81684 25.5487C2.73892 25.3763 2.69866 25.1893 2.69873 25.0001C2.69873 24.6172 2.86298 24.2531 3.15061 24.0001L7.38098 20.2791L5.57836 14.9405C5.51793 14.7613 5.49636 14.5713 5.51506 14.3831C5.53377 14.195 5.59233 14.0129 5.68685 13.8492C5.78137 13.6854 5.90968 13.5436 6.06324 13.4333C6.21681 13.3229 6.39211 13.2466 6.57748 13.2092L12.1017 12.1015L13.2101 6.57711C13.2708 6.27554 13.4339 6.00425 13.6718 5.8093C13.9098 5.61435 14.2079 5.50775 14.5155 5.50761C14.6586 5.50761 14.8024 5.53086 14.9415 5.57749L20.2794 7.38074L24.001 3.15049C24.2534 2.86299 24.6175 2.69849 25.0002 2.69849C25.383 2.69849 25.7471 2.86286 26 3.15049L29.7217 7.38074L35.0596 5.57749C35.2388 5.51711 35.4289 5.49555 35.6171 5.51426C35.8053 5.53297 35.9874 5.59151 36.1512 5.68599C36.3151 5.7805 36.4569 5.90888 36.5672 6.06254C36.6775 6.21621 36.7537 6.39164 36.7909 6.57711L37.8986 12.1015L43.4231 13.2092C43.6085 13.2466 43.7839 13.323 43.9375 13.4333C44.0912 13.5436 44.2196 13.6853 44.3144 13.849C44.4088 14.0128 44.4674 14.1949 44.4861 14.3831C44.5048 14.5712 44.4832 14.7613 44.4229 14.9405L42.6194 20.2791L46.8505 24.0001C46.9923 24.1252 47.1059 24.2791 47.1837 24.4515C47.2615 24.624 47.3018 24.811 47.3017 25.0001Z" fill="#7B61FF" />
                    <path d="M36.4494 23.5433L31.6504 28.2215L32.7833 34.8263C32.8236 35.061 32.7974 35.3023 32.7077 35.523C32.618 35.7436 32.4683 35.9347 32.2756 36.0746C32.0829 36.2146 31.8549 36.2978 31.6173 36.3149C31.3798 36.332 31.1422 36.2822 30.9314 36.1713L24.9999 33.053L19.068 36.1713C18.8574 36.2824 18.6198 36.3322 18.3822 36.3151C18.1446 36.298 17.9166 36.2147 17.724 36.0745C17.5313 35.9346 17.3816 35.7435 17.2919 35.5229C17.2021 35.3023 17.1759 35.061 17.2162 34.8263L18.349 28.2215L13.5502 23.5433C13.3797 23.377 13.2591 23.1664 13.202 22.9352C13.1449 22.704 13.1536 22.4615 13.2272 22.235C13.3008 22.0085 13.4364 21.8072 13.6184 21.6536C13.8005 21.5001 14.0219 21.4005 14.2575 21.3661L20.8894 20.4026L23.8552 14.3934C24.0704 13.9578 24.514 13.6816 24.9999 13.6816C25.4858 13.6816 25.929 13.9578 26.1443 14.3934L29.11 20.4026L35.7424 21.3661C35.978 21.4005 36.1993 21.5001 36.3813 21.6537C36.5632 21.8072 36.6986 22.0086 36.7722 22.235C36.8459 22.4615 36.8547 22.704 36.7977 22.9352C36.7406 23.1665 36.62 23.3771 36.4494 23.5433Z" fill="#FFAE63" />
                </svg>
                </div>
                <div className='block w-full '>
                    {/* "Rating" heading */}
                    <div className='flex justify-between px-8'>
                        <h3 className="font-bold">Rating</h3>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((star, index) => {
                                const starRating = index + 1;
                                return (
                                    <span
                                        key={starRating}
                                        className={`star w-6 h-6 rounded-full ${starRating <= rating ? 'text-yellow-500' : 'text-gray-300'
                                            }`}
                                    >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0986 19.7634C15.95 19.763 15.8037 19.7265 15.6724 19.657L11.0001 17.2004L6.32785 19.657C6.17657 19.7363 6.00615 19.7717 5.83581 19.7593C5.66548 19.7469 5.502 19.6871 5.3638 19.5868C5.22561 19.4864 5.1182 19.3494 5.05369 19.1913C4.98918 19.0332 4.97013 18.8602 4.99868 18.6918L5.8906 13.4888L2.11027 9.80377C1.98797 9.68437 1.9015 9.53315 1.86061 9.3672C1.81971 9.20125 1.82603 9.02717 1.87885 8.86462C1.93167 8.70206 2.02888 8.55752 2.15951 8.4473C2.29014 8.33707 2.44898 8.26557 2.6181 8.24085L7.84218 7.48185L10.1788 2.74819C10.2629 2.60504 10.383 2.48637 10.5272 2.40391C10.6713 2.32145 10.8345 2.27808 11.0006 2.27808C11.1666 2.27808 11.3298 2.32145 11.4739 2.40391C11.6181 2.48637 11.7382 2.60504 11.8224 2.74819L14.158 7.48185L19.3821 8.24085C19.5512 8.26557 19.7101 8.33707 19.8407 8.4473C19.9713 8.55752 20.0685 8.70206 20.1213 8.86462C20.1742 9.02717 20.1805 9.20125 20.1396 9.3672C20.0987 9.53315 20.0122 9.68437 19.8899 9.80377L16.1096 13.4888L17.0024 18.6918C17.025 18.8233 17.0185 18.9582 16.9836 19.0869C16.9486 19.2157 16.8859 19.3353 16.7999 19.4373C16.714 19.5394 16.6067 19.6214 16.4858 19.6777C16.3648 19.7341 16.232 19.7633 16.0986 19.7634Z" fill="#FFAE63" />
                                        </svg>
                                    </span>
                                );
                            })}
                        </div>

                       

                    </div>
                    {/* Star rating */}

                    <div className='flex justify-between px-8'>
                        <p className="text-[#A4A4A4] text-sm inline-block">2222 students</p>
                        <span className="ml-2 text-sm text-[#A4A4A4]">
                            {rating} (200 ratings)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
