import { useEffect, useState } from "react";
import { createTableLikeArray, searchForValues } from "./Main";
import { TableRow } from "./Table";


const Search = (props) => {
  const { tableArray, length, breadth } = props;
  const [array, setArray] = useState([]);
  const [searchedValue, setSearchedValue] = useState(null);

  useEffect(() => {
    if (length !== 0 && breadth !== 0 && tableArray?.length > 0) {
      setArray(createTableLikeArray(length, breadth, tableArray));
    }
  }, [tableArray]);

  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const onHandleSearchChange = (e) => {
    setSearchedValue(e.target.value);
  };

  return (
    <div style={container}>
      <div style={{ margin: "10px" }}>
        <input
          id="length-input"
          type="text"
          maxLength={1}
          value={searchedValue}
          onChange={onHandleSearchChange}
          placeholder="Search Value"
        />
        <button
          onClick={() => {
            setArray(
              createTableLikeArray(
                length,
                breadth,
                searchForValues(array, searchedValue)
              )
            );
          }}
        >
          Search
        </button>
        
        &nbsp;

      </div>
      <br/>
      <div>
      {!array?.length ? (
        <h1>Cannot create grid</h1>
      ) : (
        <table  style={{ border: "2px solid black" }}>
          <tbody>
            {array?.map((item, index) => {
              return <TableRow  key={`tr-${index}`} tableRow={item} />;
            })}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};
export default Search