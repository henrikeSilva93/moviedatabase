
import '../css/cast.css'

export default function Cast({img, role, actor}){
    return (
     <div className="card-container">
         <div className="card-img">
            <img src={img} alt="" srcset="" />
         </div>
         <div className="card-body">
             <p style={{fontSize:"0.8rem"}}>{actor}</p>
             <p style={{fontSize:"0.7rem"}}>{role}</p>
         </div>
     </div>
    )
}