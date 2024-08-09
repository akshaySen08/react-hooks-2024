import { useEffect, useState } from "react"

const UseEffectComponent = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        // Code to run on mount and on updates
        const timer = setTimeout(() => {
            setCount(count + 1)
        }, 1000)
        console.log("count is " + count);

        return () => {
            // Cleanup code to run on unmount
            clearTimeout(timer)
            console.log("clearing timer ");
            
        }
    }, [count])

    /* Example of subscription and unsubscribe */
    useEffect(() => {
        const handleResize = () => {
            console.log('Window resized');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://api.example.com/data', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
    if (error.name === 'AbortError') {
    console.log('Fetch aborted');
    } else {
    console.error('Fetch error:', error);
    }
});

        return () => {
            controller.abort();
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Timer executed');
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    /* Example of changing the title */
    useEffect(() => {
        const element = document.getElementById('external-element');
        element.style.backgroundColor = 'blue';
        element.textContent = `Count is ${count}`;

        return () => {
            element.style.backgroundColor = 'initial';
            setCount(0)
        };
    }, []);

    return (
        <>
            <h1 id="external-element">
                Use Effect
            </h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

export default UseEffectComponent;