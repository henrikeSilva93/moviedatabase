import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Cast from "../components/cast"
import { api } from "../services/api"

export default function Details(){

   function  formatarData(string){
       let data = string.split('-').reverse().join('/')
        return data
    }
    
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const [cast, setCast] = useState([])
    const [director, setDirector] = useState({})

    const getMovie = async () => {
        const request = await api.get(`movie/${id}?language=pt-br`)
        setMovie(request.data)
    } 

    const getCast = async () => {
        const request = await api.get(`movie/${id}/credits?language=pt-br`)
        setCast(request.data.cast)
    let director = request.data.crew.filter(item => item.job === "Director"         
        )
        setDirector(director[0])
    }
    useEffect(()=>{
        getMovie()
        getCast()
    },[])
   
    return (
        <Container>
        <Row className="mt-5" >
        <Col>
        
        <div className="poster d-flex justify-content-end">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.tagline} srcset="" />
        </div>
        </Col>
        <Col>
        <h1>{movie.title}</h1>
        <h5 className="mt-3">Duração: {movie.runtime} minutos</h5>
        <h5>nota: {movie.vote_average} / 10 </h5>
        <h5>Estréia: {movie.release_date && formatarData(movie.release_date)}</h5>
        <h5>Diretor: {director.name && director.name}</h5>
      
        <h2>Sinópse</h2>
        <p>{movie.overview}</p>
        <h2>Elenco</h2>
        <div style={{ display:"flex", height:"430px", width: "600px", overflow:"auto"}}>
         {
             cast.map((item, index) => (
                 <Cast
                 key={index}
                 actor={item.name}
                 role={item.character}
                 img={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                 />
             ))
         }

        </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <h2>carregar relacionados</h2>
        
        </Col>
    </Row>
   </Container>
    )
}