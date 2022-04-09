import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { api } from "../services/api"
import '../css/main.css'
import CardMovie from "../components/Card"

export default function Lancamentos(){
    let [movies, setMovies] = useState([])
    const getData = async () => {
        const result = await api.get("movie/upcoming")
        setMovies(result.data.results)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <Container>
            <Row>
                <Col>
                <div className="itens">
        {
          movies.map((item, index) =>(
           <CardMovie
           key={index}
           title={item.title}
           image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
           id={item.id}
           >     
           <p><strong>nota :</strong> {item.vote_average} / 10 </p>
           <p><strong>Estréia: </strong> {item.release_date.split('-').reverse().join('/')}</p>
           </CardMovie>
       ))
   }
  </div>
                
                </Col>
            </Row>
        </Container>
    )
}