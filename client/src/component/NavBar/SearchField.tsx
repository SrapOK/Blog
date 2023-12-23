import { AiOutlineSearch } from "react-icons/ai";
import { useState, useRef, memo } from "react";

interface SearchFieldProps {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchField = memo((props: SearchFieldProps) => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value) {
      setIsActive(false);
    } else if (e.target.value) {
      setIsActive(true);
    }
    setSearchValue(e.target.value);
    props.onChangeHandler(e);
  };

  const onClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
    setIsActive(!isActive);
    if (!isActive) {
      inputRef.current.focus();
    }
    e.stopPropagation();
  };
  const onClickInput: React.MouseEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className=" outline-none flex align-middle py-1 gap-2">
        <AiOutlineSearch
          onClick={onClick}
          className={`cursor-pointer duration-100 text-gray-400 rounded ${
            isActive ? " text-blue-500" : "border-2"
          } `}
          size={28}
        ></AiOutlineSearch>
        <input
          onClick={onClickInput}
          maxLength={26}
          onChange={onChange}
          ref={inputRef}
          value={searchValue}
          className={` outline-none transition-all duration-700 utline-none border-b-2 ${
            isActive
              ? "opacity-100 border-blue-100"
              : "opacity-0 cursor-default"
          }`}
          type="text"
        />
      </div>
    </>
  );
});

export default SearchField;
