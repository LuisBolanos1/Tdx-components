import { ThemeProvider, createTheme } from '@mui/material/styles';

//Buttons constanst for customization

export const ConstantsButtons = {
    FirstButton: {
        label: 'First Button',
        backgroundColor: '#FFFFFF',
        borderColor: '#4B286D',
        myColor: '#4B286D',
        backgroundHover: '#4B286D',
        colorHover: '#FFFFFF',
        borderHover: '#4B286D',    
        decorationLine: 'none'
    },
    AlternativeButton: {
        label: 'Alternative Button',
        backgroundColor: '#4B286D',
        borderColor: '#FFFFFF',
        myColor: '#FFFFFF',
        backgroundHover: '#FFFFFF',
        colorHover: '#4B286D',
        borderHover: '#4B286D',    
        decorationLine: 'none'    
    },
    SuccessButton: {
        label: 'Success button',
        backgroundColor: '#2B8000',
        borderColor: '#2B8000',
        myColor: '#FFFFFF',
        backgroundHover: '#FFFFFF',
        colorHover: '#2B8000',
        borderHover: '#2B8000',    
        decorationLine: 'none'    
    },
    RedButton: {
        label: 'Red button',
        backgroundColor: '#FFFFFF',
        borderColor: '#C12335',
        myColor: '#C12335',
        backgroundHover: '#C12335',
        colorHover: '#FFFFFF',
        borderHover: '#C12335',    
        decorationLine: 'none'    
    },
    CancelButon: {
        label: 'Cancel Button',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        myColor: '#676E73',
        backgroundHover: '#676E73',
        colorHover: '#FFFFFF',
        borderHover: '#676E73',    
        decorationLine: 'underline'    
    }
} as const;

//Dropdowns Buttons constanst for customization

export const ConstantsDropdownButtons = {
    WhiteButton: {
        backgroundColor: '#FFFFFF',
        color: '#414547',
        fontSize: 16        
    },
    PurpleButton: {
        backgroundColor: '#4B286D',
        color: '#FFFFFF',
        fontSize: 14        
    }
} as const;

//DarkTheme

export const DarkTheme= createTheme({
    palette: {
      background: {
        default: "#F5F5F5"
      }
    }
});

//Typography constanst for customization

export const ConstantsTypography = {
    Title: {
        color: '#4B286D',
        transform: 'none',
        fontSize: 36,
        fontWeight: 24,
        fontStyle: 'normal',
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(','),
        margin: 10    
    },
    Title2: {
        color: '#4B286D',
        transform: 'none',
        fontSize: 24,
        fontWeight: 400,
        fontStyle: 'normal',
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(','),
        margin: 10
    
    },
    Subtitle: {
        color: '#4B286D',
        transform: 'none',
        fontSize: 21,
        fontWeight: 500,
        fontStyle: 'normal',
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(','),
        margin: 10    
    },
    Subtitle2: {
        color: '#000000',
        transform: 'none',
        fontSize: 16,
        fontWeight: 700,
        fontStyle: 'normal',
        fontFamily: ['"Segoe UI"', 'Arial', 'sans-serif'].join(','),
        margin: 10    
    }

} as const;