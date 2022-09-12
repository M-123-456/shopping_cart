interface RedButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}
 
const RedButton: React.FC<RedButtonProps> = ( {children, onClick}) => {
    return (  
        <button
            className="py-1 px-2 bg-red-600 text-white rounded-full hover:opacity-70"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
 
export default RedButton;