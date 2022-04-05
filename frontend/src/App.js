import { useEffect } from "react";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import RtlLayout from "./components/RtlLayout";
import { ChartStyle } from "./components/chart";
import ScrollToTop from "./components/ScrollToTop";
import { ProgressBarStyle } from "./components/ProgressBar";
import NotistackProvider from "./components/NotistackProvider";
import ThemeColorPresets from "./components/ThemeColorPresets";
import ThemeLocalization from "./components/ThemeLocalization";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";

//Google Analytics
import ReactGA from "react-ga";

const TRACKING_ID = "UA-179143437-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

// ----------------------------------------------------------------------

export default function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider>
      <ThemeColorPresets>
        <ThemeLocalization>
          <RtlLayout>
            <NotistackProvider>
              <MotionLazyContainer>
                <ProgressBarStyle />
                <ChartStyle />
                <ScrollToTop />
                <Router />
              </MotionLazyContainer>
            </NotistackProvider>
          </RtlLayout>
        </ThemeLocalization>
      </ThemeColorPresets>
    </ThemeProvider>
  );
}
