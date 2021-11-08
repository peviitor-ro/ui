export const getQueryWithFilters = (baseQueryStr, searchKey, currentFilterOption) => {
  let { city, company, country } = currentFilterOption;
  //const baseQueryStr = window.location.href;
  const queryStr = new URL(baseQueryStr);

  queryStr.searchParams.delete('page');

  if (searchKey) queryStr.searchParams.set("q", searchKey);
  if (country !== "Țară") queryStr.searchParams.set("country", country);
  if (city !== "Oraș") queryStr.searchParams.set("city", city);
  if (company !== "Companie") queryStr.searchParams.set("company", company);

  return queryStr.search;
};
