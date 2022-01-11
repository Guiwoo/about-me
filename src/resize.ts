const size = {
    mobile:'350px',
    tablet: '1270px',
    laptop:'1440px',
    desktop:'2560px'
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,

  };