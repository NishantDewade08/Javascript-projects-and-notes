//--------------------------------------Filter-------------------------------------------
let nums = [1, 2, 3 , 4, 5, 6, 7, 8, 9]

let lastNums = nums.filter((item) => item >= 5)
let lastNums2 = nums.filter(function(item, ind, arr) {
    // console.log(ind);
    // console.log(arr);
    return item > 2 && item <= 7
})
// console.log(lastNums2);

let books = [
    {
        title : 'book-1', genre : 'sci-fi', publish : 2001, edition : 2010
    },
    {
        title : 'book-2', genre : 'politics', publish : 2002, edition : 2010
    },
    {
        title : 'book-3', genre : 'crime', publish : 1987, edition : 2001
    },
    {
        title : 'book-4', genre : 'history', publish : 2001, edition : 2017
    },
    {
        title : 'book-5', genre : 'sci-fi', publish : 2012, edition : 2022
    },
    {
        title : 'book-6', genre : 'history', publish : 1993, edition : 2012
    }
]

let historyBooks = books.filter((bk) => bk.genre === 'history')
// console.log(historyBooks);

let sciAndHist = books.filter((book) => {
    return (book.genre == 'sci-fi' || book.genre == 'history') && book.publish >= 2001
})
// console.log(sciAndHist);

//--------------------------------------Map----------------------------------------------
let newNums = nums.map((num) => num + 10)

let nums2 = nums.map((num) => {
    return num * 10 + 5 - 2;
})
// console.log(nums2);
// chaining of functions*******
let nums3 = nums.map((num) => num + 10).map((num) => num * 3).filter((num) => num >= 45)
// console.log(nums3);

//--------------------------------------Reduce-------------------------------------------
const initialVal = 0
let sum = nums.reduce( (accumulator, currVal) => accumulator + currVal, initialVal)
// console.log(sum);

let product = nums.reduce((acc, curr) => acc * curr, 1)
// console.log(product);

const division = nums.reduce((acc, curr) => acc / curr, 1)
// console.log(division);