import * as adidasHelper from "../ApiHelpers/AdidasHelper";
import * as wishlistHelper from "../ApiHelpers/WishlistHelper";
import _ from "lodash";
const SEARCH_API = "https://www.adidas.co.uk/api/suggestions/@searchTerm";

export function SearchForTerm(searchTerm, wishlist) {
  if (searchTerm.length > 0) {
    return fetch(_.replace(SEARCH_API, "@searchTerm", searchTerm))
      .then(response => response.json())
      .then(jsonResponse => adidasHelper.FormatResult(jsonResponse))
      .then(formattedResult =>
        wishlistHelper.MarkItemsFromWishlist(formattedResult, wishlist)
      );
  } else {
    return Promise.resolve([]);
  }
}
