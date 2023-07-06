import { CardImg, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
export function ListofNoticias({noticias}){
    return(
        <Container>
        <Row>
            {noticias.map((noticia)=>(
                <Col key={noticia.id}>
                    <Card style={{ width: '18rem' }}>
                        <CardImg variant='top' src={noticia.imagen}/>
                        <Card.Body>
                            <Card.Title>{noticia.title}</Card.Title>
                            <Card.Text>{noticia.contenido}</Card.Text>
                            <Button variant='primary'>Mas info</Button>
                        </Card.Body>
                    </Card>
                   
                </Col>
            ))}
        </Row>
        </Container>
    )
}
export function noNoticiaResult(){
    return(<p>No se econtro la noticia buscada</p>)
}
export function Noticias({noticias}){
    const hasNoticias = noticias?.length>0;
    return hasNoticias ? <ListofNoticias noticias={noticias}/>:<noNoticiaResult/>
}