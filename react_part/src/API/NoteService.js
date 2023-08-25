import axios from "axios";

export default class NoteService {

  static async getNotes(id) {
    const response = await axios.get(`http://127.0.0.1:8000/api/note/${id}`);
    return response.data;
  }

  static async saveNote(id, data) {
    const response = await axios.put(`http://127.0.0.1:8000/api/note/${id}`, data);
    return response.data;
  }

}

