import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {

  return (
    // <p>{patito}</p>,
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  );
}

export default App;