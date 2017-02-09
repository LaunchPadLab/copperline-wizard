// VForms is defined in validated-forms.js

var constraints = {
  cardNumber: {
    presence: true,
    length: { is: 16 }
  },
  companyName: {
    presence: true
  },
  phone: {
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
  title: {
    presence: true
  },
  street: {
    presence: true
  },
  city: {
    presence: true
  },
  state: {
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
    length: { is: 4 },
    numericality: {
      onlyInteger: true,
      // Allow 1800 - present year
      greaterThanOrEqualTo: 1600,
      lessThanOrEqualTo: new Date().getFullYear()
    }
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
  ein: {
    presence: true,
    numericality: {
      greaterThanOrEqualTo: 0
    }
  },
  corporationType: {
    presence: true
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
  phone: '(000) 000-0000',
  SSN: '000 00 0000',
  zipCode: '00000',
  yearFounded: '0000'
}

$(document).on('isReady', function () {
  // Intitialize VForms with validation constraints and masks
  var formCreator = new VForms(constraints, masks)
  // Add validations to each fieldset
  var forms = $('fieldset').toArray().map(function (fieldset) {
    return new formCreator.Form(fieldset)
  })
})
