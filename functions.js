const functions = {
  add: (num1, num2) => num1 + num2,
  // add: function(num1, num2) {
  //   return num1 + num2;
  // }
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Anin' };

    user['lastName'] = 'Huang';
    return user;
  }
}

module.exports = functions;