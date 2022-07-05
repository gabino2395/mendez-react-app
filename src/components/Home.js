import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// export default function WovenImageList() {

const Home = () => {
  return (
    <ImageList sx={{ width: 1000, height: 450}} variant="woven" cols={5} gap={8}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=161&fit=crop&auto=format`}
          srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  )
}

export default Home
const itemData = [
   
    
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
  ];
  