import MapBox from '@rnmapbox/maps';
import { View, StyleSheet } from 'react-native';


const token = process.env.EXPO_PUBLIC_MAPBOX_TOKEN;

if (token) MapBox.setAccessToken(token);

export default function Homepage() {

    return (
        <View style={styles.container}>
        <MapBox.MapView style={styles.map}>
          <MapBox.Camera zoomLevel={12} centerCoordinate={[-122.4194, 37.7749]} />
        </MapBox.MapView>
      </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },});