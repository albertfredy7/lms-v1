import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import SidebarNew from '../Components/SidebarNew';
import MobileNavigation from '../Components/MobileNavigation';
import MobileDateSwitch from '../Components/MobileDateSwitch';
import MobileOverviewCard from '../Components/MobileOverviewCard';
import OverviewCard from '../Components/OverviewCard';
import InsightOverview from '../Components/InsightOverview';
import DataCard from '../Components/DataCard';
import InsightsSwitch from '../Components/InsightsSwitch';
import DatePicker from '../Components/DatePicker';

function Insights() {
  const data = [
    {
      title: 'Spend So Far',
      value: 5000,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('revenue');
  const [selectedDuration, setSelectedDuration] = useState('today');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  //incase of admissions and revenue
  let sslcAdmissions = 60;
  let plusTwoAdmissions = 90;

  // Calculate the ratio of admissions for SSLC and Plus Two
  const totalAdmissions = sslcAdmissions + plusTwoAdmissions;
  const sslcRatio = (sslcAdmissions / totalAdmissions) * 100;
  const plusTwoRatio = (plusTwoAdmissions / totalAdmissions) * 100;

  //incasse of expenses
  // let salaryExpense = 20000;
  // let refreshmentsExpense = 10000;
  // let transportationExpense = 5000;
  // let miscellaneousExpense = 15000;

  // let totalExpense =
  //   salaryExpense +
  //   refreshmentsExpense +
  //   transportationExpense +
  //   miscellaneousExpense;

  const expensData = [
    {
      category: 'Salary',
      amount: 20000,
    },
    {
      category: 'Refreshments',
      amount: 10000,
    },
    {
      category: 'Transportation',
      amount: 5000,
    },
    {
      category: 'Miscellaneous',
      amount: 15000,
    },
  ];

  // const Switch = () => {
  //   const [activeIndex, setActiveIndex] = useState(0);

  //   const handleClick = (index) => {
  //     setActiveIndex(index);
  //   };

  //   return (
  //     <div className="w-3/4 h-full grid grid-cols-3 bg-white rounded-l-xl rounded-r-xl">
  //       <button
  //         className={`col-span-1 rounded-xl ${
  //           activeIndex === 0 ? 'bg-blue-200' : ''
  //         }`}
  //         onClick={() => handleClick(0)}
  //       >
  //         Revenue
  //       </button>
  //       <button
  //         className={`col-span-1 rounded-xl ${
  //           activeIndex === 1 ? 'bg-blue-200' : ''
  //         }`}
  //         onClick={() => handleClick(1)}
  //       >
  //         Admissions
  //       </button>
  //       <button
  //         className={`col-span-1 rounded-xl ${
  //           activeIndex === 2 ? 'bg-blue-200' : ''
  //         }`}
  //         onClick={() => handleClick(2)}
  //       >
  //         Expenses
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div className="bg-[#f0f0f0] h-screen w-screen overflow-hidden">
      <div className="h-full w-full  block md:grid md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-11 2xl:grid-cols-6">
        {/* mobile screens */}
        <div className="block md:hidden "></div>

        {/* tablet screens */}
        <div className="hidden md:grid md:grid-cols-7 lg:grid-cols-7 xl:hidden p-4 w-screen h-screen">
          <div className="md:col-span-1 lg:col-span-1">
            {/* <SidebarComponent /> */}
            <SidebarNew />
          </div>
        </div>

        {/* pc screens */}
        <div className="hidden xl:grid xl:grid-cols-11 p-4 w-screen h-screen bg-green-100 overflow-hidden">
          <div className="col-span-2">
            {/* 1st col */}
            <SidebarNew />
          </div>

          <div className="col-span-9 grid grid-rows-5 3xl:grid-rows-6 pl-8 pr-2 overflow-hidden">
            <div className="row-span-1 grid grid-cols-6 items-center pt-4 pb-7  bg-red-100 px-4">
              <div className="col-span-1 h-full flex flex-col justify-center">
                <h2 className="text-xl 3xl:text-3xl font-semibold">Insights</h2>
                <h4 className="text-base 3xl:text-xl">Linfield at a glance</h4>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-3 h-full grid grid-cols-3 space-x-2">
                <div className="col-span-1 h-full flex flex-col justify-center items-center relative">
                  <h2 className="text-xl 3xl:text-2xl text-blue-600 font-semibold">
                    2500
                  </h2>
                  <h4 className="text-base 3xl:text-xl">Daily revenue</h4>
                  <div className="absolute inset-t-0 right-0 h-1/2 border-l border-gray-400"></div>
                </div>

                <div className="col-span-1 h-full flex flex-col justify-center items-center relative">
                  <h2 className="text-xl 3xl:text-2xl text-blue-600 font-semibold">
                    2500
                  </h2>
                  <h4 className="text-base 3xl:text-xl">Weekly revenue</h4>
                  <div className="absolute inset-t-0 right-0 h-1/2 border-l border-gray-400"></div>
                </div>

                <div className="col-span-1 h-full flex flex-col justify-center items-center relative">
                  <h2 className="text-xl 3xl:text-2xl text-blue-600 font-semibold">
                    2500
                  </h2>
                  <h4 className="text-base 3xl:text-xl">Monthly revenue</h4>
                </div>
              </div>
            </div>
            <div className="row-span-4 3xl:row-span-5 bg-blue-400 grid grid-cols-7 space-x-4 ">
              <div className="col-span-5 bg-green-200 h-full w-full overflow-hidden">
                <div className="h-full grid grid-rows-7 bg-yellow-200">
                  <div className="row-span-2 3xl:row-span-2 bg-red-500">
                    <div className="h-full grid grid-rows-2 xl:space-y-3 3xl:space-y-0 bg-orange-400">
                      <div className="row-span-1 h-5/6 bg-orange-100 flex justify-center items-center">
                        <InsightsSwitch
                          category={selectedCategory}
                          onSelect={handleCategorySelect}
                        />
                      </div>
                      <div className="row-span-1 bg-orange-300 flex items-center px-4">
                        <MobileDateSwitch
                          duration={selectedDuration}
                          onSelect={handleDurationChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row-span-5 3xl:row-span-5 bg-red-300 h-full overflow-y-auto space-y-2 px-4 py-2">
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    <DataCard
                      type={'admissions'}
                      title={'professor'}
                      tailData={'SSLC'}
                      style={{ h: '1/3' }}
                    />
                    {/* <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div>
                    <div className="h-16 w-full bg-indigo-200"></div> */}
                  </div>
                </div>
              </div>

              {/* <div className="col-span-3 bg-violet-200 h-full w-full overflow-y-auto space-y-2">
                <div className="h-24 w-full bg-indigo-200"></div>
                <div className="h-24 w-full bg-indigo-200"></div>
                <div className="h-24 w-full bg-indigo-200"></div>
                <div className="h-24 w-full bg-indigo-200"></div>
                <div className="h-24 w-full bg-indigo-200"></div>
                <div className="h-24 w-full bg-indigo-200"></div>
              </div> */}
              <div className="col-span-2 bg-violet-200 px-4 py-4 overflow-hidden">
                <div className="h-full w-full grid grid-rows-9 3xl:grid-rows-8 space-y-3">
                  <div
                    className={`${
                      selectedCategory === 'expense' ? 'hidden' : 'row-span-1'
                    }  bg-green-200 flex items-center justify-center`}
                  >
                    <button className="h-3/4 w-3/4 bg-white rounded-xl 3xl:rounded-2xl 3xl:text-2xl font-medium">
                      Add revenue
                    </button>
                  </div>
                  <div className="row-span-4 bg-green-300">
                    <DatePicker />
                  </div>
                  <div
                    className={`${
                      selectedCategory === 'expense'
                        ? 'row-span-4'
                        : 'row-span-3'
                    }  3xl:${
                      selectedCategory === 'expense'
                        ? 'row-span-3'
                        : 'row-span-2'
                    } bg-white p-3 rounded-xl`}
                  >
                    <div className="h-full w-full grid grid-rows-5 items-center space-y-2 3xl:space-y-1">
                      <div className="row-span-1  flex justify-between items-center">
                        <h2 className="text-sm 3xl:text-base 4xl:text-lg font-semibold">
                          Recent admissions
                        </h2>
                        <h5 className="text-xs 3xl:text-sm 4xl:text-base text-blue-600">
                          Last 48 hours
                        </h5>
                      </div>
                      <div className="row-span-2  flex flex-col justify-center">
                        <div className="relative h-4 3xl:h-7 w-full rounded-lg flex flex-col justify-center">
                          <div
                            className="absolute left-0 h-full bg-blue-300 rounded-lg"
                            style={{ width: `${sslcRatio}%` }}
                          ></div>
                          <div className="absolute inset-x-full bg-red-100 flex items-center justify-end text-black text-sm 3xl:text-lg">
                            {sslcAdmissions}
                          </div>
                        </div>
                        <div className="text-gray-600 text-xs 3xl:text-base 4xl:text-lg pt-1">
                          SSLC
                        </div>
                      </div>
                      <div className="row-span-2 ">
                        <div className="relative h-4 3xl:h-7 w-full rounded-lg flex flex-col justify-center">
                          <div
                            className="absolute left-0 h-full bg-blue-300 rounded-lg"
                            style={{ width: `${plusTwoRatio}%` }}
                          ></div>
                          <div className="absolute inset-x-full bg-red-100 flex items-center justify-end text-black text-sm 3xl:text-lg">
                            {plusTwoAdmissions}
                          </div>
                        </div>
                        <div className="text-gray-600 text-xs 3xl:text-base 4xl:text-lg pt-1">
                          PLusTwo
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-span-1 bg-green-500"></div>
                </div>
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

export default Insights;
