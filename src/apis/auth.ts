import http from './axios';
interface SignInEmailResponse {
    message: string;
    sent: boolean;
}
interface ConfirmSignInResponse {
    token: string;
    email: string;
}

interface UserResponse {
    data: {
        id: number;
        displayName: string;
        email: string;
        avatar: string | null;
        provider: string;
    };
}

export async function signInWithEmail(email: string): Promise<SignInEmailResponse> {
    const res = await http.post(
        `api/auth/sign-in-with-email`,
        { email },
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );
    return res.data;
}

export async function confirmSignIn({ token, email }: ConfirmSignInResponse) {
    const res = await http.post(
        `api/auth/sign-in-with-email/confirm`,
        { token, email },
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );
    return res.data;
}

export async function getCurrentUser(): Promise<UserResponse> {
    const res = await http.get(`api/auth/current-user`);
    return res.data;
}
