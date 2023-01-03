export const fieldLengths = {
  name: 40,
  email: 100,
  message: 200
}

// Map for RegEx errorText and length for validation
export const errorMap = {
  name: {
    regEx: /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])?))*$/,
    errorText: `Names should be between 1-${fieldLengths.name} characters, using only letters, spaces, apostrophies, hyphens or dots.`,
    fieldLength: fieldLengths.name
  },
  phone: {
    regEx: /^[0-9]+$/,
    errorText: 'Please enter a valid phone number.',
    fieldLength: fieldLengths.name
  },
  select: {
    errorText: 'Please select an option.'
  },
  email: {
    regEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorText: 'Please enter a valid email addess.',
    fieldLength: fieldLengths.email
  },
  message: {
    errorText: `Messages must be no longer than ${fieldLengths.message} characters.`,
    fieldLength: fieldLengths.message
  }
}

