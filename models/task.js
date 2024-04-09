class Task {
    constructor(id, title, description = '', finishDate = null, done = false) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.finishDate = finishDate;
      this.done = done;
    }
    updateTitle(newTitle) {
      this.title = newTitle;
    }
    updateDescription(newDescription) {
      this.description = newDescription;
    }
    updateFinishDate(newFinishDate) {
      this.finishDate = newFinishDate;
    }  
    markAsDone() {
      this.done = true;
    }
}

module.exports = {
    Task,
}