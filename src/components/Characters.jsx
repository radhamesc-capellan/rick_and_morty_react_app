import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'


const Characters = ({ characters }) => {
  return (
    <Row xs={1} md={4} className="g-4">
    {characters.map((item, index) => (
      <Col key={index}>
        <Card className="text-center" border="primary">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            <hr />
              <p>Location: {item.location.name}</p>
              <p>Specie: {item.species}</p>
              <p>Gender: {item.gender}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

    /*
    
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ Width: "10rem" }}>
            <img src={item.image} alt="char-img" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>Location: {item.location.name}</p>
              <p>Specie: {item.species}</p>
              <p>Gender: {item.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    */
  );
};

export default Characters;
