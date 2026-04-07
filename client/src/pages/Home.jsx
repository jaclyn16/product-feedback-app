import { useEffect, useState } from 'react'
import SuggestionCard from '../components/SuggestionCard.jsx';


function Home() {
  const [suggestions, setSuggestions] = useState([]);  //holds data from backend..

  // this runs when page loads
  useEffect(() => {
    fetch("/api/get-all-suggestions") //calls backend..
      .then(res => res.json()) //turns into json
      .then(data => {
        console.log(data);
        setSuggestions(data);  //saves to state
      })
      .catch(err => console.error(err));
  }, []);

  return (
   <div> 
      <h1>Frontend is running</h1>
      {suggestions.map((item) => (
  <SuggestionCard key={item.id} item={item}/>
      ))}
      
      </div>
      );
      
}

export default Home;