import { Link } from 'react-router-dom'
import "./preferences.css";
import SubmitForm from './SubmitForm'

const Preferences = (props) => {
    //get Categories
  
    return (
        <div className='start-form'>
        <div className='start-form-content'>
           <h1>Quizzical</h1>
           <p>Pick your preference to start</p>
           <SubmitForm categories={props.categories}  data={props.data} setData={props.setData}/>
        </div>
       </div>
  )
}

export default Preferences