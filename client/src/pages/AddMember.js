import React, { useState } from 'react';
import axios from 'axios';

const AddMember = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    roll: '',
    year: '',
    degree: '',
    project: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding member');
    }
  };

  return (
    <div>
      <h2>Add New Member</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {Object.keys(formData).map((key) =>
          key !== 'image' ? (
            <div key={key}>
              <label>{key.toUpperCase()}:</label><br />
              <input type="text" name={key} value={formData[key]} onChange={handleChange} required />
              <br />
            </div>
          ) : (
            <div key="image">
              <label>Image:</label><br />
              <input type="file" name="image" onChange={handleChange} required />
              <br />
            </div>
          )
        )}
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMember;
