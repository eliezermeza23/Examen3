
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  Image,
  Alert
} from 'react-native';
import Productos from './src/componentes/Repo';


function App(){
  const [nombre, setNombre] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [ISV, setisv] = useState(0);
  const [total, settotal] = useState(0);

  const [listaProductos, setProductos] = useState( [
  {id:0, Nom : "", precio : "", ISV : "", total : ""}
  
]);
  const [nuevoProductos, addProductos] = useState(false);

  const isv = () => {
    const ISV = precio * 0.18;
    setisv(ISV);
  }

  const Total = () => {
    const total = precio + ISV;
    settotal(total);
  }


  useEffect( () => {
    if(nuevoProductos === true){
      listaProductos.push({id:1, Nom : nombre, precio : precio, ISV : ISV, total : total});
    }
    addProductos(false);
  },[nuevoProductos])



  const agregarProductos = () => {
    addProductos(true);
    Alert.alert(
      "Nuevo Producto",
      "Se Agregó Exitosamente",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  const limpiar = () =>{
    setNombre(0);
    setPrecio(0);
    setisv(0);
    settotal(0);

  }

  return(
    <>
    <SafeAreaView style={styles.fondo}>
      
    <Text style={styles.sectionDescriptionTop}>Nombre Producto:</Text>
      <TextInput
      style={styles.input}
      placeholder="Escriba El Producto"
      value={nombre}
      onChangeText={(newValue)=> setNombre(newValue)}
      ></TextInput>

      <Text style={styles.sectionDescriptionTop}>Precio:</Text>
      <TextInput
      style={styles.input}
      placeholder="Introduzca Precio"
      keyboardType='numeric'
      value={precio}
      onChangeText={(newValue)=> setPrecio(newValue)}></TextInput>

      <Text style={styles.sectionDescriptionTop}>ISV: {precio * 0.18} </Text>
      <TextInput
      value={ISV} 
      onChangeText={(newValue)=> setisv(newValue)}
      >
      </TextInput>
      <Text style={styles.sectionDescriptionTop}>Total: {ISV + precio} </Text>
      <TextInput
      placeholder=""
      value={ISV}
      onChangeText={(newValue)=> settotal(newValue)}
      >
      </TextInput>
    
      <Button styles={styles.boton} title="Agregar Producto" color="#474747"onPress={agregarProductos}></Button>
      <Button styles={styles.boton} title="Limpiar" color="#000000" onPress={limpiar}></Button>
      
      </SafeAreaView>
      <ScrollView style={styles.fondoScroll}>
        {
          listaProductos.map( (item,index) => (
                <Productos data={item}/>
          ))
        }

      </ScrollView>
      </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionDescriptionTop: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "white"
  },
  highlight: {
    fontWeight: '700',
  },
  titulo: {
    fontSize: 100,
    fontWeight: '600',
  },
  boton:{
    marginTop:8,
    marginLeft:8,
    marginRight:8,
    borderRadius:8

  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,
    height: 130,
    left:80
},
fondo: {
  backgroundColor: "#606060"
},
fondoScroll: {
  backgroundColor: "#606060"
},
input:{
  height: 40,
margin: 11,
borderWidth: 2,
backgroundColor:"white"
},

});

export default App;