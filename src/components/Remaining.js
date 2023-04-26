import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Budget from '../components/Budget';

const Remaining = () => {
  const { expenses } = useContext(AppContext);
  const [setBudget] = useState(0);
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
    }, 0);
    const remaining = Budget - totalExpenses;    

    const handleBudgetChange = (event) => {
        const newBudget = parseFloat(event.target.value);
        if (newBudget > remaining) {
            alert("The value cannot exceed remaining funds £{remaining}");
        } else {
        setBudget(newBudget);
        }
    };
}
export default Remaining
