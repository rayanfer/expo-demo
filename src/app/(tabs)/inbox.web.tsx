import { api } from "@/helpers/api";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

function MessageCard({
  message,
}: {
  message: { email: string; name: string; body: string };
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.subject}>{message.name}</Text>
      <Text style={styles.sender}>From: {message.email}</Text>
      <Text style={styles.body}>{message.body}</Text>
    </View>
  );
}

export default function Tab() {
  const [messages, setMessages] = React.useState([]);

  useEffect(() => {
    api.loadComments().then((data) => {
      setMessages(data);
      // console.log(data);
    });
  }, []);

  return (
    <div style={styles.container} className="overflow-auto bg-blue-100">
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageCard key={item.id} message={item} />}
        ListHeaderComponent={<View style={{ height: 16 }}></View>} // top padding
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "stretch",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  subject: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  sender: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});
