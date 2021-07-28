import cn from 'classnames'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import styles from './Date.module.css'

/**
 * Render the Date component.
 *
 * @author Greg Rickaby
 * @param {object} props The component attributes as props.
 * @return {Element}     The Date component.
 */
export default function Date(props) {
  if (!props?.date) {
    return false
  }
  return (
    <div>
      <span className={cn(styles.icon, 'material-icons ')}>date_range</span>
      <time dateTime={dayjs(props?.date).toISOString()}>
        {dayjs(props?.date).format('MMM DD, YYYY')}
      </time>
      {props?.category && (
        <>
          {' '}
          | <span className={cn(styles.icon, 'material-icons ')}>bookmark</span>
          {props?.category}
        </>
      )}
    </div>
  )
}

Date.propTypes = {
  category: PropTypes.any,
  date: PropTypes.string
}
