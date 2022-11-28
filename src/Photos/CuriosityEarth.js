import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

//going use useState with date and setDate equal to an empty string '', input for where
//value is dynamic ie value={date}, and with an onChange function that invokes
// setDate ie onChange={(e) => setDate(e.target.value)}, and e.target.value will
//be whatever date the use inputs and it will be saved to {date}

//Pretty sure I need a form component and a fetchPhotos component which takes the
// date value submitted in the form as a prop
function CuriosityEarth() {
    const [date, setDate] = useState('');
    const [photos, setPhotos] = useState([]);
    // const setPending = React.useState(true);
    // const setRows = React.useState([]);
	

    const columns = [
        {
          name: "Matian Sol",
          selector: (row) => row.sol,
        },
        {
          name: "Camera",
          selector: (row) => row.camera.name,
          sortable: true
        },
        {
          name: "Image",
          cell: (props) => <a href={props.img_src} target="_blank" rel="noreferrer"><img src={props.img_src} width={60} alt="Mars"  /></a>,
         
        }
      ];
    const fetchPhotos = useEffect(() => {
        axios
        .get(`https://mars-photos.herokuapp.com//api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=${date}`)
        .then((response) => {
            const photos = response.data.photos;
            setPhotos(photos);
        
              // setRows(response)
              // setPending(false);
          
        });

       

    }, [date]);

    return (
        <>
        <form onSubmit={fetchPhotos}>
            <label>Choose Earth Date:</label>
            <input 
            type="date"
            required
            value={date}
            min="2012-08-06"
            onChange={(e) => setDate(e.target.value)}
            />
        </form>
        <div>
        <h1>Photos from {date}</h1>
        <p>Click on an image to expand!</p>
        <DataTable columns={columns} data={photos} pagination />
        </div>
        </>
    )
}
export default CuriosityEarth;