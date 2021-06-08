import React,{useEffect,useState} from 'react';


 const Home = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://api.staging-claribel.tech/api/csv/data-point').then((result)=>{
            result.json().then((resp)=>{
                console.warn("result",resp)
                setData(resp);
            })
        })
        
          
      
     }, [])
        
       console.warn(data);
     
   return (
       <>
        <div>
            <h1>Get the data</h1>
            <table border="2 px">
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Value</td>
                    <td>domain</td>
                </tr>
                {
                 data.map((item)=>{
                     return(
                        <tr>
                        <td>{item.
dataPointId}</td>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                        <td>{item.domain}</td>
                    </tr>
                     )
                  
                 })   
                }
            </table>
        </div>
       </>
   );
 }

 export default Home;