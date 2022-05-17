import { padding, sizing } from '@mui/system';
import React from 'react'
import { NavLink } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import classes from './ImageGrid.module.css'

function ImageGrid(props) {

    let rows = Math.floor((props.media.length - 1) / 2 + 1);
    let cols = Math.floor(props.media.length > 2 ? 2 : props.media.length);
    let three = ['A','B','C'];

    React.useEffect(() => {
        localStorage.setItem("photosActive", "false");
    }, []);


    function getBorderRadius(index){
        const count = props.media.length;

        let TL = index === 0;
        let TR = count === 1 || index === 1;
        let BL = (count < 4 && index === 0) || (count === 4 && index === 2);
        let BR = count === index + 1;

        return `${TL ? '10px' : '0'} ${TR ? '10px' : '0'} ${BR ? '10px' : '0'} ${BL ? '10px' : '0'}`;
    }

    let gridStyle;
    if(props.media.length === 4){
        console.log('four');
        gridStyle = (rows, cols) => ({
            marginRight: '80px',
            marginTop: '5px',
            display: 'grid',
            boxSizing : 'border-box',
            gridTemplateColumns: `repeat(2, 1fr)`,
            gridTemplateRows: `repeat(2, 140.75px)`,
            gridGap: '2px',
        });
    }
    else if(props.media.length !== 3){
        gridStyle = (rows, cols) => ({
            marginRight: '80px',
            marginTop: '5px',
            display: 'grid',
            boxSizing : 'border-box',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: rows === 1 && cols === 2 ? `repeat(${rows}, 29vmin)` : `repeat(${rows}, 1fr)`,
            gridGap: '2px',
        });
    }
    
    else{
        gridStyle = (rows, cols) => (
            {
            marginRight: '80px',
            marginTop: '5px',
            display: 'grid',
            boxSizing : 'border-box',
            gridAutoFlow: 'column',
            gridTemplateAreas:  `'A B' 'A C'`,
            gridGap: '2px',
            
        });
    }

    let imageStyle;
    if(props.media.length !== 3){
        imageStyle = (rows, index) => ({
                cursor: 'pointer',
                width:`100%`,
                height: `100%`,
                objectFit: 'cover',
                borderRadius: getBorderRadius(index),
        });
    }
    else{
        imageStyle = (rows, index) => (
            {
            cursor: 'pointer',
            gridArea : three[index],
            width: "100%",
            height: `100%`,
            objectFit: 'cover',
            borderRadius: getBorderRadius(index),
        });
    }



    return (
        <div onClick={(e) => e.stopPropagation()} style={gridStyle(rows,cols)} className={classes.imageGrid}>
            {props.media.map((media, index) => {
                return (
                        <img key={index} style = {imageStyle(rows,index)} src={media} alt={media} 
                        onClick = {() =>     {window.history.pushState("", "", `/photos/status/${props.tweetId}/photo/${index + 1}`);
                        props.setPhotosActive(true);
                        props.setIncrement(prev => prev + 1)}} />
                );
            })}
        </div>
    )
}

export default ImageGrid