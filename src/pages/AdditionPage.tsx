import { Addition } from '../components/organisms/Addition';
import { useNavigate } from 'react-router-dom';

export const AdditionPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <main className="page-container">
            <Addition onBack={handleBack} />
        </main>
    );
};