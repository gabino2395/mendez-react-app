export const productos = [
  {
    id: 1,
    name: 'LOST "retro tripper"',
    price: 550,
    stock: 4,
    img: "https://lostsurfboards.net/wp-content/uploads/2022/05/retro_tripper.jpg",
    category: "surf",
    description:
      "inspired by the desire for a short and wide, with plenty of glide, fish alternative, for surfing punchy and powerful waves with confidence and control. the tripper is a great choice for any surfboarder who wants to be more than just a good rider.",
  },
  {
    id: 2,
    name: "FREAK FLAG BAG",
    price: 700,
    stock: 10,

    img: "https://lostsurfboards.net/wp-content/uploads/2019/06/LT-FF.png",
    category: "surfboard",
    description:
      "A radical small wave design based on maximum surface area for lift, stability and unbridled speed in tiny surf.",
  },
  {
    id: 3,
    name: "Average Joe",
    price: 800,
    stock: 4,

    img: "https://lostsurfboards.net/wp-content/uploads/2018/09/sabo.png",
    category: "surfboard",
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
  category: "surfborad",
  description:
    "It features noticeable elements from the purist (mostly San Diego influenced) evolution of wide, split tailed “Fish”, and smashes them together with much of what we have learned in nearly 25 years of shaping and riding the RNF.",
};

export const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const traerProducto = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(producto);
    }, 2000);
  });
};
