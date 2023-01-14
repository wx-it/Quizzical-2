import {useState, useEffect} from "react";
import { Route, Routes, Link } from "react-router";
import { nanoid } from "nanoid";
import StartPage from "./components/StartPage";
import Preferences from "./components/Preferences";

function App() {


  //get Categories
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    categoriesData()
  }, [])
  
  const categoriesData = async() =>{
    const fetchData = await fetch('https://opentdb.com/api_category.php')
    const response = await fetchData.json()
    const data = response.trivia_categories
    setCategories(prevCategories => data)
  }

  const [data, setData] = useState({
    name: '',
    category: '',
    difficulty: ''
})


  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path='/Preferences' element={<Preferences categories={categories} data={data} setData={setData} categoriesData={categoriesData}  />} />
      </Routes>
    </>
  );
}

export default App;
