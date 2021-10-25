export const getQueryWithFilters = (query, currentFilterOption) => {
    let { city, company, country } = currentFilterOption;
  
    if (city !== "Oraș" && city !== "Toate orașele")
      query = query + `&city=${city}`;
    if (country !== "Țară") query = query + `&country=${country}`;
    if (company !== "Toate companiile" && company !== "Companie")
      query = query + `&company=${company}`;
    console.log("from function", query);
    return query;
  };
  
  export const createQueryString = (
    searchWord,
    baseUrl,
    selectedPage = false
  ) => {
    let url = `${baseUrl}/search/?`;
    if (selectedPage) url = url + `&page=${selectedPage + 1}`;
  
    if (searchWord) {
      const encodedQuery = encodeURIComponent(searchWord);
      url = url + "&q=" + encodedQuery;
    }
    return url;
  };