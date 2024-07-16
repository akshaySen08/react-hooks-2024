import { useDeferredValue, useState } from "react";

export default function DeferredSearchExample1({ items }) {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(deferredQuery.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
