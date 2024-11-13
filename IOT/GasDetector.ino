#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

// Add network credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// Define the gas sensor pin (analog input)
const int gasSensorPin = 34; // Use the appropriate pin for MQ-02 sensor
const int buzzerPin = 22;    // Use the appropriate pin for Buzzer
const int ledPin = 23;    // Use the appropriate pin for LED

// Threshold value for gas level
const int gasThreshold = 200;

void setup() {
  Serial.begin(115200);
  pinMode(buzzerPin, OUTPUT);
  pinMode(ledPin, OUTPUT);


  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  // Initialize the sensor pin (for analog input)
  pinMode(gasSensorPin, INPUT);
}

// Function to send gas level data to the backend
void sendGasDataToServer(float gasLevel) {
  HTTPClient http;
  String serverUrl = "http://192.1##.#.#:####/GasDetector/gasStatus"; // Update with server URL(Make it local host -> IP)
  String level = String(gasLevel);
  String status = (gasLevel >= gasThreshold) ? "Danger" : "Safe";

  http.begin(serverUrl);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");

  // Send POST request with gas level and status
  String postData = "level=" + level + "&status=" + status;
  int httpResponseCode = http.POST(postData);

  if (httpResponseCode > 0) {
    Serial.println("Data sent to server successfully.");
  } else {
    Serial.println("Error sending data to server: " + String(httpResponseCode));
  }

  http.end();
}

// Function to read gas level and trigger buzzer
void loop() {
  // Read gas level from the analog pin (value between 0-1023)
  int gasValue = analogRead(gasSensorPin);

  // Convert the analog reading to a gas level (adjust according to your sensor calibration)
  float gasLevel = map(gasValue, 0, 1023, 0, 255); // This mapping may need to be adjusted

  // Send the gas level data to the server
  sendGasDataToServer(gasLevel);

  // Check if the gas level exceeds the threshold
  if (gasLevel >= gasThreshold) {
    digitalWrite(buzzerPin, HIGH);  // Activate buzzerv
    digitalWrite(ledPin, HIGH);  // Activate LED
    Serial.println("Gas level is high! Buzzer & LED activated.");

  } else {
    digitalWrite(buzzerPin, LOW);   // Deactivate buzzer
    digitalWrite(ledPin, LOW);   // Deactivate LED
    Serial.println("Gas level is safe.");

  }

  delay(500);  // Delay before next reading
}

