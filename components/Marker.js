import React , {useState} from 'react'
import { Marker } from 'react-native-maps';


export const MarkerComponent =({lat , lng})=>{

 


    return(

        <Marker
        title={"Toyota Vitz"}
      description={"Meu carro"}
        coordinate={{ latitude : lat , longitude : lng }}
        image={require('../assets/imgs/imageedit_11_8333362316.png')}
        style={{width:100 , height:100}}
        />

    )
}