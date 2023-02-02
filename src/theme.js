const colors = {
    shark: "#2C2D30",
    mineshaft: "#3B3B3B",
    grayChateau: "#A7ABAF",
    bismark: "#436A7F",
    teal: "teal",
    porcelain: "#E6E8EA",
    frenchPass: "#BEFDFE",
    caper: "#E4EBB2",
}

const breakpoints = {
    mobile: 767,
    large: 991,
};
const props = {
    borderRadius: 4,
}
export const theme = {
    elements: {
        header: colors.grayChateau,
        headerBackground: colors.shark,
        navigationBackground: colors.porcelain,
        bigTile: colors.bismark + 70,
        text: colors.porcelain,
        textImportant: colors.caper,
        tile: colors.bismark,

    },
    colors,
    breakpoints,
    props,
}