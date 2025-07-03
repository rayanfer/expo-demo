import { View, Text, StyleSheet, ScrollView } from 'react-native';

const clinics = [
  { id: 1, name: 'Sunrise Clinic', address: '123 Main St', phone: '555-1234' },
  { id: 2, name: 'Downtown Health', address: '456 Elm St', phone: '555-5678' },
  { id: 3, name: 'Lakeside Medical', address: '789 Lake Ave', phone: '555-9012' },
];

function ClinicCard({ clinic }: { clinic: { name: string; address: string; phone: string } }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{clinic.name}</Text>
      <Text style={styles.cardText}>{clinic.address}</Text>
      <Text style={styles.cardText}>{clinic.phone}</Text>
    </View>
  );
}

export default function Tab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {clinics.map(clinic => (
        <ClinicCard key={clinic.id} clinic={clinic} />
      ))}
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
  card: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
});