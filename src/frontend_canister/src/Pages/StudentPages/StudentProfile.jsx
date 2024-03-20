import React, { useState } from 'react';
import StudentProfileNavbar from '../../Components/StudentComponents/StudentProfileNavbar';
import StudentProfileComponent from '../../Components/StudentComponents/StudentProfileComponent';
import StudentSideBar from '../../Components/DashBoardComponents/Student/SideBar';
import MobileSideBar from '../../Components/DashBoardComponents/Student/MobileSidebar';
const StudentProfile = () => {


  return (
    <section className=' bg-[#EFF1FE]'>

      <div className='md:grid grid-cols-12 h-full'>
        <div className={`xl:col-span-2 md:col-span-3 sticky top-0 h-screen md:block hidden`}>
          <StudentSideBar />
        </div>



        <div className='xl:col-span-10 md:col-span-9  col-span-12 flex flex-col p-4 '>
          <div className='w-full sticky top-0 z-50 backdrop-blur'>
            <StudentProfileNavbar />
          </div>

          <div className='w-full mt-[6.25rem]'>
            <StudentProfileComponent />
          </div>


        </div>
      </div>

      <div className='block md:hidden sticky bottom-0 z-20'>
        <MobileSideBar />
      </div>

    </section>
  );
};

export default StudentProfile;