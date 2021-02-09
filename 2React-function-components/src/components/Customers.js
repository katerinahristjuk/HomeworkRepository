/*Da se kreira nova aplikacija na isti 
princip kako na cas i dopolnitelna komponenta 
na primer User vo koja ke bidat prenesni 2 useri 
prethodno definirani vo App componentata 
so po minimum 3 atributi (na pr. ime,prezime,adresa )
kako i edna boolean vrednost i so pomos na
 conditional rendering na baza 
 na prethodno definiranata boolean vrednost 
 izdefinirana vo App da se prikaze edniot 
 ili pak drugiot user na ekran, istoto moze 
 da se napravi so uste edna komponenta so definirani 
 atributi po vas izbor ( da se iskoristat dvata 
    nacini na conditional rendering)*/

import React from 'react';

export function Customers (props){

    console.log(props);
    return(
        <div id="customers">
            <h2>First customer is {props.c1.name} {props.c1.surname}</h2>
            <h3>She is {props.c1.age}.</h3>
            {props.c1.job===true?
            <h3>She has a job.</h3>:
            <h3>She doesn`t have a job.</h3>}
            <br></br>
            <h2>Second customer is {props.c2.name} {props.c2.surname}</h2>
            <h3>He is {props.c2.age}.</h3>
            {props.c2.job===true?
            <h3>He has a full-time job.</h3>:
            <h3>He doesn`t have a job.</h3>}
        </div>
        
    )
}