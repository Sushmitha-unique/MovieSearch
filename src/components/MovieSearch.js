import React,{useState} from 'react'
import axios from 'axios';
const MovieSearch = () => {
    const [moviename,setmoviename] = useState("");
    const [display,setdisplay] = useState([]);
     async function implementSearch(){
        try{
        const response = await axios.get("http://www.omdbapi.com/?",{
            params:{
             apikey:`99eb9fd1`,
             s:moviename
            }
        })
        console.log(response.data.Search)
        setdisplay(response.data.Search)
    }
    catch(error)
    {
        console.log(error)
    }
}
  return (
    <div>
            <input type='text' placeholder='enter movie name'
            onChange={(e)=>setmoviename(e.target.value)}
            value = {moviename}/>
            <button type="button" onClick={implementSearch}>search</button>
             <h1>{moviename}</h1> 
            {
                display.map(item =>(
                    <img   key={item.imdbID} src={item.Poster} alt ={item.Title}/>
                ))
            }
    </div>
  )
}
export default MovieSearch;