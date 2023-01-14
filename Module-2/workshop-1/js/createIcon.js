export const createIcon = (type, action) => {
  const icon = document.createElement('i');
  icon.classList = `fas ${type}`;
  // icon.classList = action;
  return icon;
};
