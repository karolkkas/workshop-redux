import React, {useState} from 'react';
import {connect} from "react-redux";

import {handleAddTodo} from "../../store/entities/todos/actions";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function TodoPage({handleAddTodo}) {
  const [value, setValue] = useState('');
  const [isDone, setIsDone] = useState(false);
  const handleIsDoneChange = (e) => setIsDone(e.target.checked);
  const handleInputChange = (e) => setValue(e.target.value)
  const handleAddTodoClick = () => handleAddTodo(value, isDone);
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <TextField
          id="countValue"
          label="Set count"
          value={value}
          onChange={handleInputChange}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox checked={isDone} onChange={handleIsDoneChange} value={isDone}/>
          }
          label="Done?"
        />
        <Button variant="contained" size="small" onClick={handleAddTodoClick}>ADD</Button>
      </div>
    </div>
  );
}

export default connect(null, {handleAddTodo})(TodoPage);