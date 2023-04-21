import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { Marker } from "react-native-maps";
import { useRef } from "react";

const moia = {
	latitude: 41.809745,
	longitude: 2.097774,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421,
};
const m1 = {
	latitude: 41.811501,
	longitude: 2.098318,
	latitudeDelta: 0.01,
	longitudeDelta: 0.01,
}

const m2 = {
	latitude: 41.811991,
	longitude: 2.098610,
	latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
const m3 = {
	latitude: 41.812629,
	longitude: 2.094989,
	latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
const m4 = {
	latitude: 41.812246,
	longitude: 2.087440,
	latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
const m5 = {
	latitude: 41.813073,
	longitude: 2.097226,
	latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}
const m6 = {
	latitude: 41.849826,
	longitude: 2.140513,
	latitudeDelta: 0.01,
  longitudeDelta: 0.01,
}

export default function App() {
	const mapRef = useRef(null);	
	
	function goToMonument(monument)
	{
		mapRef.current.animateToRegion(monument, 3*250);
	};
  return (
    <View style={styles.container}>
		<View style={styles.title}>
			<Text style={styles.titleText}>Moia Monumental</Text>
		</View>
		
      	<MapView style={styles.map} 
			ref={mapRef}
			//specify our coordinates.
			initialRegion={moia}>
			<Marker coordinate={m1} title={'Casa de Casanova'} description={'Casa de Casanova'}></Marker>
			<Marker coordinate={m2} title='La volta, el pont' description='La volta, el pont'></Marker>
			<Marker coordinate={m3} title='Capella de Sant Josep' description='Capella de Sant Josep'></Marker>
			<Marker coordinate={m4} title='Mas de la Pineda' description='Mas de la Pineda'></Marker>
			<Marker coordinate={m5} title='Monument de Sant Sebastia' description='Monument de Sant Sebastia'></Marker>
			<Marker coordinate={m6} title='Mas de la Guantera' description='Mas de la Guantera'></Marker>
		</MapView>
		<View style={styles.btnContainer}>
			<View style={styles.row}>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m1)} ><Image source={require('./assets/images/casanova.jpg')}></Image></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m2)} ><Image source={require('./assets/images/lavolta.jpg')}></Image></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m3)} ><Image source={require('./assets/images/santjosep.jpg')}></Image></TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m4)} ><Image source={require('./assets/images/lapineda.jpg')}></Image></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m5)} ><Image source={require('./assets/images/santsebastia.jpg')}></Image></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m6)} ><Image source={require('./assets/images/guantera.jpg')}></Image></TouchableOpacity>
			</View>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
	position: 'static',
	width: "100%",
	height: "10%",
	backgroundColor: '#808080',
	justifyContent: 'center',
	opacity: 0.6,
  },
  titleText:{
	marginTop: 30,
	fontSize: 55,
	color: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  btnContainer: {
	position: 'absolute',
	top:'13%',
	left:'13.5%',
	width: '75%',
	height: '30%',
	justifyContent: 'space-between',
	flexDirection: 'column',
	
  },
  row: {
	flex: 0.5,
	flexDirection: 'row',
	width: '100%',
	justifyContent: 'space-evenly',
	

  },
  imageCont: {
	width: '30%',
	height: '80%',
  },
});

