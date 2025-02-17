import React from 'react';
import mydiv from './Pages/importdiv';

export default function PublicUI() {
  return (
    <div className={mydiv}>
      <h1>Login</h1>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <button>Login</button>
    </div>
  );
}