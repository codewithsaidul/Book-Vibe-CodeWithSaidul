
import toast from 'react-hot-toast';

export const getReadBooks = () => {
    let readBooks = [];

    const storedReadBooks = localStorage.getItem('read-books');

    if (storedReadBooks) {
        readBooks = JSON.parse(storedReadBooks)
    }

    return readBooks
}


// Read Books Added on Localstorage
export const saveReadBooks = book => {
    let readBooks = getReadBooks();

    const isExist = readBooks.find(b => b.bookId === book.bookId);

    if (isExist) {
        return toast.error('Already Added!')
    }

    readBooks.push(book);

    localStorage.setItem('read-books', JSON.stringify(readBooks));
    toast.success('Successfully toasted!')

}


export const getWishlist = () => {
    let wishList = [];

    const storedReadBooks = localStorage.getItem('wish-books');

    if (storedReadBooks) {
        wishList = JSON.parse(storedReadBooks)
    }

    return wishList
}

// Wish List Added on Localstorage

export const saveWishlist = book => {

    let readBooks = getReadBooks();

    let wishList = getWishlist();

    const isExist = readBooks.find(b => b.bookId === book.bookId);
    

    if (isExist) {
        return toast.error('Already Added On Read Books!')
    } else {
        const isExistWishList = wishList.find(b => b.bookId === book.bookId); 

        if (isExistWishList) {
            return toast.error('Already Added WishList!')
        }
    }

    wishList.push(book);

    localStorage.setItem('wish-books', JSON.stringify(wishList));
    toast.success('Successfully toasted!')

}