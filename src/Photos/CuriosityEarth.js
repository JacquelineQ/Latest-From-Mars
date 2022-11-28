import React, { useState } from "react";

//going use useState with date and setDate equal to an empty string '', input for where
//value is dynamic ie value={date}, and with an onChange function that invokes
// setDate ie onChange={(e) => setDate(e.target.value)}, and e.target.value will
//be whatever date the use inputs and it will be saved to {date}

//Pretty sure I need a form component and a fetchPhotos component which takes the
// date value submitted in the form as a prop
function CuriosityEarth({FetchPhotosByDate}) {
    const [date, setDate] = useState('');
    const fetchPhotos = <FetchPhotosByDate />
    return (
        <>
        <form onSubmit={fetchPhotos}>
            <label>Choose and Earth Date:</label>
            <input 
            type="date"
            required
            value={date}
            min="2012-08-06"
            onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Search</button>
            <p>{date}</p>
        </form>
        </>
    )
}
export default CuriosityEarth;