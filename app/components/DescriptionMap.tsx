import React from 'react';

export default function DescriptionMap(props) {
  const { list, type } = props;

  const contentDisplay = {
    'link': (obj) => (
      <a className='text-sky-400 cursor-pointer' target='_blank' href={obj.link}>
        {obj.name === 'Email' ? obj.content : obj.name}
      </a>
    ),
    'skills': (obj) => <p>{obj.content}</p>,
    'experience': (obj) => (
      <p>
        {Array.isArray(obj.content) ? obj.content.join(', ') : obj.content}
      </p>
    ),
    'education': (obj) => <p>{obj.content}</p>
  };

  return (
    <div className='flex flex-col gap-3 flex-wrap text-xs sm:text-sm'>
      {list.map((listItem, listIndex) => {
        return (
          <div className='relative group overflow-hidden flex items-center gap-1.5' key={listIndex}>
            <div className='bg-purple-700 duration-300 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0'></div>
            <p>
              <b>{listItem.name}</b>
            </p>
            {/* Render content based on type */}
            {contentDisplay[type](listItem)}
          </div>
        );
      })}
    </div>
  );
}
