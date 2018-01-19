import _ from "lodash";

export function MarkItemsFromWishlist(searchResult, wishlist) {
  return _.map(searchResult, item => {
    let found = _.find(wishlist, { url: item.url });
    let retItem = { ...item, in_wishlist: false };
    if (found) {
      retItem.in_wishlist = true;
    }
    return retItem;
  });
}

export function removeSearchedItemFromWishlist(searchResult, removedItem) {
  return _.map(searchResult, item => {
    if (_.isEqual(item.url, removedItem.url)) {
      return { ...item, in_wishlist: false };
    }
    return { ...item };
  });
}

export function addSearchedItemToWishlist(searchResult, addedItem) {
  return _.map(searchResult, item => {
    if (_.isEqual(item.url, addedItem.url)) {
      return { ...item, in_wishlist: true };
    }
    return { ...item };
  });
}

export function removeFromWishlist(wishlist, removedItem) {
  return _.filter(wishlist, item => !_.isEqual(item.url, removedItem.url));
}

export function formatWishListItem(product) {
  return _.pick(product, [
    "name",
    "image",
    "url",
    "rating",
    "reviews",
    "price",
    "subName"
  ]);
}
