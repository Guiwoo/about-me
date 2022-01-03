// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontColor:{
        main:string;
    }
    bgColor:{
        main:string;
        second:string;
    }
    gradient:string
  }
}