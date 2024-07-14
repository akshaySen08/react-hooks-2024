import { useTransition } from 'react';

const TabButton = ({
    onClick,
    ...rest
}) => {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            onClick?.();
        });
    };

    if (isPending) {
        return <p>Loading...</p>;
    }

    return <button onClick={handleClick}>{rest.title}</button>;
};

export default TabButton;