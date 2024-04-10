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
    updateStatus(newDone) {
      this.done = newDone;
    }
    markAsDone() {
      this.done = true;
    }
    updateTask(newTitle, newDescription, newFinishDate, newDone) {
      this.updateTitle(newTitle);
      this.updateDescription(newDescription);
      this.updateFinishDate(newFinishDate);
      this.updateStatus(newDone);
    }
}

module.exports = {
    Task,
}