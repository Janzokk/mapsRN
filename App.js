import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
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
		mapRef.current.animateToRegion(monument, 3*500);
	};
  return (
    <View style={styles.container}>
      	<MapView style={styles.map} 
			ref={mapRef}
			//specify our coordinates.
			initialRegion={moia}>
			<Marker coordinate={m1}></Marker>
			<Marker coordinate={m2}></Marker>
			<Marker coordinate={m3}></Marker>
			<Marker coordinate={m4}></Marker>
			<Marker coordinate={m5}></Marker>
			<Marker coordinate={m6}></Marker>
		</MapView>
		<View style={styles.btnContainer}>
			<View style={styles.row}>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m1)} ><Image></Image></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m2)} ></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m3)} ></TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m4)} ></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m5)} ></TouchableOpacity>
				<TouchableOpacity style={styles.imageCont} onPress={() => goToMonument(m6)} ></TouchableOpacity>
			</View>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
	backgroundColor: 'black',
  },
});

