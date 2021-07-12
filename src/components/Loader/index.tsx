import React from "react";
import noop from "lodash/noop";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import "./loader.scss";
import Spinner from "react-bootstrap/Spinner";

const LoaderDialog = ({ open, title, onClose }) => (
  <Modal
    show={open}
    onHide={onClose}
    dialogClassName="modal-90w"
    className="waiting"
  >
    <Modal.Header>
      <h2> {title}</h2>
      <h5>This may take a moment...</h5>
    </Modal.Header>
    <Modal.Body>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Modal.Body>
  </Modal>
);

LoaderDialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func
};

LoaderDialog.defaultProps = {
  title: "Processing . . . Please wait",
  open: false,
  onClose: noop
};

export default LoaderDialog;
