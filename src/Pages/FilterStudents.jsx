import React from 'react';
import Sidebar from '../Components/Sidebar';
import SidebarNew from '../Components/SidebarNew';
import MobileNavigation from '../Components/MobileNavigation';
import SeachBar from '../Components/SeachBar';
import OverviewCard from '../Components/OverviewCard';
import DataCard from '../Components/DataCard';

function FilterStudents() {

  const yearOptions = [
    {
      label: 2024,
      value: 2024,
    },
    {
      label: 2025,
      value: 2025,
    },
    {
      label: 2026,
      value: 2026,
    },
    {
      label: 2027,
      value: 2027,
    },
    {
      label: 2028,
      value: 2028,
    },
  ];

  return (
    <div className="bg-[#f0f0f0] h-screen w-screen overflow-hidden">
      <div className="h-full w-full  block md:grid md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-11 2xl:grid-cols-6">
        {/* mobile screens */}
        <div className="block md:hidden ">
          <div className="px-6">
            <MobileNavigation />
          </div>
        </div>

        {/* tablet screens */}
        <div className="hidden md:grid md:grid-cols-7 lg:grid-cols-7 xl:hidden p-4 w-screen h-screen">
          <div className="md:col-span-1 lg:col-span-1">
            {/* <SidebarComponent /> */}
            <SidebarNew />
          </div>
        </div>

        {/* pc screens */}
        <div className="hidden xl:grid xl:grid-cols-11 p-4 w-screen h-screen">
          <div className="col-span-2 ">
            <SidebarNew />
          </div>

          <div className="col-span-6 h-full  px-12 grid grid-rows-7 3xl:grid-rows-12 overflow-hidden">
            <div className="row-span-1 3xl:row-span-2 flex flex-col justify-center 3xl:justify-center px-4">
              <h1 className="text-xl 3xl:text-3xl font-semibold">
                Filter students
              </h1>
              <h1 className="text-md 3xl:text-xl font-normal">
                Lorem ipsum some random sub heading
              </h1>
            </div>

            <div className="row-span-2 3xl:row-span-3  py-3">
              <OverviewCard title={'Total Students'} value={2500} number={true}/>
            </div>

            <div className="row-span-4 3xl:row-span-8 pt-4">
              <div className="overflow-y-auto h-full p-4">
                <div className="space-y-3">
                <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                  <DataCard
                      type="admissions"
                      title="Berlin"
                      tailData="SSLC"
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 h-full bg-green-100 grid grid-rows-12 overflow-hidden">
            <div className='row-span-2 bg-green-300 flex flex-col justify-center items-center px-4'>
              <SeachBar />
            </div>
            <div className='row-span-11 bg-green-500 p-10'>
              <div className='overflow-y-auto h-full bg-white p-4 rounded-xl'>
                <h2 className='text-base 3xl:text-2xl font-semibold'>Enter filter condition</h2>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <div className='grid grid-cols-5'>
            <div className='w-full '>
                <Sidebar />
            </div>
            <div>Home</div>
        </div> */}
    </div>
  );
}

export default FilterStudents;
