import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ModalSuccess({ show, handleShow, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{ padding: "62px", borderRadius: "15px" }}
      >
        <Modal.Header>
          <Modal.Title>Whoa, Question Saved Succesfully!</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Link to="/">
            <Button variant="secondary" onClick={handleClose}>
              Go Back Home
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSuccess;
