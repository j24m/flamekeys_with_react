import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 1,
    image_url: "https://m.media-amazon.com/images/I/71pPm31LFkS._SY355_.jpg",
    title: "Hello Ganss Mech keyboard",
    brand: "Keyboard",
    rating: "4.5",
    discount: 20,
    price: 2299,
    category: "Keyboard",
  },
  {
    _id: 2,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2022/02/Ducky-One-3-Yellow-SF-5-min-scaled.jpg",
    title: "Ducky One 3SF Yellow Mech keyboard",
    brand: "Ducky",
    rating: 4.7,
    discount: 10,
    price: 13499.0,
    category: "Keyboard",
  },
  {
    _id: 3,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2022/01/GS-87C-HT-Verulia-3.jpg",
    title: "GS 87C-HT Mech keyboard",
    brand: "Hello Ganss",
    rating: 3.2,
    discount: 15,
    price: 13499.0,
    category: "Keyboard",
  },
  {
    _id: 4,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2022/01/GS-87C-D-Black-2-min-160x160.jpg",
    title: "GS 87C-D Mech keyboard",
    brand: "Hello Ganss",
    rating: "3.2",
    discount: 15,
    price: 6499.0,
    category: "Keyboard",
  },
  {
    _id: 5,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/11/RK71-BLACK-06.jpg",
    title: "RK71 Mechanical keyboard",
    brand: "Royal Kludge",
    rating: "4.2",
    discount: 20,
    price: 3899.0,
    category: "Keyboard",
  },
  {
    _id: 6,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/11/RK-G87_6-160x160.jpg",
    title: "RK g87 Mechanical keyboard",
    brand: "Royal Kludge",
    rating: "4.5",
    discount: 17,
    price: 3799.0,
    category: "Keyboard",
  },
  {
    _id: 7,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2020/02/b2_2XL-Extended.png",
    title: "Glorious 3XL mousepad",
    brand: "Glorious Model",
    rating: "4.8",
    discount: 15,
    price: 4299.0,
    category: "Mouse Pad",
  },
  {
    _id: 8,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/02/Glorious_Helios2-scaled.jpg",
    title: "Glorious Helios mousepad",
    brand: "Glorious Model",
    rating: "4.8",
    discount: 15,
    price: 1999.0,
    category: "Mouse Pad",
  },
  {
    _id: 9,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2022/01/Sea-Melody-5-min-160x160.jpg",
    title: "Sea Melody XL Deskmat",
    brand: "Varmilo",
    rating: "2.8",
    discount: 20,
    price: 2199.0,
    category: "Mouse Pad",
  },
  {
    _id: 10,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2022/01/Sakura-3-min-160x160.jpg",
    title: "Sakura deskmat XL mousepad",
    brand: "Varmilo",
    rating: "2.1",
    discount: 20,
    price: 2199.0,
    category: "Mouse Pad",
  },
  {
    _id: 11,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/06/Ducky_feather_BlackWhite_1-160x160.jpg",
    title: "Ducky Feather b&w mouse",
    brand: "Ducky",
    rating: 4.9,
    discount: 11,
    price: 4499.0,
    category: "Mice",
  },
  {
    _id: 12,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/06/Ducky_feather_Regular_1.jpg",
    title: "Ducky Feather mouse(Feather series)",
    brand: "Ducky",
    rating: 5,
    discount: 11,
    price: 4499.0,
    category: "Mice",
  },
  {
    _id: 13,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2020/06/Glorious_Model-O-PINK1-160x160.jpg",
    title: "Glorious Model O/O minus pink",
    brand: "Glorious Model",
    rating: 4.6,
    discount: 28,
    price: 4499.0,
    category: "Mice",
  },
  {
    _id: 14,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/07/Azure_Ducky_3-min-160x160.jpg",
    title: "Ducky Azure SA keycap",
    brand: "Ducky",
    rating: 4.0,
    discount: 10,
    price: 5299.0,
    category: "Mice",
  },
  {
    _id: 15,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/07/CottonCandy_1-min-scaled.jpg",
    title: "Ducky Afterglow SA keycap",
    brand: "Ducky",
    rating: 4.8,
    discount: 16,
    price: 5299.0,
    category: "Key Caps",
  },
  {
    _id: 16,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/02/GLorious_WH_AURA_TKL_angle_white_final-scaled.jpg",
    title: "Glorious White Aura Keycaps",
    brand: "Glorious Model",
    rating: 3.2,
    discount: 20,
    price: 2599.0,
    category: "Key Caps",
  },
  {
    _id: 17,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2021/06/C22BK203-RED-BLACK_1-scaled.jpg",
    title: "PBT Double Shot Keycap - Red/Black",
    brand: "Royal Kludge",
    rating: 2.4,
    discount: 20,
    price: 1599.0,
    category: "Key Caps",
  },
  {
    _id: 18,
    image_url:
      "https://www.meckeys.com/wp-content/uploads/2019/07/black_glossy_perspective-min.png",
    title: "Glorious Model O mouse",
    brand: "Glorious Model",
    rating: 4.1,
    discount: 11,
    price: 4049.1,
    category: "Key Caps",
    outOfStock: true,
  },
];
