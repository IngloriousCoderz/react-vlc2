import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/tasks",
});

export async function fetchTasks() {
  const { data } = await http.get("/");
  return data;
}

export async function addTask(body) {
  const { data } = await http.post("/", body);
  return data;
}

export async function updateTask(id, body) {
  const { data } = await http.patch(`/${id}`, body);
  return data;
}

export async function deleteTask(id) {
  const { data } = await http.delete(`/${id}`);
  return data;
}
