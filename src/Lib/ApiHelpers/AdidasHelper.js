import _ from "lodash";

function mergeSeperatedPrice(price) {
  let formattedPrice = ["$", 0];
  if (price.length == 2) {
    for (var i = 0; i < 2; i++) {
      if (price[i].isCurrency) formattedPrice[0] = price[i].value;
      else formattedPrice[1] = price[i].value;
    }
  }
  return _.join(formattedPrice, "");
}

export function FormatResult(result) {
  if (_.has(result, "products")) {
    return _.map(result.products, prod => {
      return {
        name: prod.suggestion,
        image: prod.image,
        url: prod.url,
        rating: prod.rating,
        reviews: prod.reviews || 0,
        price: mergeSeperatedPrice(JSON.parse(prod.separatedSalePrice)),
        subName: prod.subTitle
      };
    });
  } else if (_.size(result) == 0) return null;

  return [];
}
