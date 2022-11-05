import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoding: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoding: false})
  }

  render() {
    const {teamsData, isLoding} = this.state

    return (
      <>
        <div className="bgContainer">
          <div className="logoContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logoImage"
            />
            <div>
              <h1 className="headContainer">IPL DASHBOARD</h1>
            </div>
          </div>
          <div className="items-container">
            {isLoding ? (
              <Loader
                type="Oval"
                color="#ffffff"
                height={50}
                width={50}
                testId="loader"
              />
            ) : (
              teamsData.map(item => (
                <TeamCard key={item.name} teamData={item} />
              ))
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Home
