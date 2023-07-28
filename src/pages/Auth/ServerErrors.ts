const ServerErrorMessages = {
  "auth/email-already-exists":
    "The provided email is already in use by an existing user. Each user must have a unique email.",
  "auth/wrong-password": "The given password doesn't match the user provided.",
  "auth/user-not-found": "The provided E-mail is invalid.",
  "auth/email-already-in-use":
    "The provided email is already in use by an existing user. Each user must have a unique email.",
  "auth/too-many-requests":
    "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
};

export default ServerErrorMessages;
