import react from 'react';

const Profile = ({ data, setData, error }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="field">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <span className="error-message">{error?.name}</span>
      </div>
      <div className="field">
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => handleChange(e)}
        />
        <span className="error-message">{error?.age}</span>
      </div>
      <div className="field">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <span className="error-message">{error?.email}</span>
      </div>
    </>
  );
};

export default Profile;
