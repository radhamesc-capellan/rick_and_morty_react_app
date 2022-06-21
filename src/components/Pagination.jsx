import React from "react";
import Button from "react-bootstrap/Button";
import { ImNext, ImPrevious } from "react-icons/im";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <Button
              className="page-link outline-primary"
              onClick={handlePrevious}
            >
              <ImPrevious /> Previous
            </Button>{" "}
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <Button
              className="page-link outline-primary"
              onClick={handleNext}
            >
              Next <ImNext />
            </Button>{" "}
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
