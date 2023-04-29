import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { setBudget, currency } = useContext(AppContext);
  const [inputBudget, setInputBudget] = useState(2000);
  
  const handleInputChange = (e) => {
    setInputBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputBudget > 20000) {
      alert("The value cannot exceed {currency}20000");
      return;
    }

    setBudget(parseInt(inputBudget));
    setInputBudget('');
  };

  return (
    <div>
      Budget: {currency}{inputBudget}
      <form onSubmit={handleSubmit}>
        <input type="number" value={inputBudget} onChange={handleInputChange} />
        <button>Update Budget</button>
      </form>
    </div>
  );
};

export default Budget
