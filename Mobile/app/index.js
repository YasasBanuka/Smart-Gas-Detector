import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function GasDetectorApp() {
  const [gasStatus, setGasStatus] = useState({ level: null, status: "Loading..." });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGasStatus = async () => {
      try {
        const response = await fetch("http://192.1##.#.#:####/GasDetector/gasStatus");
        const data = await response.json();
        
        setGasStatus({
          level: data.level,
          status: data.status,
        });
      } catch (error) {
        setError("Failed to fetch gas status. Check the server connection.");
        console.error("Error fetching gas status:", error);
      }
    };

    fetchGasStatus();
    const interval = setInterval(fetchGasStatus, 1000); // Fetch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const colors = gasStatus.status === "Safe" ? "#4CAF50" : "#F44336";

  return (
    <LinearGradient colors={["white", "white"]} style={styles.container}>
      <StatusBar hidden={true} />

      <View style={[styles.navBar, { backgroundColor: colors }]}>
        <Text style={styles.navText}> Gas Detector </Text>
        <View style={styles.iconPack}>
          <FontAwesome6 name="pen" size={20} color={"white"} style={styles.editIcon} />
          <FontAwesome6 name="wifi" size={20} color={"white"} style={styles.wifiIcon} />
          <FontAwesome6 name="ellipsis-vertical" size={20} color={"white"} style={styles.moreIcon} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.heading}>Current Reading</Text>
          <View style={[styles.gauge, { borderColor: colors }]}>
            <Text style={[styles.gaugeText, { color: colors }]}>
              {gasStatus.level ? `${gasStatus.level}` : "Loading..."}
            </Text>
          </View>
          <Text style={styles.statusText}>Status: {gasStatus.status}</Text>

          <Pressable
            style={[
              styles.stopButton,
              { backgroundColor: gasStatus.status === "Safe" ? "gray" : colors },
            ]}
            disabled={gasStatus.status === "Safe"}
            onPress={() => {
              Alert.alert("Alarm Stopped", "You have stopped the alarm");
              setGasStatus({ ...gasStatus, status: "Safe" });
            }}
          >
            <FontAwesome6 name="ban" size={20} color="white" />
            <Text style={styles.stopButtonText}>STOP Alarm</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  navBar:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    padding:10,

  },

  navText:{
    flex:5,
    fontSize:24,
    fontFamily: "Poppins-Regular",
    color:"white",
    fontWeight:"bold",

  },

  iconPack:{
    flex:3,
    flexDirection: "row",
    marginLeft:25,
  },

  editIcon:{
    flex:1,
  },

  wifiIcon:{
    flex:1,
  },

  moreIcon:{
    flex:1,
  },

  mainView: {
    paddingHorizontal: 15,
    paddingVertical: 40,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  gauge: {
    marginTop:25,
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  gaugeText: {
    fontSize: 40,
  },
  statusText: {
    fontSize: 25,
    marginVertical: 20,
  },
  stopButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 10,
    flexDirection: "row",
    columnGap: 10,
    paddingHorizontal:25,
  },
  stopButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "white",
  },
});