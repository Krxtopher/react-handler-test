import { Icon, Link } from "@cloudscape-design/components";

export function Instructions() {
  return (
    <>
      <h2>Overview</h2>
      <p>This sample app was created to answer the following question:</p>
      <blockquote>
        When generating many buttons in React, what is the most performant
        implementation approach that enables us to identify each button when it
        is clicked.
      </blockquote>
      <p>
        Note, Cloudscape buttons are not compatible with the{" "}
        <strong>Delegate handler</strong> approach. Therefore, we've used
        regular HTML buttons in all examples so that we're comparing apples to
        apples.
      </p>
      <h2>Instructions</h2>
      <ul>
        <li>
          Install the{" "}
          <Link
            href="https://beta.reactjs.org/learn/react-developer-tools"
            external
          >
            React DevTools extension
          </Link>{" "}
          for your browser.
        </li>
        <li>
          Open your browser's dev tools and select the React{" "}
          <strong>Profiler</strong> tab.
        </li>
        <li>
          In the Profiler, click the <strong>record</strong> button.
        </li>
        <li>In this React app, click each of the tabs above in turn.</li>
        <li>In the Profiler, stop the recording.</li>
        <li>Explore the profiling metrics.</li>
      </ul>
      <p>
        <strong>Tip:</strong> Clicking on any of the buttons in these examplese
        will output a message to the JavaScript console identifying the button.
      </p>
    </>
  );
}
