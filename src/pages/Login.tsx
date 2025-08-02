import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { userLogin } from '@/apis/auth';
import { useNavigate } from 'react-router-dom';
import InputField from '@/components/InputField';
import { useAuth } from '@/Context/authContext';
const loginSchema = yup.object({
    identifier: yup
        .string()
        .required()
        .matches(/^[\w.+-]+@gmail\.com$/, 'Email must end with @gmail.com'),
    password: yup
        .string()
        .required()
        .min(8, 'Password must be from 8 charaters')
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
            'Password must contain at least 1 uppercase letter, 1 number, and 1 special character',
        ),
});

type FormLogin = yup.InferType<typeof loginSchema>;

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const loginForm = useForm<FormLogin>({
        resolver: yupResolver(loginSchema as yup.ObjectSchema<FormLogin>),
    });

    const handleLogin = async (data: FormLogin) => {
        const user = {
            identifier: data.identifier,
            password: data.password,
        };
        try {
            const response = await userLogin(user);
            console.log('Response structure:', response);
            login(response.jwt, response.user);
            navigate('/');
        } catch (error: any) {
            const apiError = error?.response?.data?.error?.message;
            console.error(apiError);
        }
    };

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
                                    onSubmit={loginForm.handleSubmit(handleLogin)}
                                    className="!mt-[30px] flex h-[50px] w-full flex-col gap-[20px] px-[40px]"
                                >
                                    <div className="flex flex-1 flex-col">
                                        <div className="!mb-[16px] flex flex-row">
                                            <InputField
                                                placeholder="example@domain.com"
                                                name="identifier"
                                                className="font-['Clash Grotesk'] flex-1 cursor-text rounded-l-3xl border-[1px] border-[#323f4a] bg-[#0f1117] px-[11.2px] py-[16px] font-medium text-[#cbd1e1]"
                                            ></InputField>
                                            <InputField
                                                placeholder="password"
                                                type="password"
                                                name="password"
                                                className="font-['Clash Grotesk'] flex-1 cursor-text border-[1px] border-[#323f4a] bg-[#0f1117] px-[11.2px] py-[16px] font-medium text-[#cbd1e1]"
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
