import { useNavigate } from 'react-router-dom';
import BaseButton from '../components/ui/buttons/BaseButton';

const Error404 = () => {
    const navigate = useNavigate();

    return (  
        <section
            className="min-h-screen mt-6 ml-8"
        >
            <p className="mb-4">
                Error404: Cannot find the page.
            </p>
            <BaseButton onClick={() => navigate('/', { replace: true })}>Go back home</BaseButton>
        </section>
    );
}
 
export default Error404;