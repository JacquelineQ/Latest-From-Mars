import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function PerseveranceEarth() {
    const [date, setDate] = useState('');
    const [photos, setPhotos] = useState([]);
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
	

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
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&earth_date=${date}`)
        .then((response) => {
            const photos = response.data.photos;
            setPhotos(photos);
        
              setRows(response)
              setPending(false);
          
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
            min="2021-02-18"
            onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        <div>
        <h1>Photos from {date}</h1>
        <DataTable columns={columns} data={photos} progressPending={pending} pagination />
        </div>
        </>
    )
}

export default PerseveranceEarth;