export const initialItems = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    isSelected: false
}));

initialItems[9].isSelected = true;

// console.log(initialItems[9]);