import React, { useState } from "react";
import { connect } from "react-redux";
import { handleSaveNewQuestion } from "../Actions/questions";
import ModalSuccess from "./ModalSuccess";

function NewQuestion({ loggedUser, dispatch }) {
  const [options, setOptions] = useState({ optionOne: "", optionTwo: "" });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setOptions({ ...options, [e.target.id]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(
      handleSaveNewQuestion({
        optionOneText: options.optionOne,
        optionTwoText: options.optionTwo,
        author: loggedUser,
      })
    );
    handleShow();
  };

  return (
    <div className="new-question">
      <ModalSuccess
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <h1 className="new-question-title"> Create New Question </h1>
      <div className="new-inner-question">
        <h4 style={{ fontWeight: 100 }}>Complete the question</h4>
        <h3>Would you rather...</h3>
        <form>
          <input
            type="text"
            placeholder="Enter First Option"
            id="optionOne"
            onChange={handleChange}
          />
          <br />
          <h5>
            <span>OR</span>
          </h5>
          <input
            type="text"
            placeholder="Enter Second Option"
            id="optionTwo"
            onChange={handleChange}
          ></input>
        </form>
        <button
          className="btn new"
          onClick={handleSubmit}
          disabled={options.optionOne === "" || options.optionTwo === ""}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ loggedUser }) => {
  return { loggedUser };
};

export default connect(mapStateToProps)(NewQuestion);
