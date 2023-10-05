import {
  CssBaseline,
  ThemeProvider as Provider,
  createTheme,
} from "@mui/material";
import { useAppContext } from "../../context";

type ComponentProps = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }: ComponentProps) => {
  const { userTheme } = useAppContext();

  const createdUserTheme = createTheme(userTheme);

  return (
    <Provider theme={createdUserTheme}>
      <CssBaseline>{children}</CssBaseline>
    </Provider>
  );
};

export default ThemeProvider;
