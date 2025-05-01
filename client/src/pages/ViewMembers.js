import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then((res) => setMembers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Team Members</h2>
      <div className="card-container">
        {members.map(member => (
          <div key={member._id} className="card">
            <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} width="100" />
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.project}</p>
            <Link to={`/members/${member._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMembers;
