import React, { useState } from "react";
import { useState ,useEffect } from "react";


function App (){


    const [dog, setDog]= useState(null)

useEffect(()=>{

fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
    setDog(data.message);
});
},[]);
if (dog === null) return <p>Loading...</p>;



return(
<img src={dog} alt= "A Random Dog"/>

)


}
export default App ;