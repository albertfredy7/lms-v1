import React from 'react';

const InsightsSwitch = ({ category, onSelect }) => {
  return (
    <div className="w-full md:w-full xl:w-full h-full 3xl:h-5/6 grid grid-cols-3 bg-white rounded-l-xl rounded-r-xl">
      <button
        className={`col-span-1 rounded-xl md:text-xl lg:text-2xl xl:text-base 3xl:text-2xl py-3 md:py-0 ${
          category === 'revenue' ? 'bg-blue-200' : ''
        }`}
        onClick={() => onSelect('revenue')}
      >
        Revenue
      </button>
      <button
        className={`col-span-1 rounded-xl md:text-xl lg:text-2xl xl:text-base 3xl:text-2xl py-3 md:py-0 ${
          category === 'admission' ? 'bg-blue-200' : ''
        }`}
        onClick={() => onSelect('admission')}
      >
        Admissions
      </button>
      <button
        className={`col-span-1 rounded-xl md:text-xl lg:text-2xl xl:text-base 3xl:text-2xl py-3 md:py-0 ${
          category === 'expense' ? 'bg-blue-200' : ''
        }`}
        onClick={() => onSelect('expense')}
      >
        Expenses
      </button>
    </div>
  );
};

export default InsightsSwitch;
