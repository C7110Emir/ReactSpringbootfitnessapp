import React from 'react'
import style from "./rightcontent.module.css"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {useEffect} from "react";


const MapContainer = () => {
    
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position) =>{
            defaultCenter.lat = position.coords.latitude
            defaultCenter.lng = position.coords.longitude
            
        })
    },[])


    

    
    const mapStyles = {        
      height: "100vh",
      width: "100vh"
    };
    
    const defaultCenter = {
        
        lat:null, 
        lng:null,
    }
    
    return (
       <LoadScript
         googleMapsApiKey='AIzaSyDgDGtxhNywkDxN8cBgFwvj7cYXCbEKHow'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
       </LoadScript>
    )
}
  
export default MapContainer;