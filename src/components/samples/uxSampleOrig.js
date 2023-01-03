import React, { useState, useEffect } from 'react'
import { errorMap, fieldLengths } from '../../utils/formUtils'
import './samples.scss'

function UXOrigSample() {
  // Form contents Object, this is what we would 'submit' and will be populated using the form
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    ageBracket: '',
    phone: '',
    email: '',
    message: ''
  })

  /**
   *  Validation Object, any error messages from invalid inputs are stored in here to keep track of the form as a whole,
   * in the useEffect with this and it's nested objects as dependencies, we check if any of these have an error message,
   * which means there are some errors in the form and it should not be submitted so hasError = false
   */
  const [formValidation, setFormValidation] = useState({
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [hasError, setHasError] = useState(true)

  /**
   * UseEffect to check the formValidation state object and if it has any errors, then update the hasError state variable
   * This lets us know not to submit the form. We need to track each item in the formValidation object to ensure hasError is set correctly
   */
  useEffect(() => {
    const validationErrors = Object.entries(formValidation).some((el) => el[1]?.length > 0)
    setHasError(validationErrors)
  }, [
    formValidation,
    formValidation.firstName,
    formValidation.secondName,
    formValidation.ageBracket,
    formValidation.phone,
    formValidation.email,
    formValidation.message
  ])

  /**
   * Submit form handler, currently just logs out current formData state
   * @param {Object} event use event to preventDefault behavior/reloading page
   */
  const formSubmit = (event) => {
    event.preventDefault()
    console.log('submit form validation object: ', formValidation)
    console.log('submit hasErrors: ', hasError)
    if (!hasError) {
      console.log('submitting content: ', formData)
    }
  }

  /**
   * Validates the input, if the select is changed from the default it will be valid
   * If not the form will prompt use to change it on submit
   * Updates the formValidation object so we keep track of what errors are present
   * @param {String} id the id of the input being evaluated
   * @param {String} value the value of the input
   */
  const validateFormInput = (id, value, name) => {
    let isValid = true
    const maxFieldLength = errorMap[name].fieldLength
    const regExType = errorMap[name].regEx
    isValid = regExType ? (regExType.test(value) && value.length <= maxFieldLength) : name === 'select' || value.length <= maxFieldLength
    const errorText = !isValid ? errorMap[name].errorText : ''
    setFormValidation({ ...formValidation, [id]: value.length > 0 ? errorText : '' })
  }

  /**
   * Handler for updating an input and validating the contents
   * @param {Object} params change handler params
   */
  const handleFormChange = (params) => {
    const { id, value, name } = params.target
    const trimmedValue = value.trim()
    validateFormInput(id, trimmedValue, name)
    setFormData({ ...formData, [id]: trimmedValue })
  }

  /**
   * If there's no email error currently, no point proceeding with the rest of this function
   * If there is, then re-evaluate to see if the incorrect email is now correct using the onChange handler,
   * rather than leaving the error state/text on until user clicks off (onBlur)
   * @param {Object} params change handler parameters
   * @returns void
   */
  const handleEmailUpdated = (params) => {
    if (!formValidation.email) return
    const { id, value, name } = params.target
    const trimmedValue = value.trim()
    validateFormInput(id, trimmedValue, name)
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper m-3">
        <form onSubmit={formSubmit}>
          <fieldset className="m-3">
            <legend className="pl-3 p-1">
              Name
            </legend>
            <div className="row pl-3 mt-3">
              <label htmlFor="firstName" className="col-3 m-0">
                First Name:
              </label>
              <input
                type="text"
                name="name"
                id="firstName"
                onChange={handleFormChange}
                required
                className={`${formValidation.firstName.length > 0 && 'input-error'} col-5`}
              />
            </div>
            <div className="row px-3 mt-3">
              <div className="error-label px-3">
                {formValidation.firstName}
              </div>
            </div>
            <div className="row pl-3 mt-3">
              <label htmlFor="secondName" className="col-3 m-0">
                Second Name:
              </label>
              <input
                type="text"
                name="name"
                id="secondName"
                onChange={handleFormChange}
                required
                className={`${formValidation.secondName.length > 0 && 'input-error'} col-5`}
              />
            </div>
            <div className="row px-3 mt-3">
              <div className="error-label px-3">
                {formValidation.secondName}
              </div>
            </div>
          </fieldset>
          <label htmlFor="ageBracket" className="my-3 pl-3">
            Age Bracket:
          </label>
          <select id="ageBracket" name="select" defaultValue="" className="p-1" onChange={handleFormChange} required>
            <option disabled value="">
              Select an option
            </option>
            <option value="0-17">
              0-17
            </option>
            <option value="18-34">
              18-34
            </option>
            <option value="35-54">
              35-54
            </option>
            <option value="55-64">
              55-64
            </option>
            <option value="65+">
              65+
            </option>
          </select>
          <fieldset className="m-3">
            <legend className="pl-3 p-1">
              Contact
            </legend>
            <div className="row pl-3 my-3">
              <label htmlFor="phone" className="col-3 m-0">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleFormChange}
                required
                className={`${formValidation.phone.length > 0 && 'input-error'} col-5`}
              />
            </div>
            <div className="row px-3 mt-3">
              <div className="error-label px-3">
                {formValidation.phone}
              </div>
            </div>
            <div className="row pl-3 my-3">
              <label htmlFor="email" className="col-3 m-0">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleEmailUpdated}
                onBlur={handleFormChange}
                required
                className={`${formValidation.email?.length > 0 && 'input-error'} col-5`}
              />
            </div>
            <div className="row px-3 mt-3">
              <div className="error-label px-3">
                {formValidation.email}
              </div>
            </div>
          </fieldset>
          <div className="row m-3">
            <label htmlFor="message">
              Message:
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              onChange={handleFormChange}
              required
              rows={4}
              maxLength={fieldLengths.message}
              className={`${formValidation.message.length > 0 && 'input-error'} col-12`}
              placeholder="Enter message here."
            />
          </div>
          {/* <div className="error-label">
            {formValidation.message}
          </div> */}
          <button
            type="submit"
            disabled={hasError}
            className="submit-button m-3 p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default UXOrigSample
