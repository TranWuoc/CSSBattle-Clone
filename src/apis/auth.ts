import axios from 'axios';
import type { User } from '@/type/user';

const URL = 'http://localhost:1337/api/auth/local';

interface LoginResponse {
    jwt: string;
    user: User;
}

export async function userLogin(user: Partial<User>): Promise<LoginResponse> {
    const res = await axios.post(URL, user, { headers: { 'Content-Type': 'application/json' } });
    return res.data;
}
