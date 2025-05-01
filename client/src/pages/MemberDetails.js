import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <p>Loading...</p>;

  return (
    <div>
      <h2>{member.name}'s Details</h2>
      <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} width="200" />
      <p><strong>ID:</strong> {member.id}</p>
      <p><strong>Roll:</strong> {member.roll}</p>
      <p><strong>Year:</strong> {member.year}</p>
      <p><strong>Degree:</strong> {member.degree}</p>
      <p><strong>Project:</strong> {member.project}</p>
      <p><strong>Hobbies:</strong> {member.hobbies}</p>
      <p><strong>Certificate:</strong> {member.certificate}</p>
      <p><strong>Internship:</strong> {member.internship}</p>
      <p><strong>Aim:</strong> {member.aim}</p>
    </div>
  );
};

export default MemberDetails;
