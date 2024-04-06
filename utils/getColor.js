export default function (endPrice, startPrice) {
    const diffirencePrice = startPrice - endPrice

    switch (Math.sign(diffirencePrice)) {
        case 1:
            return 'text-green-500'
        case -1:
            return 'text-red-500'
        default:
            return 'text-gray-500'
    }
}