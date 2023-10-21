import './index.css';
import axios from 'axios';

function App() {
  const handlechage=async (e)=>{
    e.preventDefault();

    const emai=e.target.firstname.value;
    try{
      const response= await axios.post('http://127.0.0.1:8000/login',{emai})


        if (response.status === 200) {
          console.log("Data submitted successfully.");
        } 
        else {
          console.error("Failed to submit data.");
        }
      } 
    catch (error) {
        console.error("Error:", error);
      }
    };
  
  return (
    <div className='flex flex-col'>
      <form onSubmit={handlechage} method='POST'>
        <label for="firstname">First name:</label>
        <input type="text" id='emai' name="firstname" /><br />
        <input type="submit" value="Submit"/>
      </form>
     
    </div>
  )
}

export default App
