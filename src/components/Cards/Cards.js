import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cards() {
  return (
    <div className="cards">
      <h2>Cards</h2>
      <Card border="success" style={{ width: '30rem' }}>
        <Card.Img
          variant="top"
          src="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/dev-blog-img-20220127.png?raw=true"
        />
        <Card.Body>
          <Card.Title>Woo-Sik's Dev Blog Platform</Card.Title>
          <Card.Text>
            This app is built with ReactJS and Google Firebase.
          </Card.Text>
          <Button
            variant="outline-success"
            href="https://woosik-dev-blog.netlify.app"
            target="_blank"
            size="lg"
          >
            Go to live site
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '10em' }}>
        <Card.Img
          variant="top"
          src="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/dev-blog-img-20220127.png?raw=true"
        />
        <Card.Body>
          <Card.Title>Woo-Sik's Dev Blog Platform</Card.Title>
          <Card.Text>
            This app is built with ReactJS and Google Firebase.
          </Card.Text>
          <Button
            variant="outline-success"
            href="https://woosik-dev-blog.netlify.app"
            target="_blank"
            size="lg"
          >
            Go to live site
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
        <Card.Img
          variant="top"
          src="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/dev-blog-img-20220127.png?raw=true"
        />
        <Card.Body>
          <Card.Title>Woo-Sik's Dev Blog Platform</Card.Title>
          <Card.Text>
            This app is built with ReactJS and Google Firebase.
          </Card.Text>
          <Button
            variant="outline-success"
            href="https://woosik-dev-blog.netlify.app"
            target="_blank"
            size="lg"
          >
            Go to live site
          </Button>
        </Card.Body>
      </Card>
      <Card border="danger">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Header: Featured</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="warning" size="sm">
            Go somewhere
          </Button>
        </Card.Body>
        <Card.Footer>This is footer</Card.Footer>
      </Card>
    </div>
  );
}

export default Cards;
