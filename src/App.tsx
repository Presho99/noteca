import React from 'react';
import NoteProvider from './components/NoteProvider';
import NoteList from './components/NoteList';

import './App.css';

const App: React.FC = () =>{
  return (
    <NoteProvider>
          <div className="App">
<h1>Notes App</h1>
<NoteList/>
    </div>
    </NoteProvider>

  );
}

export default App;
