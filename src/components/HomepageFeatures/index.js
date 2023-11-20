import clsx from 'clsx'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Simple spectro',
    link: '/docs/spectro',
    Svg: require('@site/static/img/logo-spectro.svg').default,
    description: (
      <>
        An affordable spectrophotometer that allows to measure precisely the
        absorbance in red, green and blue.
      </>
    ),
  },
  {
    title: 'Beemos',
    link: '/docs/beemos',
    Svg: require('@site/static/img/logo-beemos.svg').default,
    description: <>Monitor bee hives.</>,
  },
  {
    title: 'Incubator',
    link: '/docs/incubator',
    Svg: require('@site/static/img/logo-incubator.svg').default,
    description: (
      <>
        Convert an expanded polystyrene foam (EPS) to an incubator for less than
        $50.
      </>
    ),
  },
  {
    title: 'Bioreactor',
    link: '/docs/category/bioreactor',
    Svg: require('@site/static/img/logo-bioreactor.svg').default,
    description: (
      <>
        Control de temperature, agitation and volume using this open-source
        bioreactor.
      </>
    ),
  },
  {
    title: 'pHMeter',
    link: '/docs/category/phmeter',
    Svg: require('@site/static/img/logo-phmeter.svg').default,
    description: (
      <>Measure conductimetry and pH using this I2C connectable pH meter.</>
    ),
  },
]

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4', styles.div)}>
      <Link className={clsx('text--center', styles.Link)} to={link}>
        <div className='text--center'>
          <Svg className={styles.featureSvg} role='img' />
        </div>
        <div className='text--center padding-horiz--md'>
          <Heading as='h3'>{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
