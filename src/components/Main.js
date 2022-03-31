export const generateAlphabets = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  export const ArrayForGrid = (length, breadth) => {
    const arrayForGrid = [];
    let totalNumberOfElements = length * breadth;
    while (!!totalNumberOfElements) {
      arrayForGrid.push({
        alphabet: generateAlphabets(),
        isSearched: false,
      });
      totalNumberOfElements = totalNumberOfElements - 1;
    }
    return arrayForGrid;
  };
  
  export const createTableLikeArray = (length, breadth, arrayForGrid) => {
    const outerArray = [];
    for (let i = 0; i < breadth; i++) {
      outerArray.push(arrayForGrid.splice(0, length));
    }
    return outerArray || null;
  };
  
  
  export const searchForValues = (tableArray, searchedValue) => {
    if (!!tableArray?.length && searchedValue) {
      const flatArray = [].concat(...tableArray);
      return flatArray?.map((item) => {
        if (item?.alphabet === searchedValue) {
          return {
            ...item,
            isSearched: true,
          };
        } else {
          return {
            ...item,
            isSearched: false,
          };
        }
      });
    }
    return tableArray;
  };
  