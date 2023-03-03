const colors = {
    shark: "#2C2D30",
    mineshaft: "#3B3B3B",
    grayChateau: "#A7ABAF",
    bismark: "#436A7F",
    teal: "teal",
    porcelain: "#E6E8EA",
    iron: "#CBCFD2",
    athensGray: "#EEEFF2",
    sivler: "#C9C9C9",
    frenchPass: "#BEFDFE",
    caper: "#E4EBB2",
    spray: "#86F0F4",
    caribbeanGreen: "#00deb3",
    persianBlue: "#2C39DD",
    toryBlue: "#0C46A6",
    dodgerBlue: "#339EFA",
}

const breakpoints = {
    mobile: 768,
    large: 1200,
};
const props = {
    borderRadius: 4,
}
export const theme = {
    elements: {
        background: colors.mineshaft,
        primary: colors.caribbeanGreen,
        primaryBackground: colors.shark,
        navigationBackground: colors.porcelain,
        navigationBackgroundHover: colors.iron,
        navigationText: colors.mineshaft,
        navigationActive: colors.spray,
        navigationMobile: colors.iron,
        dropDownBackground: colors.shark,
        bigTile: colors.bismark + 70,
        text: colors.porcelain,
        textImportant: colors.caper,
        tile: colors.bismark,
        icon: colors.porcelain,
        buttonBackground: colors.porcelain,
        buttonText: colors.mineshaft,
        tableRow: colors.teal,
        tableTh: colors.toryBlue,
    },
    colors,
    breakpoints,
    props,
}