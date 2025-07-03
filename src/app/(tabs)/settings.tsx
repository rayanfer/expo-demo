import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { useState } from 'react';

export default function Tab() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Language</Text>
        <Text style={styles.settingValue}>English</Text>
      </View>
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Account Status</Text>
        <Text style={styles.settingValue}>Active</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'stretch',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  settingValue: {
    fontSize: 16,
    color: '#555',
  },
});