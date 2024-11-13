# Smart Gas Detector System

An end-to-end smart gas detection system utilizing IoT for environmental monitoring, a mobile app interface for user interactions, and a Java EE backend for data management and API handling. The system detects and reports gas levels in real-time, providing essential alerts and data storage for safety and monitoring purposes.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Architecture](#architecture)
- [Components](#components)
  - [IoT - Gas Detection (Arduino)](#iot---gas-detection-arduino)
  - [Frontend - Mobile App (React Native & Expo)](#frontend---mobile-app-react-native--expo)
  - [Backend - API & Database (Java EE & MySQL)](#backend---api--database-java-ee--mysql)
- [Setup Guide](#setup-guide)
  - [IoT Setup](#iot-setup)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Future Enhancements](#future-enhancements)

---

## Project Overview
The **Smart Gas Detector System** is a comprehensive platform designed to monitor, detect, and alert users of hazardous gas levels. It integrates hardware and software components, combining IoT sensors, a user-friendly mobile application, and a robust backend to manage and process data. This project aims to improve safety by providing timely notifications and storing gas level data for analysis.

## Features
- **Real-Time Gas Monitoring**: Detects gas levels using sensors connected to an Arduino.
- **Mobile Alerts**: Notifies users via a mobile app when dangerous gas levels are detected.
- **Data Management**: Stores gas level data in a database for historical tracking and analysis.
- **User Authentication**: Allows users to register and access personal data and settings in the app.

## Architecture
1. **IoT Component**: Arduino-based gas sensor module that monitors gas concentration and sends data.
2. **Frontend Component**: React Native mobile app with Expo for cross-platform support, delivering real-time data and alerts to users.
3. **Backend Component**: Java EE backend to handle API requests, process gas level data, and manage the MySQL database for data storage and retrieval.

## Components

### IoT - Gas Detection (Arduino)
The IoT part consists of an Arduino connected to a gas sensor module. It continuously monitors the gas concentration and sends data to the backend for processing and alerting purposes.

- **Technology**: Arduino IDE
- **Hardware Requirements**: Gas sensor (e.g., MQ-2), Arduino board
- **Main Function**: Monitor gas levels and transmit data to the backend for alerting.

### Frontend - Mobile App (React Native & Expo)
The frontend is a mobile app built with React Native and Expo, providing a user interface to display gas levels, alert notifications, and historical data. The app also includes user authentication for personalized access.

- **Technology**: React Native, Expo, JavaScript
- **Main Function**: Display real-time gas level data, alert users of dangerous levels, and offer personalized access through user login.

  
### Backend - API & Database (Java EE & MySQL)
The Java EE backend serves as the core data management system, handling sensor data processing, storing records in a MySQL database, and exposing REST APIs for the frontend. It also manages user authentication and profile data.

- **Technology**: Java EE (NetBeans), MySQL
- **Database Structure**: Includes tables for storing gas level data, user information, and historical records.
- **Main Function**: Manage gas level data, handle API requests, user management, and data persistence.

---

## Setup Guide

### IoT Setup
1. **Install Arduino IDE** if not installed.
2. Connect the gas sensor to the Arduino board.
3. Upload the Arduino code located in the `iot` folder to the Arduino board.
4. Test the sensor connections and ensure data is being transmitted to the backend.

### Frontend Setup
1. **Install Node.js** and **Expo CLI**:
   ```bash
   npm install -g expo-cli

2. In the frontend directory, **install dependencies**:
   ```bash
   npm install
   
3. **Start the Expo server for the mobile app**:
   ```bash
    expo start

Use the Expo app on a mobile device or an emulator to view and test the app.

### Backend Setup
1. **Install NetBeans IDE** and ensure it supports Java EE.
2. **Update connection details** in the App.config or environment configuration file.
3. **Deploy the backend on a Java EE-compatible server** (e.g., GlassFish or WildFly).
4. **Start the server** and ensure APIs are accessible for the frontend and IoT parts.

Future Enhancements
1. **Push Notifications**: Integrate push notifications for high-priority gas alerts.
2. **Data Visualization**: Add graphical representations of gas level trends over time.
3. **Multiple Device Integration**: Expand to support multiple gas sensors across different locations.
4. **Advanced User Settings**: Enable customizable alert thresholds for different gases.
