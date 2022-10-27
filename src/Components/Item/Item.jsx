import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const Item = ({ prod }) => {
  
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 320 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={ prod.URLimage }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prod.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prod.descripcion}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button 
        size="small" 
        color="primary"
        onClick={()=>{
          navigate(`/detail/${prod.id}`)
        }}
      >
        Ver producto
      </Button>
    </CardActions>
  </Card>
  )
}

export default Item