import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loading from '../components/loading'
import { api } from '../services/api'

export default function ActorDetails() {
    const {id} = useParams()
    const [actor, setActor] = useState({})

    const getAge = (bday) => {
        const [year, month, day] = bday.split("-")
       const data = new Date()
       const currentDay = data.getDate()
       const currentMonth = data.getUTCMonth()  + 1
       const currentYear = data.getUTCFullYear()
       if(currentDay < day && currentMonth < month ){
           return currentYear -  year- 1
       } else {
           return currentYear -  year  
       }
       
    }

const getActor = async () => {
    
    const result = await api.get(`/person/${id}`)
   setActor(result.data)

}

    useEffect(()=>{
        getActor()
       
    },[])
    
  return (
    <Container>
    <Row className="mt-5" >
    <Col>
    { Object.keys(actor).length === 0 &&  <Loading/>}
    <div className="poster d-flex justify-content-end">
        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" srcset="" />
    </div>
    </Col>
    <Col>
    <h1>{actor.name}</h1>
    <h5>Nacionalidade: {actor.place_of_birth}</h5>
    <h5>data de nascimento : {actor.birthday && actor.birthday.split('-').reverse().join("/")} ({actor.birthday &&  getAge(actor.birthday) } anos)</h5>
 
  
    <h2>biografia</h2>
    <p>{actor.biography}</p>


    </Col>
</Row>

</Container>
  )
}
