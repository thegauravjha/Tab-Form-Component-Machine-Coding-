import react, { useState } from 'react';
import { initialData, tabs } from '../Utils/Config';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState({});

  const handlePrev = () => {
    setActiveTab((prevIndex) => (prevIndex !== 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    if (tabs[activeTab].validate(data, setError)) {
      setActiveTab((prevIndex) =>
        prevIndex < tabs.length - 1 ? prevIndex + 1 : tabs.length - 1
      );
    }
  };

  const handleSave = () => {
    // Call an API with data
    console.log('Save => ', data);
  };

  const ActiveTabCompoment = tabs[activeTab].component;
  return (
    <>
      <div className="tabs-heading">
        {tabs.map((tab, index) => (
          <div
            className="tab"
            key={index}
            name={tab.name}
            onClick={() => {
              if (tabs[activeTab].validate(data, setError)) {
                setActiveTab(index)
              }
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <ActiveTabCompoment data={data} setData={setData} error={error} />
      </div>
      <div className="buttons">
        {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSave}>Save</button>
        )}
      </div>
    </>
  );
};

export default Tabs;
