import React, {useState} from "react";

function AddToList ({updateList}) {
    const [formData, setFormData] = useState({description : "", image : "", location : ""});

    function handleSubmit (e) {
        e.preventDefault();
        const final = {...formData};
        fetch('http://localhost:6001/listings',{
            method : 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(final),
        })
        .then(r=>r.json())
        .then(newList => updateList(newList))
    }

    return (
        <form id="new-list-form" className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="description"
                placeholder="item goes here..."
                value={formData.description}
                onChange={e => setFormData({...formData, description : e.target.value})}
            />
            <input
                type="text"
                id="location"
                placeholder="location..."
                value={formData.location}
                onChange={e => setFormData({...formData, location : e.target.value})}
            />
            <input
                type="text"
                id="image"
                placeholder="image url here..."
                value={formData.image}
                onChange={e => setFormData({...formData, image : e.target.value})}
            />
            <button type="submit">submit</button>
        </form>
    )
}

export default AddToList;