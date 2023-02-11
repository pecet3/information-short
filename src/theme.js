const colors = {
    shark: "#2C2D30",
    mineshaft: "#3B3B3B",
    grayChateau: "#A7ABAF",
    bismark: "#436A7F",
    teal: "teal",
    porcelain: "#E6E8EA",
    iron: "#CBCFD2",
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
        navigationBackgroundHover: colors.iron,
        bigTile: colors.bismark + 70,
        text: colors.porcelain,
        textImportant: colors.caper,
        tile: colors.bismark,
        icon: colors.porcelain,
        navigationText: colors.mineshaft,
        navigationActive: colors.spray,
        buttonBackground: colors.porcelain,
        buttonText: colors.mineshaft,
    },
    colors,
    breakpoints,
    props,
}