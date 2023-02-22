export const getHoursToDisplay = () => {
    let array = [];

    for (let i = 1; i <= 7; i++) {
        let name = i === 1 ? "1 dzień" : `${i} dni`;

        array.push({
            name: name,
            value: i * 24,
        })
    }

    return array
}