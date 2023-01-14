import {useState, useEffect} from "react";
import { Route, Routes, Link } from "react-router";
import { nanoid } from "nanoid";
import StartPage from "./components/StartPage";
import Preferences from "./components/preferences/Preferences";
import Quiz from "./components/Quiz";

function App() {
  
  const [categories, setCategories] = useState([])
  const [questions, setQuestions] = useState([])

  //get Categories
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

//get questions
useEffect(()=>{
  dataQuestions()
},[])


const dataQuestions = async() =>{
    const fetchData = await fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.difficulty}&type=multiple`)
    const response = await fetchData.json()
    const questionsData = response.results
    setQuestions(prevQuestions => questionsData)
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path='/Preferences' element={<Preferences categories={categories} data={data} setData={setData} />} />
        <Route path='/Quiz' element={<Quiz questions={questions} />} />
      </Routes>
    </>
  );
}

export default App;
