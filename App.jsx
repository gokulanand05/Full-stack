import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="slam-container">
      <form className="slam-form">
        <h1 className="slam-title">Slam Book</h1>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Nickname:</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Favorite Color:</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Hobbies:</label>
          <textarea />
        </div>

        <div className="form-group radio-group">
  <label>Gender:</label>
  <div>
    <label><input type="radio" name="gender" value="male" /> Male</label>
    <label><input type="radio" name="gender" value="female" /> Female</label>
  </div>
</div>

<div className="form-group checkbox-group">
  <label>Interests:</label>
  <div>
    <label><input type="checkbox" name="interests" value="sports" /> Sports</label>
    <label><input type="checkbox" name="interests" value="music" /> Music</label>
    <label><input type="checkbox" name="interests" value="travel" /> Travel</label>
    <label><input type="checkbox" name="interests" value="reading" /> Reading</label>
  </div>
</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
