const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'todo.json');

const readTodosFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if(err) {
      console.log(`ERR: READING FILE \n${err}`);
      cb(JSON.parse({}));
      return;
    }

    cb(JSON.parse(fileContent));
  })
}

const saveTodoToFile = (todo, res) => {
  fs.readFile(p, (err, fileContent) => {
    if(err) {
      console.log(`ERR: READING FILE \n${err}`);
      cb(JSON.parse({}))
      return;
    }

    const data = JSON.parse(fileContent);
    data.push(todo);
    fs.writeFile(p, JSON.stringify(data), err => {
      if(!err) {
        res.send(todo);
        return;
      }

      console.log(`ERR: ADDING TASK \n${err}`)
    })
  })
}

module.exports = class Todo {
  constructor(task) {
    this.task = task;
    this.isCompleted = false;
  }

  save(res) {
    const id = Math.floor(Math.random() * 10000);
    this.id = id;
    const todo = this;
    saveTodoToFile(todo, res);
  }

  static getTodos(cb) {
    readTodosFromFile((data) => {
      return cb(data);
    });
  }
}