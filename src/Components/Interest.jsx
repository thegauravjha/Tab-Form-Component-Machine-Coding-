import react from 'react';

const Interest = ({ data, setData, error }) => {
  const { hobbies } = data;

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      hobbies: e.target.checked
        ? [...prevData.hobbies, e.target.value]
        : prevData.hobbies.filter((item) => item !== e.target.value),
    }));
  };

  return (
    <>
      <div className="field">
        Hobbies: <br />
        <div>
          <input
            type="checkbox"
            value="travel"
            name="hobbie"
            checked={hobbies.includes('travel')}
            onChange={(e) => handleChange(e)}
          />
          <label>Travel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="music"
            name="hobbie"
            checked={hobbies.includes('music')}
            onChange={(e) => handleChange(e)}
          />
          <label>Music</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="coding"
            name="hobbie"
            checked={hobbies.includes('coding')}
            onChange={(e) => handleChange(e)}
          />
          <label>Coding</label>
        </div>
      </div>
      <span className="error-message">{error?.hobbies}</span>
    </>
  );
};

export default Interest;
