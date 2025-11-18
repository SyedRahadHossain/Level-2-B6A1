const formatValue = (input: unknown) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  }
};



const getLength = (input: string | any[]): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return 0;
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}



interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => (user.isActive === true));
};



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  let availabilityStatus: string;

  if (book.isAvailable === true) {
    availabilityStatus = "Yes";
  } else {
    availabilityStatus = "No";
  }
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityStatus}`
  );
};



function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let alreadyExists = false;

    for (let j = 0; j < result.length; j++) {
      if (arr1[i] === result[j]) {
        alreadyExists = true;
        break;
      }
    }

    if (!alreadyExists) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let alreadyExists = false;

    for (let j = 0; j < result.length; j++) {
      if (arr2[i] === result[j]) {
        alreadyExists = true;
        break;
      }
    }

    if (!alreadyExists) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}



interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products.reduce((totalPrice, product) => {
    const priceBeforeDiscount = product.price * product.quantity;

    if (product.discount !== undefined) {
      const discountAmount = priceBeforeDiscount * (product.discount / 100);
      const priceAfterDiscount = priceBeforeDiscount - discountAmount;
      return totalPrice + priceAfterDiscount;
    } else {
      return totalPrice + priceBeforeDiscount;
    }
  }, 0);
}


