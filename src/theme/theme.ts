import { Theme } from "@emotion/react"

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
    typography: {
        fontFamily: [
            '"shabnamR"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
        ].join(','),
    },
    font: {
        regular: '"shabnamR"',
        medium: '"shabnamM"',
        bold: '"shabnamB"',
        light: '"shabnamL"',

    },
    colors: {
        background: 'white',
        text: 'black',
        blue: {
            light: '#187abf',
            dark: '#235a97',
        },
    },
})

export type LightTheme = typeof theme
export default theme