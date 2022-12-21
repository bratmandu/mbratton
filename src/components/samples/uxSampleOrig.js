import React, { useState, useEffect } from 'react'
import './samples.scss'

function UXOrigSample() {
  // Form contents Object
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    ageBracket: '',
    phone: '',
    email: '',
    message: ''
  })

  // Validation Object
  const [formValidation, setFormValidation] = useState({
    firstNameError: '',
    secondNameError: '',
    phoneError: '',
    emailError: '',
    messageError: ''
  })

  const [hasError, setHasError] = useState(true)

  // RegEx for validation and error phrases
  const nameRegEx = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])?))*$/
  const phoneRegEx = /^[0-9]+$/
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const nameError = 'Names should be between 1-40 characters, using only letters, spaces, apostrophies, hyphens or dots.'
  const phoneError = 'Please enter a valid phone number.'
  const emailError = 'Please enter a valid email addess.'
  const messageError = 'Messages must be no longer than 280 characters.'

  /**
   * UseEffect to check the formValidation state object and if it has any errors, then update the hasError state variable
   * This lets us know not to submit the form
   */
  useEffect(() => {
    const validationErrors = Object.entries(formValidation).some((el) => el[1].length > 0)
    setHasError(validationErrors)
  }, [formValidation])

  /**
   * Submit form handler, currently just logs out current formData state
   * @param {Object} event use event to preventDefault behavior/reloading page
   */
  const formSubmit = (event) => {
    event.preventDefault()
    console.log('submit content: ', formData)
  }

  /**
   * Validates the input, using a a switch to handle the different input types
   * Updates the formValidation object so we keep track of what errors are present
   * @param {String} id the id of the input being evaluated
   * @param {String} value the value of the input
   */
  const validateFormInput = (id, value) => {
    let isValid = true
    let errorText = ''

    switch (id) {
      case 'firstName':
        isValid = nameRegEx.test(value) && value.length < 40
        errorText = !isValid ? nameError : ''
        setFormValidation({ ...formValidation, firstNameError: errorText })
        break
      case 'secondName':
        isValid = nameRegEx.test(value) && value.length > 0 && value.length < 40
        errorText = !isValid ? nameError : ''
        setFormValidation({ ...formValidation, secondNameError: errorText })
        break
      case 'phone':
        isValid = phoneRegEx.test(value) && value.length > 0 && value.length < 40
        errorText = !isValid ? phoneError : ''
        setFormValidation({ ...formValidation, phoneError: errorText })
        break
      case 'email':
        isValid = emailRegEx.test(value) && value.length > 0 && value.length < 40
        errorText = !isValid ? emailError : ''
        setFormValidation({ ...formValidation, emailError: errorText })
        break
      case 'message':
        isValid = true
        errorText = !isValid ? messageError : ''
        setFormValidation({ ...formValidation, messageError: errorText })
        break
      default:
        break
    }
  }

  /**
   * Handler for updating an input and validating the contents
   * @param {Object} params change handler params
   */
  const handleFormChange = (params) => {
    const { id, value } = params.target
    const trimmedValue = value.trim()
    validateFormInput(id, trimmedValue)
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
    if (!formValidation.emailError) return
    const { id, value } = params.target
    const trimmedValue = value.trim()
    validateFormInput(id, trimmedValue)
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form onSubmit={formSubmit}>
          <fieldset>
            <legend>
              Name
            </legend>
            <label htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              onChange={handleFormChange}
              required
              className={`${formValidation.firstNameError.length > 0 && 'input-error'}`}
            />
            <div className="error-label">
              {formValidation.firstNameError}
            </div>
            <label htmlFor="secondName">
              Second Name:
            </label>
            <input
              type="text"
              id="secondName"
              onChange={handleFormChange}
              required
              className={`${formValidation.secondNameError.length > 0 && 'input-error'}`}
            />
            <div className="error-label">
              {formValidation.secondNameError}
            </div>
          </fieldset>
          <label htmlFor="ageBracket">
            Age Bracket:
          </label>
          <select id="ageBracket" defaultValue="" onChange={handleFormChange} required>
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
          <fieldset>
            <legend>
              Contact
            </legend>
            <label htmlFor="phone">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              onChange={handleFormChange}
              required
              className={`${formValidation.phoneError.length > 0 && 'input-error'}`}
            />
            <div className="error-label">
              {formValidation.phoneError}
            </div>
            <label htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              id="email"
              onChange={handleEmailUpdated}
              onBlur={handleFormChange}
              required
              className={`${formValidation.emailError.length > 0 && 'input-error'}`}
            />
            <div className="error-label">
              {formValidation.emailError}
            </div>
          </fieldset>
          <label htmlFor="message">
            Message:
          </label>
          <input
            type="text"
            id="message"
            onChange={handleFormChange}
            required
            className={`${formValidation.messageError.length > 0 && 'input-error'}`}
          />
          <div className="error-label">
            {formValidation.messageError}
          </div>
          <button type="submit" disabled={hasError} className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default UXOrigSample
