import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FooterQuiz() {
  return (
    <Card className="text-center">
      <Card.Header>Quizzez Details</Card.Header>
      <Card.Body>
        <Card.Title>Triple H Global</Card.Title>
        <Card.Text>
          Digital Content creators
        </Card.Text>
        <Button variant='warning'>Want to know more.. </Button>
      </Card.Body>
      
    </Card>
  );
}

export default FooterQuiz;