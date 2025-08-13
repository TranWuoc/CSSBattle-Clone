import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import InputField from '@/components/InputField';
import { useAuth } from '@/Context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import type { CredentialResponse } from '@react-oauth/google';
import { useState } from 'react';
import { signInWithEmail } from '@/apis/auth';

const signinEmailSchema = yup.object({
    email: yup
        .string()
        .required()
        .matches(/^[\w.+-]+@gmail\.com$/, 'Email must end with @gmail.com'),
});

type FormLogin = yup.InferType<typeof signinEmailSchema>;

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [sentToEmail, setSentToEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const loginForm = useForm<FormLogin>({
        resolver: yupResolver(signinEmailSchema as yup.ObjectSchema<FormLogin>),
    });

    const handleEmailSignIn = async (data: FormLogin) => {
        setIsLoading(true);
        try {
            const res = await signInWithEmail(data.email);
            if (res) {
                setIsEmailSent(true);
                setSentToEmail(data.email);
            }
        } catch (error: any) {
            console.log('Email signin error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = (credentialResponse: CredentialResponse) => {
        if (!credentialResponse.credential) {
            console.error('No credential received from Google');
            return;
        }
        try {
            const decodedToken: any = jwtDecode(credentialResponse.credential);
            console.log('Google login successful:', decodedToken);
            const googleUser = {
                id: decodedToken.sub,
                email: decodedToken.email,
                displayName: decodedToken.name,
                avatar: decodedToken.picture,
                provider: 'google',
            };
            localStorage.setItem('token', credentialResponse.credential);
            login(googleUser);
            navigate('/');
        } catch (error) {
            console.error('Failed to process Google login:', error);
        }
    };

    const handleGoogleError = () => {
        console.error('Google Login failed');
    };

    // Show email sent confirmation screen
    if (isEmailSent) {
        return (
            <div className="flex min-h-[calc(100vh-100px)] overflow-x-hidden p-12">
                <div className="!my-[0] !ml-[170px] max-w-[1600px]">
                    <div className="!font-['Clash Grotesk']">
                        <div className="flex flex-col items-center justify-start gap-[16px]">
                            <div className="relative">
                                <h1 className="font-['Clash Grotesk'] !mb-[16px] text-left text-[32px] font-bold text-[#eff5fb]">
                                    Check your email
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="!mt-[16px]">
                        <div className="flex flex-col">
                            <div className="bg-panel-login relative flex min-h-[300px] w-[900px] flex-col items-center justify-center gap-[20px] rounded-2xl p-[40px] shadow-[0_0_30px_rgba(255,223,0,0),0_20px_50px_rgba(0,0,0,0.2),inset_1px_1px_3px_hsla(0,0%,100%,0.1)]">
                                {/* Email sent icon */}
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffdf00]">
                                    <svg
                                        className="h-8 w-8 text-[#0f1117]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>

                                <div className="text-center">
                                    <h2 className="font-['Clash Grotesk'] mb-4 text-[24px] font-bold text-[#cbd1e1]">
                                        We sent you a sign-in link
                                    </h2>

                                    <p className="font-['Clash Grotesk'] mb-2 text-[16px] text-[#a0b3c6]">
                                        Check your inbox at
                                    </p>

                                    <p className="font-['Clash Grotesk'] mb-6 text-[16px] font-semibold text-[#ffdf00]">
                                        {sentToEmail}
                                    </p>

                                    <p className="font-['Clash Grotesk'] text-[14px] text-[#6b7b8e]">
                                        Click the link in the email to sign in to your account. The link will expire in
                                        15 minutes.
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => {
                                            setIsEmailSent(false);
                                            setSentToEmail('');
                                            loginForm.reset();
                                        }}
                                        className="font-['Clash Grotesk'] rounded-lg border border-[#323f4a] bg-[#323f4a] px-6 py-3 font-semibold text-[#cbd1e1] transition-colors hover:bg-[#4a5568]"
                                    >
                                        Back to Login
                                    </button>

                                    <button
                                        onClick={() => handleEmailSignIn({ email: sentToEmail })}
                                        className="font-['Clash Grotesk'] rounded-lg bg-[#ffdf00] px-6 py-3 font-semibold text-[#0f1117] transition-colors hover:bg-[#e5c800]"
                                    >
                                        Resend Email
                                    </button>
                                </div>
                            </div>

                            <p className="font-['Clash Grotesk'] !mx-[64px] h-[55px] rounded-b-2xl bg-[rgba(39,45,52,.4)] px-[32px] py-[16px] text-left text-[0.875rem] text-[#6b7b8e]">
                                Didn't receive the email? Check your spam folder or
                                <span
                                    onClick={() => handleEmailSignIn({ email: sentToEmail })}
                                    className="!ml-1 !inline cursor-pointer !p-0 !text-[0.875rem] text-[#ffdf00] hover:!underline"
                                >
                                    resend the email
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-[calc(100vh-100px)] overflow-x-hidden p-12">
            <div className="!my-[0] !ml-[170px] max-w-[1600px]">
                <div className="!font-['Clash Grotesk']">
                    <div className="flex flex-col items-center justify-start gap-[16px]">
                        <div className="relative">
                            <h1
                                className="font-['Clash Grotesk'] !mb-[16px] text-left text-[32px] font-bold text-[#eff5fb]"
                                style={{
                                    letterSpacing: '0.3px',
                                    lineHeight: '1.4',
                                    textTransform: 'none',
                                    wordBreak: 'initial',
                                }}
                            >
                                Sign up / Sign in
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="!mt-[16px]">
                    <div className="flex flex-col">
                        <div className="bg-panel-login relative flex h-[300px] w-[900px] flex-col gap-[10px] rounded-2xl shadow-[0_0_30px_rgba(255,223,0,0),0_20px_50px_rgba(0,0,0,0.2),inset_1px_1px_3px_hsla(0,0%,100%,0.1)]">
                            <FormProvider {...loginForm}>
                                <form
                                    onSubmit={loginForm.handleSubmit(handleEmailSignIn)}
                                    className="!mt-[30px] flex h-[50px] w-full flex-col gap-[20px] px-[40px]"
                                >
                                    <div className="flex flex-col">
                                        <div className="!mb-[16px] flex flex-row">
                                            <InputField
                                                placeholder="example@domain.com"
                                                name="email"
                                                className="font-['Clash Grotesk'] flex-1 cursor-text rounded-l-3xl border-[1px] border-[#323f4a] bg-[#0f1117] px-[11.2px] py-[16px] font-medium text-[#cbd1e1]"
                                            ></InputField>

                                            <button
                                                type="submit"
                                                className="font-['Clash Grotesk'] flex w-[200px] cursor-pointer items-center justify-center rounded-r-3xl border-[1px] border-[#323f4a] bg-[#323f4a] px-[11.2px] py-[16px] font-semibold text-[#cbd1e1] shadow-[0_0_30px_rgba(255,223,0,0),0_20px_50px_rgba(0,0,0,0.2),inset_1px_1px_3px_hsla(0,0%,100%,0.1)]"
                                            >
                                                Sign in with Email
                                            </button>
                                        </div>
                                        <span className="font-['Clash Grotesk'] font-semibold text-[#cbd1e1]">
                                            This is a password-less login, so you don't need a password.
                                        </span>
                                    </div>
                                    <div className="flex items-center text-[#cbd1e1]">
                                        <hr className="!my-0 !ml-40 !mr-4 flex-[1_1_0%]"></hr>
                                        <span>OR</span>
                                        <hr className="!my-0 !ml-4 !mr-40 flex-[1_1_0%]"></hr>
                                    </div>
                                    <div className="flex">
                                        <div className="h-[40px] w-[240px] overflow-hidden">
                                            <GoogleLogin onSuccess={handleGoogleLogin} onError={handleGoogleError} />
                                        </div>
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                        <p className="font-['Clash Grotesk'] !mx-[64px] h-[55px] rounded-b-2xl bg-[rgba(39,45,52,.4)] px-[32px] py-[16px] text-left text-[0.875rem] text-[#6b7b8e]">
                            By using CSSBattle, you agree to our
                            <a className="!ml-1 !inline cursor-pointer !p-0 !text-[0.875rem] hover:!underline">
                                Privacy Policy and Terms of Service
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
