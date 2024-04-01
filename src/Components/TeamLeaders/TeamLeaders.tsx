import React from 'react'
import './TeamLeaders.scss';
import BethanyTL from '../../assets/teamLead/UmunakweGenevieve.jpg';
// import CapernaumTL from '../../assets/teamLeads/richard.jpg';
import GalileeTL from '../../assets/teamLead/mcday.jpg';
// import JerichoTL from '../../assets/teamLeads/taiwo.jpg';
// import JordanTL from '../../assets/teamLeads/lolade.jpg';
import NileTL from '../../assets/teamLead/StephenChigbogu.jpeg';

export const teamLeaders = [
    {
        id: 1, 
        name: "Umunakwe Genevieve", 
        team: "Bethany",
        picture: BethanyTL
    },
    // {
    //     id: 2, 
    //     name: "Ogbonna Richard", 
    //     team: "Capernaum", 
    //     picture: CapernaumTL
    // },
    {
        id: 3, 
        name: "Gbadegesin Oluwasegun", 
        team: "Galilee",
        picture: GalileeTL
    },
    // {
    //     id: 4, 
    //     name: "Adeniyi Taiwo", 
    //     team: "Jericho",
    //     picture: JerichoTL
    // },
    // {
    //     id: 5, 
    //     name: "Jegede Ololade", 
    //     team: "Jordan",
    //     picture: JordanTL
    // },
    {
        id: 6, 
        name: "Stephen Chigbogu", 
        team: "Nile", 
        picture: NileTL
    }
]

const TeamLeaders = () => {
  return (
    <div className="teamLeaders">
        <h2 className="teamLeaders__header">Team Leaders</h2>
        <div className="teamLeaders__cover">
            {teamLeaders.map((teamLead: any, index) => (
                <div className="teamLeader" key={teamLead.id}>
                    <img src={teamLead.picture} alt="bethany" />
                    <h4>{teamLead.name}</h4>
                    <p>{teamLead.team} Team Lead</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TeamLeaders