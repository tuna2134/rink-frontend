import axios from 'axios';
import { API_URL } from 'lib';


export default function accountCreate() {
  async function hundleSubmit(event) {
    const r = await axios.post(`${API_URL}/v1/accounts`, {
      data: {
        email: event.target.email.value,
        id: event.target.id.value,
        password: event.target.password.value,
      }
    });
  }
}
