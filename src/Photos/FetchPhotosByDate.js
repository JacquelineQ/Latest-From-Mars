import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { date } from CuriosityEarth;

function FetchPhotosByDate(props) {
    const [photos, setPhotos] = useState([]);
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
	
    

    const columns = [
        {
          name: "Matian Sol",
          selector: (row) => row.sol,
        },
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
      
    
    useEffect(({date}) => {
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=${date}`)
        .then((response) => {
            const photos = response.data.latest_photos;
            setPhotos(photos);
        
              setRows(response)
              setPending(false);
          
        });

       

    }, []);


    
    return (
     
        <div>
        <h1>Latest Photos from the Curiosity Rover</h1>
        <DataTable columns={columns} data={photos} progressPending={pending} pagination />
        </div>
    );
}

export default FetchPhotosByDate