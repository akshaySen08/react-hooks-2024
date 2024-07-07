export const initialItems = Array.from({ length: 39999999 }, (_, i) => ({
    id: i,
    isSelected: false
}));

initialItems[39999998].isSelected = true;

console.log(initialItems[39999998]);