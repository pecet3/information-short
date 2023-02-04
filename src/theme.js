const colors = {
    shark: "#2C2D30",
    mineshaft: "#3B3B3B",
    grayChateau: "#A7ABAF",
    bismark: "#436A7F",
    teal: "teal",
    porcelain: "#E6E8EA",
    frenchPass: "#BEFDFE",
    caper: "#E4EBB2",
    spray: "#86F0F4",
    caribbeanGreen: "#00deb3",
    persianBlue: "#2C39DD",
}

const breakpoints = {
    mobile: 768,
    large: 991,
};
const props = {
    borderRadius: 4,
}
export const theme = {
    elements: {
        background: colors.mineshaft,
        header: colors.caribbeanGreen,
        headerBackground: colors.shark,
        navigationBackground: colors.porcelain,
        bigTile: colors.bismark + 70,
        text: colors.porcelain,
        textImportant: colors.caper,
        tile: colors.bismark,
        icon: colors.porcelain,
        navigation: colors.persianBlue,
        navigationActive: colors.spray,
    },
    colors,
    breakpoints,
    props,
}