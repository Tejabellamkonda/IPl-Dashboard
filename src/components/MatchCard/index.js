// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchData

  return (
    <div className="item-container">
      <li className="box">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="image"
        />
        <h1>{competingTeam}</h1>
        <p>{result}</p>

        <p>{matchStatus} </p>
      </li>
    </div>
  )
}

export default MatchCard
