import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Student Team Members Management</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Member</Link>
          <Link to="/view">View Members</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/view" element={<ViewMembers />} />
          <Route path="/members/:id" element={<MemberDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
