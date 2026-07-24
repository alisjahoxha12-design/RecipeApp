import Logo from './magnific_digital-illustration-a-yo_2910195413.jpg'
import Recipe from './Recipe'
import Nacho from './ai-generated-a-classic-italian-antipasto-platter-with-olives-on-transparent-background-free-png.webp'

import './App.css'
function App() {
  return (
   <div>
<div id='home' className='bg-teal-950 min-h-screen'>

<nav className="bg-teal-950 fixed text-white w-full z-20 top-0 start-0  ">
  <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
    <a href="https://github.com/alisjahoxha12-design" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-13 rounded-full" alt="Recipe-App" />
        <h2>Recipe App</h2>
    </a>
    <button data-collapse-toggle="navbar-solid" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-solid" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" /><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /> 
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-secondary-soft">
        <li>
          <a href="#home" className="block py-2 px-3   bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#recipe" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Recipe</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
<img className='h-150 absolute top-50 left-300 ' src={Nacho} alt="" />
  <h1 className='absolute top-80 left-20 right-0 text-white text-7xl font-bold'>The Easiest Way <br />To Make Your <br /> Favorite Meals</h1>
  <h3 className='absolute top-140 left-20 right-0 text-white text-3xl'>Reddy to try some new recipes for you and your family ❤️</h3>
</div>
<div id='recipe' className='absolute top-240 left-0 right-0 '>
  <Recipe /> 

</div>
   </div>
  )
}
export default App