import ApiCaller from "./ApiCaller";
import { formatWishListItem } from "../ApiHelpers/WishlistHelper";

const BASE_URL = "http://localhost:3000/api/";
const RESOURCE_WISHLIST = "Wishlists";

export function AddToWishlist(product) {
  return ApiCaller.Post(BASE_URL + RESOURCE_WISHLIST, formatWishListItem(product));
}

export function GetWishlist() {
  return ApiCaller.Get(BASE_URL + RESOURCE_WISHLIST);
}

export function RemoveFromWishlist(productUrl) {
  var additionalUrl =
    "/removeFromWishlist?url=" + encodeURIComponent(productUrl);
  return ApiCaller.Delete(BASE_URL + RESOURCE_WISHLIST + additionalUrl);
}
