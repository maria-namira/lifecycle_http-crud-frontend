import "./AddForm.scss"
import { useState } from "react";
import PropTypes from "prop-types"

export default function AddForm(props) {
  const [inputValue, setInputValue] = useState('')
  const { handleAdd } = props;

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') return;
    handleAdd(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="app__form form">
      <h3 className="form__title">New Note</h3>
      <textarea
        onChange={handleChange}
        value={inputValue}
        name="text"
        cols="30"
        rows="10"
        className="form__textarea" />
      <button className="form__btn" />
    </form>
  )
}

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
}