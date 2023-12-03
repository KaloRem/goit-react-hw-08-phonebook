import {
  FilterWrapper,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts-selectors';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" value={filterValue} onChange={onChangeFilter} />
    </FilterWrapper>
  );
};
