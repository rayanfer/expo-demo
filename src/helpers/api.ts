class Api {
  private baseUrl = "https://jsonplaceholder.typicode.com";
  private dummyJsonBaseUrl = "https://dummyjson.com";

  constructor() {}

  private apiHandler = (func) => {
    try {
      return async (...args) => {
        const result = await func(...args);
        return result;
      };
    } catch (error) {
      console.error("API handler error:", error);
      throw error;
    }
  };

  public loadTodos = async () => {
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

  public loadComments = async () => {
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
  };

  public loadProfilePicture = () => {
    // https://dummyjson.com/icon/HASH/SIZE/?type=png (or svg)
    // png is default
    return this.apiHandler(fetch("https://dummyjson.com/icon/abc123/150"));
    // Blob {size: SIZE, type: 'image/png'}
  };
}

export const api = new Api();
