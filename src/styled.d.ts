// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontColor: {
      main: string;
      sub: string;
      projectsSub: string
    }
    bgColor: {
      main: string;
      second: string;
    }
    border: {
      main: string
    }
    underline: {
      main: string
    }
    gradient: string
  }
}