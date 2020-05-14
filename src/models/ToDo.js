class ToDo {
  constructor(value) {
    this.value = value;
    this.completed = false;
    this.createdAt = Date.now();
  }
}

export default ToDo;
