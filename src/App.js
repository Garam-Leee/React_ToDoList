import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Head from './components/Head';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <Head />
        <TodoList />
        <TodoCreate />
      </Template>
    </TodoProvider>
  );
}

export default App;
