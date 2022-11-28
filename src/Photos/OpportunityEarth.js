import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function OpportunityEarth() {
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
        .get(`https://mars-photos.herokuapp.com//api/v1/rovers/opportunity/photos?api_key=DEMO_KEY&earth_date=${date}`)
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
            min="2004-01-25"
            max="2018-06-11"
            onChange={(e) => setDate(e.target.value)}
            />
        </form>
        <div>
        <h1>Photos from Earth Date: {date}</h1>
        <p>Click on an image to expand!</p>
        <DataTable columns={columns} data={photos} pagination />
        </div>
        </>
    )
}

export default OpportunityEarth;