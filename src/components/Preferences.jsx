import { Link } from 'react-router-dom'

const Preferences = (props) => {
    //get Categories
  const getCategories = (
    <select
      onChange={handleData}
      value={props.data.category} 
    >
        <option default>Select a Category</option>
            {props.categories.map(category=>(
                <option key={category.id} > {category.name} </option>
            ))}
    </select>
  )

  //get data onChange
  function handleData(e){
    const{name, value, type, checked} = e.target
    props.setData(prevData =>{
        return{
             ...prevData,
             [name] : type === 'checkbox' ? checked : value
    }})
}

function handleSubmit(e){
    e.preventDefault()
    props.setData(data => data)
}
  
    return (
        <div className='start-form'>
        <div className='start-form-content'>
           <h1>Quizzical</h1>
           <p>Pick your preference to start</p>
    <div>
 
         <form 
          className='form-container' 
          onSubmit={handleSubmit} 
        >
            <input 
            type="text" 
            name='name' 
            placeholder='Name'
            value={props.data.name}  
            onChange={handleData} 
            />

        {getCategories}

        <select 
            name="difficulty"
            id=""
            value={props.data.difficulty}
            onChange={handleData}
            >
                <option default>Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

        <button type='submit' ><Link to='/Quiz'>Start</Link></button>

        </form>
    </div>
        </div>
       </div>
  )
}

export default Preferences