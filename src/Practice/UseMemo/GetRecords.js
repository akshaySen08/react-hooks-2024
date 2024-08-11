const GetRecords = () => {
    const users = Array.from({ length: 99999 }, (_, i) => ({ id: i, name: `Name ${i}`, isSelected: false }));

    users[99998].isSelected = true;
    return users
}

export default GetRecords;