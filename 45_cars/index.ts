#!/usr/bin/env node
// Question 45: Cars: Create detailed car objects with flexible properties.

function storecarInfo (manufacturer:string,modelname:string,...extraoption:{[key:string]:any }[]):object{

    const carInfo ={
        manufacturer,
        modelname,
        ...Object.assign({},...extraoption)
    }
    return carInfo
    };
    
    let answer=storecarInfo('Honda','Civic',{color:'black'},{features:['navigation','power window','vxr']});
    
    console.log(answer);
    
    