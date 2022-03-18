import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Modals() {
  return (
    <div className="modals">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal 1</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This is a static modal</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger">Close</Button>
          <Button variant="success">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Modals;
