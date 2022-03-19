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

  const [show3, setShow3] = useState(false);
  const _show3 = () => {
    setShow3(true);
  };
  const _close3 = () => {
    setShow3(false);
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
        <div className="modal-3">
          <h3>Modal 3</h3>
          <Button variant="outline-success" size="lg" onClick={_show3}>
            Open backdrop modal 3
          </Button>

          <Modal
            show={show3}
            onHide={_close3}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal 3</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={_close3}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Modals;
