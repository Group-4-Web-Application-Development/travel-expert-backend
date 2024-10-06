function generateBookingNo() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digit = "123456789";
  const randomCharacter = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let index = 0; index < 3; index++) {
    result = result.concat(randomCharacter(characters));
  }
  for (let index = 0; index < 3; index++) {
    result = result.concat(randomCharacter(digit));
  }
  return result;
}

module.exports = { generateBookingNo };
