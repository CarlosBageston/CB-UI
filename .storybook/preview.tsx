import type { Preview } from "@storybook/react-vite";
import { IonApp, setupIonicReact } from "@ionic/react";


import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

// Tailwind custom
import "../src/styles/tailwind.css";
setupIonicReact();
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: new RegExp("(background|color)$", "i"),
        date: new RegExp("Date$"),
      },
    },
    a11y: { test: "todo" },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: ["light", "dark"],
      },
    },
  },
  decorators: [
    (Story) => {

      return (
        <IonApp>
          <div style={{ padding: "32px 12px", position: 'relative', height: '100vh', width: '100vw' }}>
            <Story />
          </div>
        </IonApp>
      )
    }
  ],
};

export default preview;
