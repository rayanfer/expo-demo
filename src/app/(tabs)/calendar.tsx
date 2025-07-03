import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarVIew() {
  return (
    <View style={styles.container}>
      <View style={styles.calendarBox}>
        <Calendar
          markedDates={{
            "2025-07-16": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
            "2025-07-17": { marked: true },
            "2025-07-18": { marked: true, dotColor: "red", activeOpacity: 0 },
            "2025-07-19": { disabled: true, disableTouchEvent: true },
          }}
        />
      </View>
      <Text style={styles.info}>Upcoming Appointments:</Text>
      <View style={styles.appointmentCard}>
        <Text style={styles.appointmentTitle}>
          Dr. Smith - 10:00 AM, July 5
        </Text>
        <Text style={styles.appointmentDetails}>General Checkup</Text>
      </View>
      <View style={styles.appointmentCard}>
        <Text style={styles.appointmentTitle}>Dr. Lee - 2:00 PM, July 8</Text>
        <Text style={styles.appointmentDetails}>Dental Cleaning</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f6fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  calendarBox: {
    borderRadius: 8,
    padding: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    elevation: 2,
    marginBottom: 16,
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  calendarText: {
    fontSize: 18,
    color: "#888",
  },
  info: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  appointmentCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  appointmentDetails: {
    fontSize: 14,
    color: "#555",
  },
});
