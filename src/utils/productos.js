export const productos = [
  {
    id: 1,
    name: 'Retro Tripper',
    price: 550,
    stock: 4,
    img: "https://cdn11.bigcommerce.com/s-hadw03blus/images/stencil/1280x1280/products/165/3275/2020-SHARPEYE-SOLE-SOFTOP-CP-0506-TOP__80624.1577743288.png?c=2 ",
    category: "1",
    description:
      "inspired by the desire for a short and wide, with plenty of glide, fish alternative, for surfing punchy and powerful waves with confidence and control. the tripper is a great choice for any surfboarder who wants to be more than just a good rider.",
  },
  {
    id: 2,
    name: "FREAK flag BAG",
    price: 700,
    stock: 10,

    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/370/028/products/f8422bef-8752-4371-b23d-38c9d3827c4d-981b7b4b700493571d16552143627789-1024-1024.jpg",
    category: "2",
    description:
      "A radical small wave design based on maximum surface area for lift, stability and unbridled speed in tiny surf.",
  },
  {
    id: 3,
    name: "Average Joe",
    price: 800,
    stock: 4,

    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/370/028/products/e0e61ef1-a85a-4348-8327-6aeee4e9ac8c-64eea2c6241536022316552137267620-1024-1024.jpg",
    category: "3",
    description:
      "One of those is that surfers sometimes want something simple, fun, and easy to ride.Increase wave count, make more sections. The average Joe is geared towards the things that makes surfing fun.",
  },
  {
    id: 1,
    name: 'Retro Tripper',
    price: 550,
    stock: 4,
    img: "https://cdn11.bigcommerce.com/s-hadw03blus/images/stencil/1280x1280/products/165/3275/2020-SHARPEYE-SOLE-SOFTOP-CP-0506-TOP__80624.1577743288.png?c=2 ",
    category: "1",
    description:
      "inspired by the desire for a short and wide, with plenty of glide, fish alternative, for surfing punchy and powerful waves with confidence and control. the tripper is a great choice for any surfboarder who wants to be more than just a good rider.",
  },
  {
    id: 2,
    name: "FREAK flag BAG",
    price: 700,
    stock: 10,

    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/370/028/products/f8422bef-8752-4371-b23d-38c9d3827c4d-981b7b4b700493571d16552143627789-1024-1024.jpg",

    category: "2",
    description:
      "A radical small wave design based on maximum surface area for lift, stability and unbridled speed in tiny surf.",
  },
  {
    id: 3,
    name: "Average Joe",
    price: 800,
    stock: 4,

    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/370/028/products/e0e61ef1-a85a-4348-8327-6aeee4e9ac8c-64eea2c6241536022316552137267620-1024-1024.jpg",
    category: "3",
    description:
      "One of those is that surfers sometimes want something simple, fun, and easy to ride.Increase wave count, make more sections. The average Joe is geared towards the things that makes surfing fun.",
  },
  {
    id: 1,
    name: 'Retro Tripper',
    price: 550,
    stock: 4,
    img: "https://cdn11.bigcommerce.com/s-hadw03blus/images/stencil/1280x1280/products/165/3275/2020-SHARPEYE-SOLE-SOFTOP-CP-0506-TOP__80624.1577743288.png?c=2 ",
    category: "1",
    description:
      "inspired by the desire for a short and wide, with plenty of glide, fish alternative, for surfing punchy and powerful waves with confidence and control. the tripper is a great choice for any surfboarder who wants to be more than just a good rider.",
  },
  {
    id: 2,
    name: "FREAK flag BAG",
    price: 700,
    stock: 10,

    img: "https://cdn11.bigcommerce.com/s-hadw03blus/images/stencil/659x659/products/194/3283/2020-CHANNEL-ISLANDS-HIGH-5-0505-TOP__10201.1603227528.png?c=2",
    category: "2",
    description:
      "A radical small wave design based on maximum surface area for lift, stability and unbridled speed in tiny surf.",
  },
  {
    id: 3,
    name: "Average Joe",
    price: 800,
    stock: 4,

    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/370/028/products/e0e61ef1-a85a-4348-8327-6aeee4e9ac8c-64eea2c6241536022316552137267620-1024-1024.jpg",
    category: "3",
    description:
      "One of those is that surfers sometimes want something simple, fun, and easy to ride.Increase wave count, make more sections. The average Joe is geared towards the things that makes surfing fun.",
  }

];

const producto = {
  id: 1,
  name: "RNF RETRO",
  price: 600,
  stock: 5,

  img: "https://lostsurfboards.net/wp-content/uploads/2018/05/RNF.png",
  categoryId: "surfborad",
  description:
    "It features noticeable elements from the purist (mostly San Diego influenced) evolution of wide, split tailed “Fish”, and smashes them together with much of what we have learned in nearly 25 years of shaping and riding the RNF.",
};

export const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    },);
  });
};

export const traerProducto = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.find(prod=>prod.id===id));
    }, );
  });
};
export const traerProductoPorCategoria = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos.filter(prod=>prod.category===category));
    }, );
  });
};
