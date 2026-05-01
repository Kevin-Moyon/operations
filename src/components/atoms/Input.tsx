interface InputProps {
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

export const Input = ({ value, onChange, placeholder, type = "text" }: InputProps) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};