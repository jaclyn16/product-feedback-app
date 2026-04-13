import { useEffect, useState } from 'react'
import SuggestionCard from '../components/SuggestionCard.jsx';
import { useNavigate } from 'react-router-dom';
import emptyImg from "../assets/hero.png";



function Home() {
  const [suggestions, setSuggestions] = useState([]);//holds data from backend..
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // this runs when page loads
  useEffect(() => {
    let url = "/api/get-all-suggestions";
    if (selectedCategory !== "All") {
      url = `/api/get-suggestions-by-category/${selectedCategory}`;
    }
    setLoading(true);
    fetch(url) //calls backend..
      .then(res => res.json()) //turns into json
      .then(data => {
        console.log(data);
        setSuggestions(data);  //saves to state
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [selectedCategory]);

  return (
<div className="container">
      <div className="sidebar">
        <div className="logo-box">
          <h2>My Company</h2>
          <p>Feedback Board</p>
</div>
  
<div className="filters">
          <button
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => setSelectedCategory("All")}>All</button>
          <button
            className={selectedCategory === "UI" ? "active" : ""}
            onClick={() => setSelectedCategory("UI")}>UI</button>
          <button
            className={selectedCategory === "UX" ? "active" : ""}
            onClick={() => setSelectedCategory("UX")}>UX</button>
          <button
            className={selectedCategory === "Enhancement" ? "active" : ""}
            onClick={() => setSelectedCategory("Enhancement")}>Enhancement</button>
          <button
            className={selectedCategory === "Bug" ? "active" : ""}
            onClick={() => setSelectedCategory("Bug")}>Bug</button>
          <button
            className={selectedCategory === "Feature" ? "active" : ""}
            onClick={() => setSelectedCategory("Feature")}>Feature</button>
</div>
</div>
      <div className="main">
<div className="top-bar">
          <h3 className="suggestions-title">
            <span className="bulb">💡</span>
            {suggestions.length} Suggestions</h3>
          <button className="add-btn" onClick={() => navigate("/add-feedback")}>
            + Add Feedback</button>
          </div>
        
           <div className="cards"> 
          {loading ? (
            <p>Loading...</p>
          ) : suggestions.length === 0 ? (
              <div className="empty-state">
                <img src={emptyImg} alt="empty" />
                <h3>There is no feedback yet.</h3>
                <p>
                  Got a suggestion? Found a bug that needs to be squashed?
                  We love hearing about new ideas to improve our app.
                </p>
                <button className="add-button"
                onClick={() => navigate("/add-feedback")}>
               + Add Feedback
                </button>

              </div>
            ) : (
                suggestions.map((item) => (
                  <SuggestionCard key ={item.id} item={item}/>
                ))
          )}
      
      </div>
        </div>
      </div>
);
      
}

export default Home;