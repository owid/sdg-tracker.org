import * as React from "react";
import { absoluteSdgsUrl, GRAPHER_ROOT } from "./settings";

export default function SiteFooter() {
  return (
    <footer className="SiteFooter bg-dark">
      <p>
        <a href="https://goo.gl/forms/fwJmzRk68IVoPssh2">
          Give us feedback on the SDG Tracker
        </a>
      </p>
      <p>
        Citation: Ritchie, Roser, Mispy, Ortiz-Ospina. "Measuring progress
        towards the Sustainable Development Goals."{" "}
        <em>SDG-Tracker.org, website</em> (2018).
      </p>
      <p>
        License: All the material produced by Our World in Data, including
        interactive visualizations and code, are completely open access under
        the{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons BY license
        </a>
        . You have the permission to use, distribute, and reproduce these in any
        medium, provided the source and authors are credited. All other
        material, including data produced by third parties and made available by
        Our World in Data, is subject to the license terms from the original
        third-party authors.
      </p>
      <script src={`${GRAPHER_ROOT}/embedCharts.js`} />
    </footer>
  );
}
