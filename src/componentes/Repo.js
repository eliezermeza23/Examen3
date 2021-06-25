import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
export default function Productos(props){
    const {data} = props;
    const {id = 0, Nom = nombre, ISV = ISV, precio = precio, total = total} = data;

    return(
        <View style={estilos.contenedor}>
            <Text style= {estilos.titulo}>{"Producto:"}</Text>
            <Text style= {estilos.descripcion}>{Nom}</Text>
            <Text style= {estilos.titulo}>{"Precio:"}</Text>
            <Text style= {estilos.descripcion}>{precio}</Text>
            <Text style= {estilos.titulo}>{"ISV:"}</Text>
            <Text style= {estilos.descripcion}>{ISV}</Text>
            <Text style= {estilos.titulo}>{"precio Total:"}</Text>
            <Text style= {estilos.descripcion}>{total}</Text>
            </View>
    )
}

const estilos = StyleSheet.create({
    contenedor:{
        width:'95%',
        height:205,
        padding:15,
        marginLeft:10,
        marginRight:10,
        margin:10,
        marginBottom:10,
        marginTop:10,
        borderRadius:10,
        backgroundColor:'#787878'
    },
    titulo:{
        fontSize:20,
        fontWeight:'500',
        color:'white'
    },
    descripcion: {
        fontSize: 16,
        fontWeight: '600',
        color:'#FFFFFF'
      },
       logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        left:150
    }
})