import generateId from '../utils/generateId';

class ToDo {
  constructor(value) {
    this.id = generateId();
    this.value = value;
    this.completed = false;
    this.createdAt = Date.now();
  }
}

export default ToDo;
