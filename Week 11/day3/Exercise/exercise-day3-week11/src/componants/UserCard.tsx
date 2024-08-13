import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div >
      {name ? (
        <div>
          <h2>{name}</h2>
          {age !== undefined ? <p>Age: {age}</p> : <p>Age: Not provided</p>}
        </div>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  );
};

export default UserCard;