interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    type?: "button" | "submit";
}

export const Button = ({ label, onClick, className, type = "button" }: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
    );
};