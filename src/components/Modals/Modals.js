import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Modals() {
  const [show, setShow] = useState(false);
  const _show = () => {
    setShow(true);
  };
  const _close = () => {
    setShow(false);
  };

  return (
    <>
      <div className="modals">
        <h2>Modals</h2>
        <div className="modal-1">
          <h3>Modal 1 Static Markup</h3>
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
        <div className="modal-2">
          <h3>Modal 2</h3>
          <Button variant="outline-danger" size="lg" onClick={_show}>
            Open modal 2
          </Button>
          <Modal show={show} onHide={_close}>
            <Modal.Header closeButton>
              <Modal.Title>Modal 2</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>This is modal 2</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={_close}>
                Close
              </Button>
              <Button variant="success" onClick={_close}>
                Save changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Modals;
