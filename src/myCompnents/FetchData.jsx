import React,{useState,useEffect} from 'react'
import axios from 'axios';
function FetchData() {
    const [profiles,setProfiles]=useState([]);

    const getProfile=()=>{
        const config={
            headers:{
                "Content-type":"application/json",
                authorization:"Access-Control-Allow-Origin"
            }
        }
        try{
            axios.get("http://localhost:5000/profile",config).then(res=>{
                let profiles=res.data;
                setProfiles(profiles);
                console.log(res.data);
            })
        }catch(err){
            console.error(err);
        }    
         
    }
    useEffect(()=>{
        getProfile();
    },[]);

  return (
    <>
        <ul>
            {/* {profiles.length > 0 ? ( */}
                {profiles.map((profile)=>
                    <li key={profile.id}>
                        <p>{profile.name}</p>
                    </li>)
                    // ) : (
                    // <h1>No Profile Found</h1>
                
            }
        </ul>
    </>
  )
}

export default FetchData;