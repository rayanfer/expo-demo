class Api {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  loadTodos = async () => {
    try {
      const response = await fetch(`${this.baseUrl}/todos`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to load inbox:", error);
      throw error;
    }
  };

  loadComments = async () => {
    try {
      const response = await fetch(`${this.baseUrl}/comments`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to load comments:", error);
      throw error;
    }
  }
}

export const api = new Api();
