import React from 'react';

import { tabDto } from '../types';

interface TabListProps {
  tabInfo: tabDto[];
  currTab: string;
  setCurrTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabList = ({ tabInfo, currTab, setCurrTab }: TabListProps) => {
  return (
    <section className='flex gap-4'>
      {tabInfo.map((type, idx) => {
        return (
          <button
            className={`w-32 p-2 md:w-40 border-2 border-slate-200 rounded-md hover:bg-slate-400 ${
              type.id === currTab && 'bg-slate-600 text-white'
            }`}
            onClick={() => setCurrTab(type.id)}
            key={`${type.id}${idx}`}
          >
            {type.name}
          </button>
        );
      })}
    </section>
  );
};

export default TabList;
