import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Simple spectro",
    link: "/docs/spectro",
    Svg: require("../../static/img/logo-spectro.svg").default,
    description: (
      <>
        An affordable spectrophotometer that allows to measure precisely the
        absorbance in red, green and blue.
      </>
    ),
  },
  {
    title: "Beemos",
    link: "/docs/beemos",
    Svg: require("../../static/img/logo-beemos.svg").default,
    description: <>Monitor bee hives</>,
  },
  {
    title: "Incubator",
    link: "/docs/incubator",
    Svg: require("../../static/img/logo-incubator.svg").default,
    description: (
      <>
        Convert an expanded polystyrene foam (EPS) to an incubator for less than
        $50.
      </>
    ),
  },
  {
    title: "Bioreactor",
    link: "/docs/bioreactor",
    Svg: require("../../static/img/logo-bioreactor.svg").default,
    description: (
      <>
        Control de temperature, agitation and volume using this open-source
        bioreactor.
      </>
    ),
  },
  {
    title: "pHMeter",
    link: "/docs/phmeter",
    Svg: require("../../static/img/logo-phmeter.svg").default,
    description: (
      <>Measure conductimetry and pH using this I2C connectable pH meter.</>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div
      onClick={(e) => {
        window.location = link;
      }}
      style={{ cursor: "pointer" }}
      className={clsx("col col--4")}
    >
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
