
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export default function CardMovie({image,title, children, id}){
  const navigate = useNavigate()
    return (
        <Card style={{ width: '18rem', marginTop: '20px' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {children}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}