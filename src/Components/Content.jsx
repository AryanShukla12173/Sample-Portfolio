import React from 'react';
import { useScroll } from './ScrollContext';
const items = [
  {
    title: "Result Management System",
    src: 'https://github.com/Daredevil90/Result-Analysis-System',
    text: "Web Application",
  },
  {
    title: "Basic Fintech Web Application",
    src: 'https://github.com/Daredevil90/Assignment',
    text: "Details available on repository",
  },
];
const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git'];
function Content() {
  const { aboutRef, projectsRef, skillsRef, experienceRef, contactRef } = useScroll();
  return (
    <>
      <section className='flex flex-row w-screen gap-6 my-1 p-2 ' ref={aboutRef}>
        <div className='w-full md:w-1/2 bg-black border-2 border-blue-600 rounded-lg p-6 text-pretty'>
          <h1 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Hello, I'm <span className='name'>Aryan Shukla</span>
          </h1>
          <p className='text-xl text-gray-300 leading-relaxed'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut at corrupti deserunt expedita. Molestias rem illo eos explicabo earum ex repellat autem sit deleniti laudantium consectetur eius, facilis labore ipsa.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum autem harum natus rem quam, numquam ullam optio quasi consequatur nostrum eum veritatis magnam, laboriosam nemo voluptatibus inventore voluptate temporibus.
          </p>
        </div>
        <div className='w-full md:w-1/2 bg-black border-2 border-blue-600 rounded-lg overflow-hidden'>
          <img src="#" alt="Aryan Shukla" className='w-full h-full object-cover' />
        </div>
      </section>
      <section className='w-full my-1 p-10 bg-black border-2 border-blue-600 rounded-lg' ref={skillsRef}>
        <h2 className='text-3xl md:text-4xl text-center text-white font-bold mb-8 border-blue-600 border-b-4 '>Skills</h2>
        <div className='flex flex-wrap justify-center gap-4' >
          {skills.map((skill, index) => (
            <div key={index} className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm'>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className='w-full my-1 p-10 bg-black border-2 border-blue-600 rounded-lg' ref={experienceRef}>
        <h2 className='text-3xl md:text-4xl text-center text-white font-bold mb-8'>Experience</h2>
        <div className='space-y-6'>
          <div className='border-l-4 border-blue-600 pl-4'>
            <h3 className='text-xl text-white font-semibold'>Software Developer</h3>
            <p className='text-gray-400'>Company Name | 2020 - Present</p>
            <ul className='list-disc list-inside text-gray-300 mt-2'>
              <li>Developed and maintained web applications</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Implemented new features and optimized existing ones</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className='w-full my-1 p-10 bg-black border-2 border-blue-600 rounded-lg' ref={projectsRef}>
        <h2 className='text-3xl md:text-4xl text-center text-white font-bold mb-8'>Projects</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {items.map((item, index) => (
            <a  key={index} href={item.src}>
            <div
              key={index}
              className='bg-black border border-blue-600 rounded-lg p-3  h-36 flex flex-col justify-between transition transform hover:scale-105 hover:shadow-lg cursor-pointer'
              // onClick={window.location.href=item.src}
            >
              <img src={item.src} alt={item.title} className='w-full h-16 object-cover rounded-md mb-2' />
              <div >
                <h3 className='text-sm text-white font-semibold mb-1 truncate'>{item.title}</h3>
                <p className='text-xs text-gray-400 truncate'>{item.text}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </section>
       <section className='w-full my-1 p-10 bg-black border-2 border-blue-600 rounded-lg' ref={contactRef}>
        <h2 className='text-3xl md:text-4xl text-center text-white font-bold mb-8'>Contact Me</h2>
        <form className='max-w-md mx-auto'>
          <div className='mb-4'>
            <input type="text" placeholder="Name" className='w-full p-2 rounded bg-gray-800 text-white border border-blue-600' />
          </div>
          <div className='mb-4'>
            <input type="email" placeholder="Email" className='w-full p-2 rounded bg-gray-800 text-white border border-blue-600' />
          </div>
          <div className='mb-4'>
            <textarea placeholder="Message" rows="4" className='w-full p-2 rounded bg-gray-800 text-white border border-blue-600'></textarea>
          </div>
          <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300'>Send Message</button>
        </form>
      </section>  
    </>
  );
}

export default Content;