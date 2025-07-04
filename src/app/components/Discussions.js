import Discussion from './Discussion'
import { List } from '../util.js/List'

const Discussions = () => {
  return (
    <ul className="discussions">
      {List.map((item, index) => {
        return <Discussion key={index} {...item} />
      })}
    </ul>
  )
}
export default Discussions
