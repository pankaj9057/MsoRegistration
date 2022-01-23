import Box from '@mui/material/Box';
import React from 'react'
import Typography from '@mui/material/Typography'; 
import Grid from '@mui/material/Grid';    
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
const itemData = [
    {
      img: '/images/Desktop.png',
      title: 'Desktop',
      rows: 3,
      cols: 4,
    },
    {
      img: '/images/IPAD H.png',
      title: 'IPAD H',
      rows: 3,
      cols: 3,
    },
    {
      img: '/images/IPAD V.png',
      title: 'IPAD V',
      rows: 2,
      cols: 2,
    },
    {
      img: '/images/IPAD HM.png',
      title: 'IPAD HM',
      cols: 2,
    },
    {
      img: '/images/IPhone H.png',
      title: 'IPhone H',    
      rows: 2,
      cols: 3,
    },
    {
        img: '/images/IPhone.png',
      title: 'IPhone', 
      rows: 2,
      cols: 2,
    },
    {
        img: '/images/IPhone HM.png',
      title: 'IPhone HM',
     
      cols: 2,
    } 
  ];
  
const Documentation = () => {   
 
    return (

        <div>

            <Box
                component="form"
                sx={{                   
                    display: 'flex-box'
                }}
                noValidate
                autoComplete="off"
            > 
                <Grid container
                    spacing={1}
                    columns={12}>
                    <Grid columns={12} container>
                        <Typography sx={{ m: 1 }} variant="h5">Documentation</Typography>
                    </Grid> 
                </Grid> 
                <ImageList 
      variant="woven"
      cols={4}  
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
           <ImageListItemBar position="below" title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
            </Box>
        </div>
    )
}
export default Documentation
