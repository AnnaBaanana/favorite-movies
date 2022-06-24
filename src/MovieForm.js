import React from "react";

function MovieForm() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="title">Movie Title</label>
                    <input type="text" name="title" class="form-control" id="title" placeholder="Enter movie title" />
                </div>
                <div class="form-group">
                    <label for="year">Release Year</label>
                    <input type="text" name="year" class="form-control" id="year" placeholder="Enter release year" />
                </div>
                <div class="form-check">
                    <label for="image_url">Image URL</label>
                    <input type="text" name="image_url" class="form-control" id="image_url" placeholder="Provide image url" />
                </div>
                <div class="form-check">
                    <label for="genre">Genre</label>
                    <input type="text" name="genre" class="form-control" id="genre" placeholder="Describe movie genre" />
                </div>
                <div class="form-check">
                    <label for="duration">Duration</label>
                    <input type="text" name="duration" class="form-control" id="duration" placeholder="Provide duration in minutes" />
                </div>
                <div class="form-check">
                <label for="rated">Rated</label>
                    <select name="rating">Rating
                        <option value="select">Select Rating</option>
                        <option value="PG13">PG-13</option>
                        <option value="R">R</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}

export default MovieForm;