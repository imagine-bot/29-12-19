import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
  phone: string;
};

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePhone = (phone: string) => {
  const re = /^\d{10}$/;
  return re.test(phone);
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const addUser = () => {
    if (!validateEmail(email) || !validatePhone(phone)) {
      alert('Invalid email or phone number');
      return;
    }
    setUsers([...users, { name, email, phone }]);
    setName('');
    setEmail('');
    setPhone('');
  };

  const deleteUser = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <button onClick={addUser}>Add User</button>
      {users.map((user, index) => (
        <div key={index}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <button onClick={() => deleteUser(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;