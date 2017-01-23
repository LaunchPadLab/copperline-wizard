var constraints = {
  cardNumber: {
    presence: true,
    length: { is: 16 }
  },
  phoneNumber: {
    presence: true,
    length: { is: 10 }
  },
  email: {
    presence: true,
    email: true
  },
  fullName: {
    presence: true
  },
  street: {
    presence: true
  },
  city: {
    presence: true
  },
  start: {
    presence: true
  },
  zipCode: {
    presence: true,
    length: { is: 5 }
  },
  birthDate: {
    presence: true
  },
  yearFounded: {
    presence: true,
    length: { is: 4 }
  },
  numberOfEmployees: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 1
    }
  },
  SSN: {
    presence: true,
    length: { is: 9 }
  },
  annualRevenue: {
    presence: true,
    numericality: {
      greaterThanOrEqualTo: 0
    }
  },
  personalIncome: {
    presence: true,
    numericality: {
      greaterThanOrEqualTo: 0
    }
  }
}

var masks = {
  cardNumber: '0000-0000-0000-0000',
  phoneNumber: '(000) 000-0000',
  SSN: '000 00 0000'
}

function applyValidations (property) {
  var selector = '[name="' + property +'"]'
  var mask = masks[property]
  if (mask) $(selector).mask(mask)
  $(selector).change(function () {
    var user = {} // Default to empty user for now
    var value = mask ? $(this).cleanVal() : $(this).val() // Unmask value if necessary
    user[property] = value
    var errors = validate(user, constraints)
    if (errors && errors[property]) console.log(errors[property][0])
  })
}

var propertiesToValidate = Object.keys(constraints)

propertiesToValidate.forEach(applyValidations)



