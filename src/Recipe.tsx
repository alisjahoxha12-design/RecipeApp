import {useEffect,  useState} from "react";
import { FiSearch } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi";
import Logo from './magnific_digital-illustration-a-yo_2910195413.jpg'

interface Food {
  Name: string;
  Poster: string;
  Id: number;
  Ingridients: string;
}

const foodsearch = () => {
  const [query, setQuery] = useState<string>("");
  const [loading] = useState(false);
  const [error] = useState(null);
  const [, setPageNum] = useState(1);
      const [isOpen, setIsOpen] = useState(false); 
const [foodResult, setfoodResults] = useState<Food []>()
 console.log(foodResult);
 
 const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const toggleModal = () => 
  {
    setIsOpen(!isOpen);
  }
useEffect(() => {
    const fetchrecetaData = async () => {
    try{
        const response = await fetch(url + query)
        const data = await response.json ();
        setfoodResults(data.meals || []);
    }catch(error){
        console.error(error)
    }
};
fetchrecetaData();
}, [query])
  const handleSearch = async (e) => {
    e.preventDefault();
    setPageNum(1);
  };      

    return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className={`p-6 mb-8 relative`}>
      
          <h1 className={`text-5xl font-extrabold mb-6 text-center text-black`}>
            Difrent Kinds of Recipes
          </h1>
         
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`w-full px-4 py-3 pr-12 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                placeholder="Search for a food..."
                aria-label="Search a food"
            />
            <button
              type="submit"
                className={`absolute light-2 top-1/2 -translate-y-1/2 p-2 hover:text-blue-500 transition-colors`}
              aria-label="Submit search"
            >
                <FiSearch className="w-6 h-6" />
            </button>
                             </div>
          </form>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
          )}

        {error && (
            <div className="flex items-center justify-center gap-2 text-red-500 mb-6">
              <BiErrorCircle className="w-5 h-5" />
              <p>{error}</p>
                                </div>
                    )}

       
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodResult && foodResult.map((foodResult => (
       
              <div
                key={foodResult.id}
                className="group relative overflow-hidden    rounded-lg transition-shadow"
              >
                <div className="aspect-w-12 aspect-h-3">
                  <img
                    src={foodResult.strMealThumb}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <h3 className="text-left text-3xl font-extrabold">{foodResult.strMeal}</h3>
                  <div className="text-left text-neutral-500">
                  <h3>{foodResult.strCategory}</h3>
                  <h3>Country: {foodResult.strCountry}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm mb-2">
                       {foodResult.url}
                    </p>
                         
                      <button
                      onClick={toggleModal}
                      className="flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 absolute left-40 top-50 rounded-md text-sm transition-colors"
                      aria-label="Show ingridients"
                    >
                    Instrucions
                    </button>
                    
                    {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-white">
          <div className=" border-green-600 border border-5 rounded-lg overflow-hidden w-full max-w-4xl shadow-2xl  ">
            <div className="flex justify-between items-center p-5 border-b border-green-600  ">
            <h1>{foodResult.strMeal}</h1>
   
            </div>
                        <div className="p-5">
                        <h1 className="text-3xl font-bold">Ingridient:</h1>
                        <h1>{foodResult.strIngredient1}</h1>
                        <h1> {foodResult.strIngredient2}</h1>
                        <h1> {foodResult.strIngredient3}</h1>
                        <h1> {foodResult.strIngredient4}</h1>
                        <h1> {foodResult.strIngredient5}</h1>
                        <h1> {foodResult.strIngredient6}</h1>
                        <h1> {foodResult.strIngredient7}</h1>
                        <h1> {foodResult.strIngredient8}</h1>
                        <h1> {foodResult.strIngredient9}</h1>
                        <h1> {foodResult.strIngredient10}</h1>
                        <h1> {foodResult.strIngredient11}</h1>
                        <h1> {foodResult.strIngredient12}</h1>
                        <h1> {foodResult.strIngredient13}</h1>
                        <h1> {foodResult.strIngredient14}</h1>
                        <h1> {foodResult.strIngredient15}</h1>
                        <h1> {foodResult.strIngredient16}</h1>
                        <h1> {foodResult.strIngredient17}</h1>
                        <h1> {foodResult.strIngredient18}</h1>
                        <h1> {foodResult.strIngredient19}</h1>
                        <h1> {foodResult.strIngredient20}</h1>
                        <h1 className="text-3xl font-bold">Instructions:</h1>
                        <h2>{foodResult.strInstructions}</h2> 
                        <h1 className="text-3xl font-bold">Video:</h1>
                        <a href={foodResult.strYoutube}>{foodResult.strYoutube}</a></div>
            <div className="p-4">
              <button onClick={toggleModal} className="px-4 py-2 bg-gray-600 rounded">
                Close
              </button>
                </div>
          </div>
          </div>)}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="recipes">
 


      </div>
          </div>

          </div>
                        </div>
                                    </div>
                                  )))}
                  </div>

        
        </div>

            </div>
<footer className="bg-teal-950 text-white rounded-lg">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a  className="flex items-center">
                  <img src={Logo} className="h-7 me-3" alt="Recipe App Logo" />
                  <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Recipe App</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
           
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Follow me</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/alisjahoxha12-design/" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-default sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">© 2026 <a href="https://github.com/alisjahoxha12-design/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-body hover:text-heading">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/></svg>
                <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/></svg>
            <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>
                <span className="sr-only">GitHub account</span>
            </a>
          </div>
      </div>
    </div>
</footer>
          

        </div>
  );
};

export default foodsearch;[]