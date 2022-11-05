// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    matchDetails: [],
    teamBanner: '',
    isLoding: true,
    latestMatchDetails: '',
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetails = data.latest_match_details
    const recentMatchDetails = data.recent_matches
    const teamBannerUrl = data.team_banner_url

    const latestMatch = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      matchStatus: latestMatchDetails.match_status,
      secondInnings: latestMatchDetails.second_innings,
      venue: latestMatchDetails.venue,
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
    }
    const formattedData = recentMatchDetails.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      matchStatus: eachItem.match_status,
      secondInnings: eachItem.second_innings,
      venue: eachItem.venue,
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
    }))

    this.setState({
      matchDetails: formattedData,
      teamBanner: teamBannerUrl,
      isLoding: false,
      latestMatchDetails: latestMatch,
    })
  }

  render() {
    const {matchDetails, teamBanner, isLoding, latestMatchDetails} = this.state
    return (
      <div className="teamMatchContainer">
        {isLoding ? (
          <div className="loder">
            <Loader
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
              testId="loader"
            />
          </div>
        ) : (
          <div>
            <img src={teamBanner} alt="team banner" className="teamBanner" />
            <LatestMatch
              latest={latestMatchDetails}
              key={latestMatchDetails.competingTeam}
            />
            {matchDetails.map(item => (
              <MatchCard matchData={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
