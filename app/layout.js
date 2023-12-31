"use client";

import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Roboto, Playfair_Display, Poppins } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6C1C61",
    },
    secondary: {
      main: "#8AE9C1",
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
  components: {
    MuiCssBaseline: {},
  },
});

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <header>
            {path == "/auth" ? <></> : <Navbar font={roboto} />}
          </header>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
