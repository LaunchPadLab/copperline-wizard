// Tiny form library for validating things
// Aka reinventing the wheel 101

// Utility function to check existence
function exists (prop) { return prop }

var VForms = function (constraints, masks) {

  var elements = {}

  /* FIELD */

  elements.Field = function (field) {
    // Instance variables
    var self = this
    this.field = $(field) // Field element
    this.input = this.field.find('input').first() // Input element
    this.isSelect = false // Whether input element is a select
    if (!this.input[0]) { 
      // If input doesn't exist, look for select
      this.input = this.field.find('select').first()
      this.isSelect = true
    } 
    this.property = this.input.attr('name') // Data property to validate

    // Keep track of whether the input has been interacted with
    this.dirty = false
    this.input.on('change', function () { 
      self.dirty = true 
      self.validate()
    })

    // Add span for error messages
    this.messageSpan = $('<span>').addClass('error-message').insertAfter(this.input)
    
    // Mask field if mask exists
    this.mask = masks[this.property]
    if (this.mask) this.input.mask(this.mask)

    // Validation function - returns null (no error) or error message
    this.validate = function () {
      var toValidate = {} // Object that will be validated
      var value = this.mask ? this.input.cleanVal() : this.input.val() // Unmask value if necessary
      toValidate[this.property] = value
      var errors = validate(toValidate, constraints)
      var message = (errors && errors[this.property]) ? errors[this.property][0] : null
      this.setErrorState(message)
      return message
    }

    // Update UI for errors
    this.setErrorState = function (message) {
      if (!this.dirty) return
      this.field.toggleClass('error', message !== null)
      this.messageSpan.text(message)
    }

    // Pass onchange to input 
    this.onChange = function (handler) {
      // Bind handler to change or input, based on element type
      return this.isSelect ? this.input.on('change', handler) : this.input.on('input', handler)
    }
  }

  /* FORM */

  elements.Form = function (fieldset, validateOnInit) {
    // Instance variables
    var self = this
    this.fieldset = $(fieldset) // Fieldset element
    this.nextButton = this.fieldset.find('[name="next"]').first() // "Next" button
    var fieldElements = this.fieldset.find('field').toArray()

    // For each field element, create Field object
    this.fields = fieldElements.map(function(field) {
      var fieldObject = new elements.Field(field)
      // Bind validations to changes
      fieldObject.onChange(function () { self.validate() })
      return fieldObject
    })

    // If there are fields, deactivate button until validations are passed
    if (this.fields.length) this.nextButton.addClass('disabled')

    // Validation function - validates all fields
    this.validate = function (forced) {
      var messages = this.fields.map(function (field) {
        if (forced) field.dirty = true
        return field.validate()
      }).filter(exists)
      this.setErrorState(messages)
    }

    // Update UI for errors
    this.setErrorState = function (messages) {
      this.nextButton.toggleClass('disabled', messages.length > 0)
    }

    if (validateOnInit) this.validate(true)
  }

  return elements
}
