// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latest} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    secondInnings,
    venue,
    umpires,
    result,
    manOfTheMatch,
  } = latest

  return (
    <div className="bg-Container">
      <h1>Latest Matches</h1>
      <div className="latestMatchContainer">
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        <div className="contDetails">
          <p>FirstInnings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man of the Math</p>
          <p>{manOfTheMatch}</p>

          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
