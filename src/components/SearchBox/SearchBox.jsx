import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);

  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
}
