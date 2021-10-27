const findMatching = (drivers, x) => {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === x.toLowerCase();
  });
};

const fuzzyMatch = (drivers, x) => {
  return drivers.filter(function (driver) {
    return driver.startsWith(x);
  });
};

const matchName = (drivers, x) => {
  return drivers.filter(function (driver) {
    return driver.name === x;
  });
};
