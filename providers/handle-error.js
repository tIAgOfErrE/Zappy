module.exports = (res, err, type) => {
  // TODO: LOG
  const errorCodes = {
    unauthenticated: 401,
    'not-allowed': 403,
    'empty-message': 400,
    'wrong-password': 401,
    'missing-data': 400, 
    'user-already-exists': 401,
    'passwords-dont-match': 403,
    'user-not-found': 400,

  };
  res.status(errorCodes[type] || 400).send(type);
};
