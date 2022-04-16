import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import CardMovie from '../components/Card'
import Loading from '../components/loading'
import { api } from '../services/api'

export default function ActorDetails() {
    const {id} = useParams()
    const [actor, setActor] = useState({})
    const [movies, setMovies] = useState([])

    const getAge = (bday) => {
        const [year, month, day] = bday.split("-")
       const data = new Date()
       const currentDay = data.getDate()
       const currentMonth = data.getUTCMonth()  + 1
       const currentYear = data.getUTCFullYear()
       if(currentDay > day && currentMonth >= month ){
           return ` (${currentYear -  year   } Anos )` 
       } else {
           return ` (${currentYear -  year  -1} Anos )`  
       }
       
    }
    const getDeathAge = (bday, deathDate) => {
        if(bday === undefined && deathDate === undefined) {
            return 
        }
        const [year, month, day] = bday.split("-")
        const [deathYear, deathMonth, deathDay] = deathDate.split("-")
     
       if(deathDay > day || deathMonth >= month ){
           return ` (${deathYear -  year  } Anos )` 
       } else {
           return ` (${deathYear -  year -1 } Anos )`  
       }
       
    }

const getActor = async () => {
    
    const result = await api.get(`/person/${id}`)
   setActor(result.data)

}

const getMoviesByActor = async () => {
  const  response = await api.get(`/person/${id}/movie_credits`)
    setMovies(response.data.cast)
}

    useEffect(()=>{
        getActor()
        getMoviesByActor()
       
    },[])
    
  return (
    <Container>
    <Row className="mt-5" >
    <Col>
    { Object.keys(actor).length === 0 &&  <Loading/>}
    <div className="poster d-flex justify-content-end">
        <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : "https://colegioclassea.com.br/wp-content/themes/PageLand/assets/img/avatar/avatar.jpg"} alt="" srcset="" />
    </div>
    </Col>
    <Col>
    <h1>{actor.name}</h1>
    <h5>Nacionalidade: {actor.place_of_birth}</h5>
    <h5>data de nascimento : {actor.birthday && actor.birthday.split('-').reverse().join("/")}  {actor.deathday === null && <span>{ actor.birthday && getAge(actor.birthday) }</span>}</h5>
    {actor.deathday !== null && <h5>Data de Falecimento : {actor.deathday && actor.deathday.split('-').reverse().join('/')} {getDeathAge(actor.birthday, actor.deathday)}</h5>}
  
    <h2>biografia</h2>
    <p>{actor.biography}</p>


    </Col>
</Row>
<Row>
    <Col>
    <h2>Filmes </h2>
    <div  style={{ display:"flex", gap:"15px", MaxWidth:"900px", overflowX:"scroll"}}>
    {
        movies.map(item =>(
            <Link style={{textDecoration:"none", color:"black"}} to={`/detalhes/${item.id}`}> 
            <CardMovie
            key={item.id}
            title={item.original_title}
            image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            >

            </CardMovie>
            </Link>
        ))
    }
    </div>
    </Col>
</Row>

</Container>
  )
}
