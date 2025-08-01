import { useFormContext, Controller } from 'react-hook-form';

type InputFieldProps = {
    name: string;
    component?: React.ComponentType<any>;
    [key: string]: any;
};

function InputField({ name, ...rest }: InputFieldProps) {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const messageError = (errors[name]?.message as string) || '';

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <input {...field} {...rest} value={field.value ?? ''} />
                    <p style={{ color: 'red' }}>{messageError}</p>
                </>
            )}
        ></Controller>
    );
}

export default InputField;
