import React from 'react';
import { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modale</h2>
              <p>
                Aenean porta tellus non arcu faucibus, vitae porta metus cursus.
                Nunc blandit id est nec lobortis. Duis vestibulum suscipit
                ullamcorper. Integer placerat tempor nisl eget tempus. Etiam
                elit lectus, feugiat et laoreet at, elementum eu erat. Praesent
                vehicula rhoncus dolor non efficitur. Ut quis euismod nibh, non
                suscipit sem. Cras ultrices dapibus dolor, a euismod orci. Etiam
                consectetur ligula faucibus justo bibendum, vel sodales quam
                euismod. Fusce eget velit eu diam scelerisque pretium. Sed
                tempus, lacus quis ullamcorper
              </p>
              <button onClick={toggleModal} className="close-modal">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
