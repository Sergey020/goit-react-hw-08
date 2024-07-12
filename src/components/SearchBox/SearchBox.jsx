import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleInputChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleInputChange} />
    </>
  );
};

export default SearchBox;
