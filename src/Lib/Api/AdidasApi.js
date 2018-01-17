const SEARCH_API = "https://www.adidas.co.uk/api/suggestions/@searchTerm";

export function SearchForTerm(searchTerm) {
  if (searchTerm.length > 0) {
    return fetch(_.replace(SEARCH_API, "@searchTerm", searchTerm)).then(
      response => response.json()
    );
  }
  else
  {
      return Promise.resolve([]);
  }
}
