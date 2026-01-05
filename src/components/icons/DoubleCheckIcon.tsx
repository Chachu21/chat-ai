interface DoubleCheckIconProps {
    color?: string;
}
const DoubleCheckIcon = ({ color = '8B8B8B' }: DoubleCheckIconProps) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.66671 8.00001L8.00004 11.3333L14.6667 4.66667M1.33337 8.00001L4.66671 11.3333M8.00004 8.00001L11.3334 4.66667"
                stroke={color}
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default DoubleCheckIcon;
