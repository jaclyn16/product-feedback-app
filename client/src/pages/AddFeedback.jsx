import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/icons/icon-arrow-left.svg";

function AddFeeback() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Feature");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!description || description.trim() === "") {
            setError(true);
            return;
        }
        setError(false);

        await fetch("/api/add-one-suggestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                category,
                description,
            }),
        });
        navigate("/");

      
    };

     
    return (
    
        <div className="add-container">
            <div className="back-row"> 
                <button className="back-btn" onClick={() => navigate("/")}>
                    <img src={arrowLeft} alt="back" className="back-icon"/>
                Go Back
            </button>
</div>

            <div className="form-card">  
                <div className="icon-circle">
                    +
                </div>    
        
        <h2>Create New Feedback</h2>

            <form onSubmit={handleSubmit}>
                <h4>Feedback Title</h4>
                <p>Add a short, descriptive headline</p>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                
                <h4>Category</h4>
                <p>Choose a category for your feedback</p>
                <select value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Feature</option>
                        <option>UI</option>
                        <option>UX</option>
                        <option>Enhancement</option>
                    <option>Bug</option>
                </select>
                <h4>Feedback Detail</h4>
                <p>Include any specific comments on what should be improved, added, ect.</p>
                    <textarea
                        className={error ? "error" : ""}
                    value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    {error && <p className="error-text">Can't be empty</p>}
                <br />
                    <br />
                    <div className="btn-row"> 
            <button type="button" onClick={() => navigate("/")}>
                Cancel</button>
                <button type="submit">Submit Feedback</button>
</div>
            </form>
        </div>
        </div>
    );
}

export default AddFeeback;