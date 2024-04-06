export default function (endPrice, startPrice) {
    const differencePrice = startPrice - endPrice
    const precentPrice = differencePrice / endPrice * 100

    return precentPrice.toFixed(2)
}