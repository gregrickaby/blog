import Excerpt from '@/components/atoms/Excerpt/Excerpt'
import Meta from '@/components/atoms/Meta/Meta'
import Title from '@/components/atoms/Title/Title'
import PropTypes from 'prop-types'
import styles from './PageHeader.module.css'

/**
 * Render the PageHeader component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The PageHeader component.
 */
export default function PageHeader(props) {
  return (
    <header className={styles.pageHeader}>
      <Meta
        date={props?.date}
        category={props?.category}
        readingTime={props?.readingtime?.text}
      />
      <Title title={props?.title} />
      <Excerpt excerpt={props?.excerpt} />
    </header>
  )
}

PageHeader.propTypes = {
  ogImage: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.any,
  excerpt: PropTypes.string,
  title: PropTypes.string.isRequired
}
