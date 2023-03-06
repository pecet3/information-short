export const getWeeks = () => {
    const array = [];

    for (let i = 1; i <= 8; i++) {
        let week = ""
        if (i === 1) {
            week = "1 tydzień"
        } else if (i < 5) {
            week = `${i} tygodnie`
        } else {
            week = `${i} tygodni`
        }
        array.push({
            name: week,
            value: i * 7,
        });
    };
    return array;
};