
import React from 'react';
import Styles from './Heading.module.css';


const Heading = (props) =>{

    const startHandler = (event)=>{
        props.onStart('true');
        let btn = event.target;
        btn.style.backgroundColor = '#ddd';
        btn.disabled = true;
        
    }

    const targetHandler = (event)=>{
        props.onTarget('true');
        let btn = event.target;
        btn.style.backgroundColor = '#ddd';
        btn.disabled = true;
    }
    const resetHandler = (event)=>{
        window.location.reload();
    }
    const searchHandler = (event)=>{
        props.onSearch();
        let btn = event.target;
        btn.style.backgroundColor = '#ddd';
        btn.disabled = true;
    }
    const drawWallHandler = (event)=>{
        props.onWall();
        let btn = event.target;
        btn.style.backgroundColor = '#ddd';
        btn.disabled = true;
    }
    return(
        <React.Fragment>
        <div className={Styles.Heading}>
            <button onClick={startHandler}>Start</button>
            <button onClick={targetHandler}>Target</button>
            <button onClick={drawWallHandler}>Wall</button>
            <button onClick={searchHandler}>Search</button>
            <button onClick={resetHandler}>Reset</button>
           
        </div>
   </React.Fragment>
    );
    
}

export default Heading;