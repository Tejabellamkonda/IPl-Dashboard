// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, imageUrl, id} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="linkStyle">
      <ul className="itemCard">
        <li className="cardItem">
          <img src={imageUrl} className="image" alt={name} />
          <p>{name}</p>
        </li>
      </ul>
    </Link>
  )
}

export default TeamCard
