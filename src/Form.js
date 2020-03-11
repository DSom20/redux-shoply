import React, { useState } from 'react';
import { applyDiscount } from './actions';
import { useDispatch, useSelector } from 'react-redux';


function Form() {
  const [discountInputValue, setDiscountInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const availableDiscounts = useSelector(store => store.availableDiscounts);
  const currentDiscountKey = useSelector(store => store.currentDiscountKey);
  const dispatch = useDispatch();


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isAvailableDiscount = discountInputValue in availableDiscounts;
    if(isAvailableDiscount && !currentDiscountKey) {
      dispatch(applyDiscount(discountInputValue));
      setDiscountInputValue("");
      setErrorMessage(null)
    } else if (!isAvailableDiscount) {
      setErrorMessage(<div>That discount does not exist</div>);
    } else if (currentDiscountKey){
      setErrorMessage(<div>You cannot apply multiple coupons</div>);
    }
  }

  const handleChange = (evt) => {
    const value = evt.target.value;
    setDiscountInputValue(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="discount">Discount: </label>
      <input 
        id="discount" 
        name="discount" 
        value={discountInputValue}
        onChange={handleChange}/>
      {errorMessage}
    </form>
  )
}

export default Form;