export function convertISBN10to13(isbn10) {
    if (!/^\d{9}[\dX]$/.test(isbn10)) {
      throw new Error('Invalid ISBN-10 format');
    }
  
    isbn10 = isbn10.replace(/-/g, '');
  
    const isbn13Prefix = '978';
    let isbn13Body = isbn13Prefix + isbn10.substring(0, 9);
  
    let sum = 0;
    for (let i = 0; i < isbn13Body.length; i++) {
      const digit = parseInt(isbn13Body.charAt(i), 10);
      sum += i % 2 === 0 ? digit : digit * 3;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
  
    const isbn13 = isbn13Body + checkDigit;
    return isbn13;
}

