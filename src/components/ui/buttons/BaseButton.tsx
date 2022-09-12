interface BaseButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}
 
const BaseButton: React.FC<BaseButtonProps> = ( {children, onClick, disabled}) => {
    return (  
        <button
            className="py-1 px-2 bg-slate-600 text-white rounded-full hover:opacity-70"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
 
export default BaseButton;