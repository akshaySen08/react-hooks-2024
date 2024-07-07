import { memo } from "react";

const SearchInputComponent = ({ handleChange }) => {
    console.log('Search input re rendered');
    return (
        <>
            <input type="text" placeholder="Search users..." onChange={(e) => handleChange(e.target.value)} />
        </>
    )
}

export default memo(SearchInputComponent)