

export const TableRow = (props) => {
    const { tableRow } = props;
    return (
      <div>
        <tr>
          {tableRow.map((item, index) => {
            return (
              <td  rowspan="2"
                style={{
                  border: "1px solid black", 
                  color: item?.isSearched ? "red" : "black",
                }}
                key={`${item?.alphabet || "-"}_${index}`}
              >
                {item?.alphabet || "-"}
              </td>
            );
          })}
        </tr>
      </div>
    );
  };
  