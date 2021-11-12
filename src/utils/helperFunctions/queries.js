export const getQueryWithFilters = (baseQueryStr, searchKey, currentFilterOption) => {
  let { city, company, country } = currentFilterOption;
  const queryStr = new URL(baseQueryStr);
  queryStr.searchParams.delete('page');

  if (searchKey) queryStr.searchParams.set("q", searchKey);
  if (country !== "Țară") queryStr.searchParams.set("country", country);
  if (city !== "Oraș") queryStr.searchParams.set("city", city);
  if (company !== "Companie") queryStr.searchParams.set("company", company);

  return queryStr.search;
};


export const parseURLParams = (querystring) => {
  // parse query string
  const params = new URLSearchParams(querystring);
  const paramsObj = {};
  // iterate over all keys
  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      paramsObj[key] = params.getAll(key);
    } else {
      paramsObj[key] = params.get(key);
    }
  }
  return paramsObj;
};