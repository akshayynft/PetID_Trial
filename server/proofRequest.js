const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");

const humanReadableAuthReason = "Must be born before today and this time and be the owner of a pet";

const currentDate = new Date();
const currentDateTime = currentDate.toISOString();

const credentialSubject = {
  birthday: {
    $lt: currentDateTime, // Ensure birthday is less than the current date and time
  },
  isOwnerOfPet: true, // Set to true if the user is the owner of a pet
};

const proofRequest = KYCAgeCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
