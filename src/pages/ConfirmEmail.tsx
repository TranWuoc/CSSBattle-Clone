import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { confirmSignIn, getCurrentUser } from '@/apis/auth';
import { useAuth } from '@/Context/AuthContext';

function ConfirmSignIn() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');
    const [message, setMessage] = useState('');
    const hasConfirmed = useRef(false);

    const token = searchParams.get('token');
    const email = searchParams.get('email');

    useEffect(() => {
        if (hasConfirmed.current) {
            return;
        }
        const handleConfirmation = async () => {
            if (!token || !email) {
                console.error('No token or email found in URL');
                setStatus('error');
                setMessage('Invalid or missing confirmation link.');
                return;
            }
            hasConfirmed.current = true;
            try {
                const { accessToken, refreshToken } = await confirmSignIn({ token, email });

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                const userResponse = await getCurrentUser();
                const userCurrent = userResponse.data;
                localStorage.setItem('userData', JSON.stringify(userCurrent));

                setStatus('success');
                setMessage('You have successfully signed in!');
                setTimeout(() => {
                    navigate('/');
                }, 5000);
                login(userCurrent);
            } catch (error: any) {
                console.log('Confirm sign-in faild', error);
                setStatus('error');
                setMessage('Sign-in confirmation failed. Please try again.');
                hasConfirmed.current = false;
            }
        };
        handleConfirmation();
    }, []);

    const renderStatusIcon = () => {
        switch (status) {
            case 'loading':
                return <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-[#ffdf00]"></div>;
            case 'success':
                return (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                );
            case 'error':
                return (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                );
            case 'expired':
                return (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-100px)] items-center justify-center overflow-x-hidden p-12">
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
                                Email Confirmation
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="!mt-[16px]">
                    <div className="flex flex-col">
                        <div className="bg-panel-login relative flex min-h-[300px] w-[900px] flex-col items-center justify-center gap-[20px] rounded-2xl p-[40px] shadow-[0_0_30px_rgba(255,223,0,0),0_20px_50px_rgba(0,0,0,0.2),inset_1px_1px_3px_hsla(0,0%,100%,0.1)]">
                            {/* Status Icon */}
                            <div className="flex justify-center">{renderStatusIcon()}</div>

                            {/* Status Message */}
                            <div className="text-center">
                                <h2 className="font-['Clash Grotesk'] mb-4 text-[24px] font-bold text-[#cbd1e1]">
                                    {status === 'loading' && 'Confirming your sign-in...'}
                                    {status === 'success' && 'Sign-in Confirmed!'}
                                    {status === 'error' && 'Confirmation Failed'}
                                    {status === 'expired' && 'Link Expired'}
                                </h2>

                                <p className="font-['Clash Grotesk'] mb-6 max-w-[600px] text-[16px] text-[#a0b3c6]">
                                    {message}
                                </p>

                                {/* Success - Countdown */}
                                {status === 'success' && (
                                    <p className="font-['Clash Grotesk'] text-[14px] text-[#ffdf00]">
                                        Redirecting in seconds...
                                    </p>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex gap-4">
                                {status === 'success' && (
                                    <button
                                        onClick={() => navigate('/')}
                                        className="font-['Clash Grotesk'] rounded-lg bg-[#ffdf00] px-6 py-3 font-semibold text-[#0f1117] transition-colors hover:bg-[#e5c800]"
                                    >
                                        Go to Home
                                    </button>
                                )}

                                {(status === 'error' || status === 'expired') && (
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="font-['Clash Grotesk'] rounded-lg bg-[#ffdf00] px-6 py-3 font-semibold text-[#0f1117] transition-colors hover:bg-[#e5c800]"
                                    >
                                        Back to Login
                                    </button>
                                )}

                                {status === 'loading' && (
                                    <p className="font-['Clash Grotesk'] text-[14px] text-[#a0b3c6]">
                                        Please wait while we confirm your sign-in...
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <p className="font-['Clash Grotesk'] !mx-[64px] h-[55px] rounded-b-2xl bg-[rgba(39,45,52,.4)] px-[32px] py-[16px] text-left text-[0.875rem] text-[#6b7b8e]">
                            Having trouble? Contact our
                            <a
                                href="mailto:support@cssbattle.dev"
                                className="!ml-1 !inline cursor-pointer !p-0 !text-[0.875rem] text-[#ffdf00] hover:!underline"
                            >
                                support team
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmSignIn;
