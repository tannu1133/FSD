import React from 'react';
import MovieList from './components/MovieList';

const App2 = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to the Movie Library</h1>
      </header>
      <main className="app-main">
        <MovieList />
      </main>
    </div>
  );
};

export default App2;