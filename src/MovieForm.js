import React, {useState} from "react";


function MovieForm() {
    const [formData, setFormData] = useState({
        title: null,
        year: null,
        image_url: null,
        genre: null,
        duration: null,
        rated: null,
    })

    function handleFormChange(e) {
        const name=e.target.name;
        const value=e.target.value;
        const newFormData = {...formData, [name]: value}
        console.log("new Form Data ", newFormData)
        setFormData(newFormData)
    }


    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="title">Movie Title</label>
                    <input type="text" value={formData.title} name="title" class="form-control" id="title" placeholder="Enter movie title" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="year">Release Year</label>
                    <input type="text" value={formData.year} name="year" class="form-control" id="year" placeholder="Enter release year" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="image_url">Image URL</label>
                    <input type="text" value={formData.image_url} name="image_url" class="form-control" id="image_url" placeholder="Provide image url" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="duration">Duration</label>
                    <input type="text" value={formData.duration} name="duration" class="form-control" id="duration" placeholder="Provide duration in minutes" onChange={handleFormChange}/>
                </div>
                <div class="form-group">
                    <label for="genre">Genre</label>
                    <select name="genre" value={formData.genre} class="form-control" onChange={handleFormChange}>
                        <option value="select">Select Genre</option>
                        <option value="drama">Drama</option>
                        <option value="romance">Romance</option>
                        <option value="thriller">Thriller</option>
                        <option value="horror">Horror</option>
                        <option value="fiction">Fiction</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div class="form-group">
                <label for="rated">Rated</label>
                    <select name="rated" value={formData.rated} class="form-control" onChange={handleFormChange}>Rating
                        <option value="select">Select Rating</option>
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC17">NC-17</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}

export default MovieForm;