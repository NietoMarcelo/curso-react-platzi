import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodosEmpty } from '../TodosEmpty';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';

import { CreateTodoButton } from '../CreateTodoButton';

import { todoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(todoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

          <TodoList>
          {error && <TodosError/>}
          {loading && <TodosLoading/>}
          {(!loading && !searchedTodos.length) && <TodosEmpty/>}
  
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
            ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm></TodoForm>
            </Modal>
          )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
