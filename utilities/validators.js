module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "The username cannot be empty";
  }
  if (email.trim() === "") {
    errors.email = "The email cannot be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "The email must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "The password must not be empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "The passwords do not match";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "The username cannot be empty";
  }
  if (password.trim() === "") {
    errors.username = "The password cannot be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
