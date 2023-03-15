import React from 'react';
import css from './Filter.module.css';
import { setFilterValue } from 'redux/filterSlise';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by Name
        <input
          className={css.inputstyle}
          type="text"
          value={value}
          onChange={e => {
            dispatch(setFilterValue(e.target.value));
          }}
          placeholder=" "
        />
      </label>
    </div>
  );
};

export default Filter;
