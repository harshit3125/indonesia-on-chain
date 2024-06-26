import React from 'react'
import MiddleDataCards from '../../../../Components/EducatorComponents/main/MiddleDataCards'
import EducatorWelcomeBox from '../../../../Components/EducatorComponents/main/EducatorWelcomeBox'
import TopDataCard from '../../../../Components/EducatorComponents/main/TopDataCard'
import { TbUsers } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi2";
import BarGraphAnalytics from '../../../../Components/EducatorComponents/main/BarGraphAnalytics';
import DonutChartAnalytics from '../../../../Components/EducatorComponents/main/DonutChartAnalytics';
import DashboardRecommededCourse from "../../../../Components/DashBoardComponents/components/DashboardRecommededCourse";

import { Link } from 'react-router-dom';

const topCardData = [
    {
        title: "Total Students",
        value: 5000,
        fixedValue: null,
        subValue: 135,
        icon: <TbUsers size={40} />
    }, {
        title: "Avg. Ratings",
        value: 4.8,
        fixedValue: 5,
        subValue: 4.5,
        icon: <IoAnalyticsOutline size={40} />
    }
]

const middleCardData = [
    {
        title: "Total Courses",
        count: 50
    }, {
        title: "Pending Courses",
        count: 50
    }, {
        title: "Total Enrollments",
        count: 50
    }, {
        title: "Pending Enrollments",
        count: 50
    }, {
        title: "Certificate Issues",
        count: 50
    }
]

const studentData = [
    { month: "January", shortName: "Jan", students: 50 },
    { month: "February", shortName: "Feb", students: 45 },
    { month: "March", shortName: "Mar", students: 55 },
    { month: "April", shortName: "Apr", students: 60 },
    { month: "May", shortName: "May", students: 65 },
    { month: "June", shortName: "Jun", students: 70 },
    { month: "July", shortName: "Jul", students: 75 },
    { month: "August", shortName: "Aug", students: 80 },
    { month: "September", shortName: "Sep", students: 85 },
    { month: "October", shortName: "Oct", students: 90 },
    { month: "November", shortName: "Nov", students: 95 },
    { month: "December", shortName: "Dec", students: 100 }
];

const courseData = [
    {
        title: "UX for business",
        value: 456
    },
    {
        title: "Social media for freelances",
        value: 123
    },
    {
        title: "Create you first ebook",
        value: 90
    }
]

const certificateIconColors = ['bg-[#FFD7D7]', 'bg-[#FFE8CD]', 'bg-[#DDD7FF]'];

const EducatorMain = () => {
    return (
        <div className="w-full px-6 lg:px-14 mt-5">
            {/* Welcome & Side data cards */}
            <div className="w-full flex-col md:flex-row flex gap-6">
                <div className="w-full md:w-8/12 rounded-xl dashboard_cap_gradient shadow">
                    <EducatorWelcomeBox />
                </div>
                <div className="w-full md:w-4/12 flex-col flex gap-4">
                    {
                        topCardData.map((item, index) => (
                            <TopDataCard key={index} data={item} />
                        ))
                    }
                </div>
            </div>

            {/* Middle Cards */}
            <div className='w-full flex items-center mt-8 gap-4 overflow-auto'>
                {
                    middleCardData.map((item, index) => {
                        return (
                            <MiddleDataCards key={index} data={item} />
                        )
                    })
                }
            </div>

            {/* Bar graph */}
            <div className="w-full p-4 bg-white mt-8 relative rounded-xl">
                <div className="w-full">
                    <h1 className='text-xl font-semibold'>Analytics</h1>
                </div>
                <div className="w-full flex flex-wrap md:flex-nowrap mt-4 items-center">
                    <div className="w-full md:w-1/2 flex justify-start items-center gap-1">
                        <h2>Total students</h2>
                        <span className='text-lg font-semibold'>1400</span>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end gap-3">
                        <button type='button' className='outline-none bg-[#EAEAEA] text-[#7B61FF] hover:text-[#EAEAEA]  hover:bg-[#7B61FF] p-2 md:px-3 rounded-md text-sm'>Day</button>
                        <button type='button' className='outline-none bg-[#EAEAEA] text-[#7B61FF] hover:text-[#EAEAEA]  hover:bg-[#7B61FF] p-2 md:px-3 rounded-md text-sm'>Month</button>
                        <button type='button' className='outline-none bg-[#EAEAEA] text-[#7B61FF] hover:text-[#EAEAEA]  hover:bg-[#7B61FF] p-2 md:px-3 rounded-md text-sm'>Year</button>
                    </div>
                </div>
                <div className="w-full h-[300px] xl:h-[400px] overflow-x-auto overflow-y-hidden xl:overflow-hidden">
                    <BarGraphAnalytics data={studentData} />
                </div>

            </div>
            {/* Donut chart & upcoming Courses */}
            <div className="w-full mt-8 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-6/12 lg:w-7/12 xl:w-8/12 p-4 bg-white rounded-xl">
                    <div className="w-full">
                        <h1 className='text-xl font-semibold'>Top courses</h1>
                    </div>
                    <div className="w-full flex flex-col xl:flex-row items-center">
                        <div className="flex-1">
                            <DonutChartAnalytics data={courseData} />
                        </div>
                        <div className="flex-1 p-4">
                            <div className="w-full">
                                <h1 className='text-lg font-semibold text-end border-b'>Enrollment</h1>
                                {
                                    courseData.map((item, index) => (
                                        <div key={index} className="w-full flex justify-between items-center p-2">
                                            <span className='flex items-center gap-1'><span className='w-2 h-2 bg-[#7B61FF] rounded-full'></span>{item.title}</span>
                                            <span>{item.value}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 p-4 bg-white rounded-xl">
                    <h1 className='text-xl font-semibold'>Next course releases</h1>
                    <div className="w-full flex flex-col gap-3 mt-3">
                        {[1, 2].map((item, index) => <div key={index} className="w-full flex">
                            <div className="flex">
                                <div className='bg-[#7B61FF] p-2 rounded-md flex flex-col text-white justify-center items-center w-[80px] h-[80px]'>
                                    <span className='text-lg text-gray-300'>June</span>
                                    <span className='text-4xl font-bold'>21</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start px-3">
                                <h1 className='font-medium md:text-sm xl:text-base'>{"Getting pro with hashtsdvsvsags?".slice(0, 20)}</h1>
                                <p className='text-gray-600 text-sm'>{"Social media for freelances".slice(0, 20)}</p>
                                <p className='text-gray-600 text-sm'>08:00 PM</p>
                            </div>

                        </div>)}
                    </div>
                    <Link to={'/upcoming_courses'} className='flex p-2 text-[#925FE2]'>See all</Link>
                </div>
            </div>

            {/* My courses & certificates */}
            <div className="w-full mt-8 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-7/12 xl:w-8/12">
                    <div className="w-full flex justify-between items-center">
                        <h1 className='text-xl font-semibold'>My Courses</h1>
                        <Link to={'/'}>See all</Link>
                    </div>
                    <div className="w-full bg-white p-4 rounded-xl mt-4">
                        <DashboardRecommededCourse />
                    </div>
                </div>
                <div className="w-full md:w-5/12 xl:w-4/12">
                    <div className="w-full flex justify-between items-center">
                        <h1 className='text-xl font-semibold'>Certificates</h1>
                        <Link to={'/'}>See all</Link>
                    </div>
                    <div className="w-full mt-4">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) =>
                                <div key={index} className="w-full mb-4 flex items-center justify-between bg-white p-3 rounded-md">
                                    <div className="w-10/12 flex items-center gap-2">
                                        <span className={`block p-2 ${certificateIconColors[index % 3]} rounded-md`}>
                                            <FaBook size={24} />
                                        </span>
                                        <div className="flex flex-col">
                                            <h1 className='font-semibold'>Blockchain Course</h1>
                                            <span className='text-sm'>Suraj Aswal</span>
                                        </div>
                                    </div>

                                    <div className="w-2/12 flex justify-end">
                                        <button>
                                            <HiOutlineChevronRight size={22} />
                                        </button>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducatorMain