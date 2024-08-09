import React from 'react';

const items = [
  {
    title: "Project 1",
    src: '#',
    text: "Lorem ipsum agate",
  },
  {
    title: "Project 2",
    src: '#',
    text: "Lorem ipsum agate",
  },
  {
    title: "Project 3",
    src: '#',
    text: "Lorem ipsum agate",
  },
];

function Content() {
  return (
    <section className='w-full my-4 p-4 bg-black'>
      <h2 className='text-3xl text-center text-white font-bold mb-8'>Projects</h2>
      <div className='flex flex-wrap gap-4 justify-center p-3'>
        {items.map((item, index) => (
          <div
            key={index}
            className='bg-black border-2 border-blue-600 rounded-md w-full sm:w-60 md:w-72 p-4 transition transform hover:scale-105 hover:shadow-lg'
          >
            <img src={item.src} alt={item.title} className='w-full h-40 object-cover rounded-md mb-4' />
            <h3 className='text-xl text-white font-semibold mb-2'>{item.title}</h3>
            <p className='text-gray-300'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Content;
