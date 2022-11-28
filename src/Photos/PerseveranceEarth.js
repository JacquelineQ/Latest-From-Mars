import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function PerseveranceEarth() {
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
        .get(`https://mars-photos.herokuapp.com//api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&earth_date=${date}`)
        .then((response) => {
            const photos = response.data.photos;
            setPhotos(photos);
        
              // setRows(response)
              // setPending(false);
          
        });

       

    }, [date]);

    return (
    //     <div className="earthDateForm">
    //     <form onSubmit={fetchPhotos}>
    //         <label><h1>Choose Earth Date:</h1></label>
    //         <input 
    //         type="date"
    //         required
    //         value={date}
    //         min="2021-02-18"
    //         onChange={(e) => setDate(e.target.value)}
    //         />
    //     </form>
    //     <div>
    //     <h3>Photos from {date}</h3>
    //     <DataTable columns={columns} data={photos} pagination />
    //     </div>
    //     </div>
    <>
    
      <form onSubmit={fetchPhotos}>
             <label><h1>Choose Earth Date:</h1></label>
             <input 
             type="date"
             required
             value={date}
             min="2021-02-18"
             onChange={(e) => setDate(e.target.value)}
             />
         </form>
      

      <div className="photoDisplay">
      <h2>Photos from Earth Date: {date}</h2>
      <p>Click on an image to expand!</p>
        <DataTable columns={columns} data={photos} pagination />
      </div>
    </>
    )
}

export default PerseveranceEarth;