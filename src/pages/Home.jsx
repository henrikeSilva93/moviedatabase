
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

import '../css/main.css'

import CardMovie from "../components/Card"
import {api} from '../services/api'



export default function Home () {
    let [movies, setMovies] = useState([])
    let[query, setQuery] = useState("")

    function handleInput(e){
        setQuery(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(query){
            api.get(`search/movie/?query=${query}`)
        .then(response => setMovies(response.data.results))
        }else {
            api.get("/list/80?language=pt-br")
            .then(response => setMovies(response.data.items))
        }
    }

    useEffect(()=>{
        api.get("/list/1?language=pt-br")
        .then(response => setMovies(response.data.items))
    },[])

    
    return (
     <Container>
         <Row>
             <Col className="mt-5 mb-5" style={{marginLeft: "350px"}}>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input className="input-search" type="text" value={query} onChange={handleInput} placeholder="buscar filme"></input>
             <button className="btn-search">buscar</button>
            </div>
            </form>
             </Col>
         </Row>
         <Row>
              <Col>
              <div className="itens">
             {
               movies.map((item, index) =>(
                <CardMovie
                key={index}
                title={item.title}
                image={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
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