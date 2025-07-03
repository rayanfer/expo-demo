import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Calendar() {
  return (
    <View style={styles.container}>
      <View style={styles.calendarBox}>
        <Text style={styles.calendarText}>[Dummy Calendar UI]</Text>
      </View>
      <Text style={styles.info}>Upcoming Appointments:</Text>
      <View style={styles.appointmentCard}>
        <Text style={styles.appointmentTitle}>Dr. Smith - 10:00 AM, July 5</Text>
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
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 32,
    alignItems: "center",
    marginBottom: 24,
    elevation: 2,
    shadowColor: "#000",
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