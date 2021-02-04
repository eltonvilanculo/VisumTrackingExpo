import React , {useState} from 'react'
import MapView from 'react-native-maps';
import {StyleSheet, Dimensions} from 'react-native' ;  
import {getInitialState , onRegionChange} from '../controllers/map.controller'
import {MarkerComponent} from './Marker' ; 


export const Map =({latitude , longitude})=>{
const [initialState, setInitialState] = useState(getInitialState)

const [lat ,setLat] = useState(-25.883276)
const [lng ,setLng] = useState(32.622872)

return(

    <MapView style={styles.map} minZoomLevel={6} maxZoomLevel ={20}>
    

            <MarkerComponent lat={latitude} lng = {longitude} />
    </MapView>
)
}
const styles = StyleSheet.create({
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });