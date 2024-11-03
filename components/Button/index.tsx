type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children }: ButtonProps) {
    return (
        <button>
            {children}
        </button>
    )
}
