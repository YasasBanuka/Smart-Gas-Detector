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
