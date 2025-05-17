import { createSlice } from '@reduxjs/toolkit';

// Правильні імпорти зображень з кореневого assets
import iPhoneImage from '../../../assets/iphone.png';
import macbookImage from '../../../assets/mac.png';
import samsungImage from '../../../assets/phone.jpg';
import jeansImage from '../../../assets/jeans.jpg';
import tshirtImage from '../../../assets/tshirt.jpg';
import harryPotterImage from '../../../assets/harry-potter.jpg';
import book1984Image from '../../../assets/1984.jpeg';
import coffeeImage from '../../../assets/coffee.jpg';
import headphonesImage from '../../../assets/headphones.jpg';

const initialState = {
  products: [
    // Електроніка
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 999,
      description: '6.1-дюймовий дисплей, A17 Pro, 128GB',
      image: iPhoneImage,
      category: 'Електроніка',
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      price: 1199,
      description: '13.6-дюймовий, 8-core CPU, 8GB RAM',
      image: macbookImage,
      category: 'Електроніка',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23',
      price: 799,
      description: 'Dynamic AMOLED 120Hz, 50MP камера',
      image: samsungImage,
      category: 'Електроніка',
    },

    // Одяг
    {
      id: 4,
      name: 'Джинси Levi',
      price: 69,
      description: 'Класичні прямі джинси, сині',
      image: jeansImage,
      category: 'Одяг',
    },
    {
      id: 5,
      name: 'Футболка Nike',
      price: 25,
      description: 'Біла, 100% бавовна',
      image: tshirtImage,
      category: 'Одяг',
    },

    // Книги
    {
      id: 6,
      name: 'Гаррі Поттер і Філософський камінь',
      price: 15,
      description: 'Дж.К. Ролінґ, 2023 рік',
      image: harryPotterImage,
      category: 'Книги',
    },
    {
      id: 7,
      name: '1984',
      price: 12,
      description: 'Джордж Орвелл, класика',
      image: book1984Image,
      category: 'Книги',
    },

    // Інше
    {
      id: 8,
      name: 'Кава Lavazza',
      price: 8,
      description: '250г, 100% арабіка',
      image: coffeeImage,
      category: 'Продукти',
    },
    {
      id: 9,
      name: 'Навушники Sony WH-1000XM5',
      price: 349,
      description: 'Бездротові, шумозаглушення',
      image: headphonesImage,
      category: 'Електроніка',
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
