export const deleteTask = (array, index) => {
  return array.filter((element) => element.id != index)
}