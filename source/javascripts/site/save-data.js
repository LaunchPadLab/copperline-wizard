// Save data from fieldset
// Callback should be called with (response, error)

function saveData(fieldset, callback) {
  var fieldsetID = $(fieldset).attr('id')
  console.log('Saving data from fieldset with id: ' + fieldsetID)
  // SAVE DATA HERE
  callback({}, null)
}