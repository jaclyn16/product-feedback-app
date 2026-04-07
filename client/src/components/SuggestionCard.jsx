function SuggestionCard({ item }) {
    return (
        <div className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.category}</p>

        </div>
    );
}

export default SuggestionCard;