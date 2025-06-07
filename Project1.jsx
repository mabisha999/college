import {useState,useEffect} from "react"
import Marquee from "react-fast-marquee";
 function Project1(){
    const[userData8,setUserData8]=useState(null);
   

useEffect(()=>{
        fetch('http://127.0.0.1:8000/Api5')
        
.then((res) => res.json())
       .then((json) => {
              console.log(json)
                
                setUserData8(json);   
       })  
              
},[]);
    useEffect(() => {
console.log(userData8);
    }, [userData8]);

         
    return(
        <>
                   
    
                        
        <div className="sh">
                  <div className="sh1">
      <i className="fa fa-phone-square"></i> <p>1 (700) 987 6765</p> 
      
      

      <i className="fa fa-envelope"></i><p>abccollege12@mail.com</p> 
    </div>
    </div>
    <div className="sh3">
<div className="sh2">
            <img src="https://cdn.vectorstock.com/i/500p/08/40/opened-book-textbook-or-diary-icon-emblem-vector-46070840.avif" width="50px">
            </img>
            <h4>ABC college</h4>
                <ul className="menu11">
                     <li>Home</li>
                     <li>Pages</li>
                     <li>About</li>
                     <li>Courses</li>
                     <li>Academics</li>
                </ul>
                </div>
                
                </div>
                <div  className="outer">
                    <div className="inleft">

                        <div>       
                                <p className="w1">Welcome to ABC college </p>

                                <p className="w2">Let us think of education as the means of developing our greatest<br></br> 
                                abilities, because in each of us there is a private hope and dream <br></br> 
                                which fulfilled, can be translated into benefit for everyone <br></br>
                                and greater strength for our nation.</p>
                                <img src="https://img.freepik.com/premium-psd/happy-young-college-student-smiling-looking-into-camera-isolated-background_920413-2678.jpg?ga=GA1.1.1277499006.1748661057&semt=ais_hybrid&w=740" >
                                  </img>
                        </div>


                    </div>
                     <div className="inright">
                

                        <Marquee speed={50} gradient={false} pauseOnHover={true} direction="up" style={{marginTop:"30px"}}>
  {userData8 && userData8.map((item, n) => (
 
   
        <div key={n} className="play">
            <div className="play1" > <h3>{item.month}</h3><br></br>
               <h2>{item.date}</h2> <br></br> {item.year}
            </div>
            <div className="play2">
            
      
        <h2>{item.title}</h2><br />
       <h4> {item.description}</h4>
      </div>
       
      
   


    </div>
  ))}
</Marquee>


                    </div>

                </div>
            
                                    
        </>
    )
}   
export default Project1