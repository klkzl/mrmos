export default ADD_POSITION = 'add-position';

const addPosition = newPosition => ({ type: ADD_POSITION, position: newPosition });

export { addPosition };