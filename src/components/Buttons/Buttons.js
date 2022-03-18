import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Buttons() {
  return (
    <div className="buttons">
      <h2>Buttons</h2>
      <h3>Regular button</h3>
      <Button>Hello</Button>
      <Button variant="success" size="sm">
        Hello
      </Button>
      <Button variant="dark" size="lg">
        Hello
      </Button>
      <Button variant="outline-danger">Hello</Button>
      <Button variant="outline-info">Hello</Button>
      <Button variant="outline-warning">Hello</Button>
      <Button
        variant="outline-success"
        href="https://woosikchoi.com"
        target="_blank"
        size="lg"
      >
        Woo-Sik's Website
      </Button>
      <Button as="input" type="submit" value="submit button name" />
      <Button as="input" type="reset" value="reset button name" />
      <Button
        variant="secondary"
        href="https://woosikchoi.com"
        target="_blank"
        size="sm"
      >
        Woo-Sik Choi's Portfolio
      </Button>
      <h3>CloseButton</h3>
      <h4>Active/disabled</h4>
      <CloseButton aria-label="Hide" />
      <CloseButton disabled aria-label="Hide" />
      <h3>ButtonGroup</h3>
      <h4>Grouping</h4>
      <ButtonGroup size="lg" className="mb-2">
        <Button variant="outline-danger">First in Group</Button>
        <Button variant="outline-info">Second in Group</Button>
        <Button variant="outline-warning">Third in Group</Button>
      </ButtonGroup>
      <h4>Dropdown</h4>
    </div>
  );
}

export default Buttons;
