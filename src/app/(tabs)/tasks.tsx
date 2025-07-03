import { api } from "@/helpers/api";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function TaskCard({
  task,
}: {
  task: { title: string; description: string; completed: boolean };
}) {
  return (
    <View style={[styles.card, task.completed && styles.completedCard]}>
      <Text style={styles.cardTitle}>
        {task.title} {task.completed ? "✓" : ""}
      </Text>
      <Text style={styles.cardText}>{task?.description}</Text>
    </View>
  );
}

export default function Tasks() {
  const [tasks, setTasks] = React.useState([]);
  useEffect(() => {
    api
      .loadTodos()
      .then((data) => {
        setTasks(data);
        console.log(data);
      });
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
  completedCard: {
    backgroundColor: "#e0ffe0",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
});
