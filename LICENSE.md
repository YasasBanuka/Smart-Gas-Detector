# Smart Gas Detection System

This project is a gas detection system that uses an MQ-2 gas sensor to detect gas levels. When the gas concentration exceeds a certain threshold, the system triggers a buzzer and an LED to alert the user. The gas levels and status are also displayed on a mobile app built with React Native and Expo. Additionally, the backend server, developed using Java EE and Gson, receives data from the ESP32 and sends real-time gas status updates to the mobile app.

---

## Project Overview

**Components Used:** 
- **MQ-2 Gas Sensor**: Detects the concentration of gases like smoke, LPG, and other gases.
- **5V Buzzer**: Emits sound when the gas level exceeds the threshold.
- **LED**: Lights up when the gas level exceeds the threshold.
- **ESP32**: Microcontroller that reads the gas level from the sensor and communicates with the backend server.
- **Mobile App (React Native with Expo)**: Displays the gas level and status (Safe/Danger) and provides a "Stop Alarm" button to deactivate the buzzer and LED.

**Key Features:** 
- **Real-Time Monitoring**: Gas level and status are updated every second on the mobile app.
- **Alert System**: The system triggers a buzzer and LED when gas concentration exceeds a predefined threshold.
- **Mobile App Interface**: Displays gas level and status; users can stop the alarm directly from the app.
- **Backend Server**: Built with Java EE to manage gas data and communicate with the mobile app.

**Future Enhancements:** 
- **Push Notifications**
- **Data Storage and Visualization**
- **Multiple Device Integration**
- **Advanced User Settings**


## Setup Instructions
**Prerequisites:** 
- **ESP32** microcontroller
- **MQ-2 Gas Sensor**
- **5V Buzzer**
- **LED**
- **Breadboard and Jumper Wires**
- **Mobile Device** with **Exp** installed
- **Java Development Kit (JDK)**
- **Eclipse GlassFish** (or any Java EE-compatible server)


## Step 1: Setting Up the IoT Part (ESP32)

### Libraries to Install:
- WiFi
- HTTPClient
- ArduinoJson
 
1. **Install Arduino IDE** if not installed.
2. Connect the gas sensor to the ESP32.
3. Upload the Arduino code located in the `iot` folder to the ESP32.
4. Test the sensor connections and ensure data is being transmitted to the backend.


## Step 2: Setting Up the Mobile App (React Native with Expo)

### Install React Native and Expo:
1. Make sure Node.js is installed.

2. Install **Expo CLI** globally:
   ```bash
   npm install -g expo-cli
   
3. Create a new React Native app with Expo:
   ```bash
   expo init GasDetectorApp
   cd GasDetectorApp

### Install Dependencies:
1. Make sure Node.js is installed.
   ```bash
   npm install @expo/vector-icons expo-linear-gradient

Use the Expo app on a mobile device or an emulator to view and test the app.


## Step 3: Setting Up the Backend (Java EE)

### Download and Install:
1. **Install NetBeans IDE** and ensure it supports Java EE.
2. **Update connection details** in the App.config or environment configuration file.
3. **Deploy the backend on a Java EE-compatible server** (e.g., GlassFish or Payara).
4. Add the **Gson** library to your backend project for JSON handling.
5. **Start the server** and ensure APIs are accessible for the frontend and IoT parts.
