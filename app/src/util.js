function isDefined(obj) {
  return (obj === null || typeof obj === 'undefined') ? false : true;
}

function truthy(obj) {
  return !!obj;
}

export {
  isDefined,
  truthy
}