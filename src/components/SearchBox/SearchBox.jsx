import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.boxFindName}>
      <label className={css.findName}>
        Find contacts by name
        <input
          className={css.inputFindName}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
