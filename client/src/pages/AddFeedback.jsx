import { useState } from "react";

function AddFeeback() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Feature");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            title,
            category,
            description,
        });

        setTitle("");
        setCategory("Feature");
        setDescription("");
    };

    return (
        <div>
            <h1>Create New Feedback</h1>

            <form onSubmit={handleSubmit}>
                <h4>Feedback Title</h4>
                <p>Add a short, descriptive headline</p>
                <input
                    value={title}
                    onChange={(e) => setCategory(e.target.value)} />
                
                <h4>Category</h4>
                <p>Choose a category for your feedback</p>
                <select value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Feature</option>
                    <option>UI</option>
                    <option>Bug</option>
                </select>
                <h4>Feedback Detail</h4>
                <p>Include any specific comments on what should be improved, added, ect.</p>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <br />
                <br />
                <button type="button">Cancel</button>
                <button type="submit">Submit Feedback</button>

            </form>
        </div>
    );
}

export default AddFeeback;