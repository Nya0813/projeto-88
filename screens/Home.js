import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacty,
    Platform,
    StatusBar 
} from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArena}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>App</Text>
                        <Text style={styles.titleText}>Estelar</Text>
                    </View>
                    <TouchableOpacty style={styles.routeCard}>
                        <Text style={styles.routeText}>Mapa Espacial</Text>
                    </TouchableOpacty>

                    <TouchableOpacty style={styles.routeCard}>
                        <Text style={styles.routeText}>Mapa Estelar</Text>
                    </TouchableOpacty>

                    <TouchableOpacty style={styles.routeCard}>
                        <Text style={styles.routeText}>Imagens Diárias</Text>
                    </TouchableOpacty>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      droidSafeArea: {
        manginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
      routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
      },
      titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
      },
      titleText: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
        
      },
      routeText: {
        alignItems: "center",
        justifyContent: "center",
        color: '#D11583',
        fontSize: 25,
        fontWeight: "bold"
        
      },        
})
