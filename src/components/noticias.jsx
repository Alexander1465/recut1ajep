import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../App.css';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, DialogContentText } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'


function Noticias({ noti }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [cont, setCount] = useState(0)
    const [open,setOpen] = useState(false)

    const handleIconClick = () => {
        setOpen(true);
        setIsFavorite(true)
    };

    const handleIconClickD = () => {
        setIsFavorite(prev => !prev);
        setCount(isFavorite ? cont - 1 : cont + 1)
    };

    const handleInstagramClick = () =>  {
        console.log("Enviando por Instagram")
        setOpen(false);
    }

    const handleFacebookClick = () =>  {
        console.log("Enviando por Facebook")
        setOpen(false);
    }

    const hsndleClose = () => {
        setOpen(false);
    }

    return (
        <Box>
            <Card sx={{ width: 450, margin: "10px"  }}>
                <CardActionArea >
                    <CardActionArea sx={{display: "flex", justifyContent: "space-between"}}>
                        <CardActionArea sx={{marginLeft: "10px"}}>
                            <CardMedia sx={{ height: 30, width:30 }}
                                component="img"
                                image={noti.imgavat}
                            />
                        </CardActionArea>
                        <CardActionArea sx={{marginRight:"100px"}}>
                            <Typography variant="h5">{noti.title}</Typography>
                            <Typography variant='body2'>19 de octubre de 2024</Typography>
                        </CardActionArea>
                        <MoreVertIcon></MoreVertIcon>
                    </CardActionArea>
                    <CardMedia sx={{ height: 194 }}
                        component="img"
                        image={noti.imgsrc}
                        alt={noti.alt}
                    />
                    <CardContent>
                        <Typography variant="body2">
                            {noti.noticia}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea sx={{display:"flex", justifyContent:"left", marginLeft:"10px"}}>
                    <Typography>{`${cont + noti.num}`}</Typography>
                    <IconButton onClick={handleIconClickD}>
                        {isFavorite ? (
                            <FavoriteRoundedIcon   sx={{ color: "red" }}/>
                        ) : (
                            <FavoriteBorderRoundedIcon sx={{ color: "grey" }}/>
                        )}
                    </IconButton>
                    <IconButton onClick={handleIconClick}>
                    <ShareIcon />
                    </IconButton>
                    <Dialog 
                        open={open}
                        onClose={hsndleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle>{"Compartir"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            ¿A traves de que plataforma quieres compartir?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <IconButton onClick={handleInstagramClick} autoFocus><InstagramIcon></InstagramIcon></IconButton>
                            <IconButton onClick={handleFacebookClick} autoFocus><FacebookIcon></FacebookIcon></IconButton> 
                        </DialogActions>
                </Dialog>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default Noticias;