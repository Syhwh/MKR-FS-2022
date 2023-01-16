/**
 * 
 * @param {object} array 
 * @param {number} index 
 * @param {string} title 
 * @returns Array of objects
 */
export const updateTask = (array, index, title) => {
  return array.map((element) => {
    if (element.id === index) {
      element.title = title;
    }
    return element;
  });
};