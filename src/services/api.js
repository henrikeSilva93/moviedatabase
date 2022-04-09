import axios from "axios";

export  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type' : 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjZhZDYyNzJhNzYxMTc1MmY5NGFjYmE4OTgwMmE4NyIsInN1YiI6IjYyNTE3OWYyMmYxYmUwMmI5Yjk4MDVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0aeXrp2pySqRIZZOE54OZackzkH22jTjPwDaYXwO6ys'
    }
})

