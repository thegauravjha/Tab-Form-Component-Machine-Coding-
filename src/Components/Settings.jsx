import react from 'react';

const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevVale) => {
      return {
        ...prevVale,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div>
        <div className="field">
          Theme: <br />
          <div>
            <input
              type="radio"
              value="dark"
              name="theme"
              checked={theme.includes('dark') ? true : false}
              onChange={(e) => handleChange(e)}
            />
            <label>Dark</label>
          </div>
          <div>
            <input
              type="radio"
              value="light"
              name="theme"
              checked={theme.includes('light') ? true : false}
              onChange={(e) => handleChange(e)}
            />
            <label>Light</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
