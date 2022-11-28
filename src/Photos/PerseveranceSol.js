import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function PerseveranceSol() {
    const [sol, setSol] = useState('');
    const [photos, setPhotos] = useState([]);
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
	

    const columns = [
        {
            name: "Earth Date",
            selector: (row) => row.earth_date,
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
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&sol=${sol}`)
        .then((response) => {
            const photos = response.data.photos;
            setPhotos(photos);
        
              setRows(response)
              setPending(false);
          
        });

       

    }, [sol]);

    return (
        <>
        <form onSubmit={fetchPhotos}>
            <label>Choose Martian Sol:</label>
            <input 
            type="number"
            required
            value={sol}
            onChange={(e) => setSol(e.target.value)}
            />
        </form>
        <div>
        <h1>Photos from Martian Sol: {sol}</h1>
        <DataTable columns={columns} data={photos} progressPending={pending} pagination />
        </div>
        </>
    )
}

export default PerseveranceSol;