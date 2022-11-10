import axios from 'axios';
import { API_URL } from '../lib';
import { setCookie } from 'nookies'
import RootPage from '../components/root'
import { FormEvent } from 'react';


export default function accountCreate() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      userid: { value: string };
    }
    const r = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts`, {
      data: {
        email: target.email.value,
        id: target.userid.value,
        password: target.password.value,
      }
    });
    setCookie(null, "token", r.data);
  }
  return (
    <RootPage>
      <h2>アカウント作成</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userid">ユーザーID</label>
        <input type="text" id="userid" name="id" required />
        
        <label htmlFor="email">メールアドレス</label>
        <input type="text" id="email" name="email" required />
        
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">作成</button>
      </form>
    </RootPage>
  );
}
