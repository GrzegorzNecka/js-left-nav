'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
    navCase();
});

let toogle = document.getElementById('toggle'),
    body = document.body;

const navCase = () => {

        toogle.addEventListener('click', (e)=> {
        e.stopPropagation();
            
        if(body.classList.contains('active')){
            body.classList.remove('active');
        } else{
            body.classList.add('active');
        }   
        
        body.addEventListener('click', ()=>{
        body.classList.remove('active');
        })//.listener
                      
        document.getElementById('main-nav').addEventListener('click', (e)=> {
        e.stopPropagation();
        });//.listener
  
    });
}//.navCase
