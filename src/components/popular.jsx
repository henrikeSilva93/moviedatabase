import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom"
import { api } from "../services/api"

export default function Popular() {
    const [movie, setMovie] = useState([])

    const getMovie = async () => {
        const response = await api.get('movie/popular')
        setMovie(response.data.results)
    }

    useEffect(()=>{
        getMovie()
    },[])


    return (
        <div style={{marginLeft:"150px"}}>
        <h1>Filmes Populares</h1>
       <div style={{maxWidth:"1000px"}}>
       <Carousel>
        {movie.map(item =>(
            <Carousel.Item>
               <Link to={`detalhes/${item.id}`}><img
                style={{width:"1000px", height:"500px"}}
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt="First slide"
              />
              </Link>
              <Carousel.Caption>
                <Link  style={{textDecoration:"none", color:"#fff"}} to={`detalhes/${item.id}`}><h3>{item.title}</h3></Link>
                <p>{item.overview}</p>
              </Carousel.Caption>
              </Carousel.Item>
        ))}
        </Carousel>
        
       </div>
       </div>
    )
}