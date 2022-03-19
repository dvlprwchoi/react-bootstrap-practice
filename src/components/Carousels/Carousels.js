import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Carousels() {
  return (
    <div className="carousels">
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/dev-blog-img-20220127.png?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3
              style={{ color: 'gold', fontSize: '10vw', paddingBottom: '1vw' }}
            >
              Dev Blog
            </h3>
            <p>
              <Button
                variant="success"
                href="https://woosik-dev-blog.netlify.app"
                target="_blank"
                size="lg"
              >
                Go to live site
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/covid-19-numbers-img-20211223.png?raw=true"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3
              style={{ color: 'gold', fontSize: '10vw', paddingBottom: '1vw' }}
            >
              Covid-19 Numbers
            </h3>
            <p>
              <Button
                variant="success"
                href="https://woosik-covid-19-numbers.netlify.app"
                target="_blank"
                size="lg"
              >
                Go to live site
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://github.com/dvlprwchoi/portfolio-2/blob/main/src/img/weather-dashboard-img-20211219.png?raw=true"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3
              style={{ color: 'gold', fontSize: '10vw', paddingBottom: '1vw' }}
            >
              Weather Dashboard
            </h3>
            <p>
              <Button
                variant="success"
                href="https://weather.woosikchoi.com"
                target="_blank"
                size="lg"
              >
                Go to live site
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
