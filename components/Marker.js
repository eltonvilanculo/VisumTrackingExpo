import React , {useState} from 'react'
import { Marker } from 'react-native-maps';


export const MarkerComponent =({lat , lng})=>{

 


    return(

        <Marker
        coordinate={{ latitude : lat , longitude : lng }}
        image={require('../assets/imgs/imageedit_11_8333362316.png')}
        />

    )
}