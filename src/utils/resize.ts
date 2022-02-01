const size = {
    mobile: '350px',
    tablet: '1050px',
    laptop: '1440px',
    desktop: '2000px'
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.tablet})`,
    tablet: `(min-width: 550px)`,
    desktop: `(min-width: ${size.desktop})`,

};