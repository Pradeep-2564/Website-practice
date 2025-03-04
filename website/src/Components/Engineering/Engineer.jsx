import React from 'react'
import './Engineer.css'

const Engineer = () => {

  const iitData = [
    {id:1, name: "IIT Bombay", website: 'https://www.iitb.ac.in/', nirf: '2', image: '/Images/bombay.png'},
    {id:2, name: "IIT Delhi", website: 'https://home.iitd.ac.in/', nirf: '4', image: '/Images/delhi.png'},
    {id:3, name: "IIT Kharagpur", website: 'https://www.iitkgp.ac.in/', nirf: '6', image: '/Images/kharagpur.png'},
    {id:4, name: "IIT Hyderabad", website: 'https://www.iith.ac.in/', nirf: '8', image: '/Images/hyderabad.png'},
    // {id:5, name: "IIT Madras", website: 'https://www.iitm.ac.in/', nirf: '1', image: '/Images/madras.jpg'},
  ]
  const nitData = [
    {id:1, name: "NIT Warangal", website: 'https://www.nitw.ac.in/', nirf: '23', image: '/Images/nitw.png'},
    {id:2, name: "NIT Mangaluru", website: 'https://www.nitk.ac.in/', nirf: '42', image: '/Images/nitk.png'},
    {id:3, name: "NIT Srinagar", website: 'https://nitsri.ac.in/', nirf: '12', image: '/Images/srinagar.png'},
    {id:4, name: "NIT Surat", website: 'https://www.svnit.ac.in', nirf: '43', image: '/Images/Surat.png'},
    // {id:5, name: "NIT Patna", website: 'https://www.nitp.ac.in/', nirf: '45', image: '/Images/Patna.png'},
  ]
  const iiitData = [
    {id:1, name: "IIIT Hyderabad", website: 'https://www.iiit.ac.in/', nirf: '122', image: '/Images/iiith.png'},
    {id:2, name: "IIIT Bhopal", website: 'https://iiitbhopal.ac.in/#/website/home', nirf: '543', image: '/Images/iiib.png'},
    {id:3, name: "IIIT Delhi", website: 'https://iiitd.ac.in/', nirf: '123', image: '/Images/iiid.png'},
    {id:4, name: "IIIT Kalyani", website: 'https://iiitkalyani.ac.in/', nirf: '213', image: '/Images/iiitk.png'},
    // {id:5, name: "IIIT Nagpur", website: 'https://iiitn.ac.in/', nirf: '123', image: '/Images/iiitn.png'},
  ]
  const universityData = [
    {id:1, name: "University of Hyderabad", website: 'https://uohyd.ac.in/', nirf: '23', image: '/Images/uoh.png'},
    {id:2, name: "Osmania University", website: 'https://www.osmania.ac.in/', nirf: '33', image: '/Images/ou.png'},
    {id:3, name: "Kakatiya University", website: 'https://www.kakatiya.ac.in/', nirf: '43', image: '/Images/ku.png'},
    {id:4, name: "Andhra University", website: 'https://www.andhrauniversity.edu.in/', nirf: '54', image: '/Images/au.png'},
    // {id:5, name: "Delhi University", website: 'https://www.du.ac.in/', nirf: '31', image: '/Images/du.png'},
  ]
  const eamcetData = [
    {id:1, name: "CBIT Hyderabad", website: 'https://www.cbit.ac.in/', nirf: '453', image: '/Images/cbit.png'},
    {id:2, name: "MGIT", website: 'https://mgit.ac.in/', nirf: '435', image: '/Images/mgit.png'},
    {id:3, name: "MLRIT", website: 'https://mlrit.ac.in/', nirf: '566', image: '/Images/mlrit.jpg'},
    {id:4, name: "CMR", website: 'https://cmrcet.ac.in/', nirf: '655', image: '/Images/cmr.jpeg'},
    // {id:5, name: "KITSW", website: 'https://www.kitsw.ac.in/', nirf: '675', image: '/Images/kitsw.png'},
  ]

  return (
    <div className='container'>
        <h2> Top IIT colleges in India</h2>
      <div className="card-content">
        {iitData.map((iit, id)=>(
            <div key={id} className="card">
                <img src={iit.image} alt={iit.name} />
                <h3>{ iit.name }</h3>
                <a href={iit.website} target='_main'>{ iit.website }</a> <br />
                <p>NIRF Ranking 2024 - <span>{ iit.nirf}</span></p>
            </div>
        ))}
      </div>

      <h2>Top NIT colleges in India</h2>
      <div className="card-content">
        {nitData.map((iit, id)=>(
            <div key={id} className="card">
                <img src={iit.image} alt={iit.name} />
                <h3>{ iit.name }</h3>
                <a href={iit.website} target='_main'>{ iit.website }</a> <br />
                <p>NIRF Ranking 2024 - <span>{ iit.nirf}</span></p>
            </div>
        ))}
      </div>

      <h2>Top IIIT colleges in India</h2>
      <div className="card-content">
        {iiitData.map((iit, id)=>(
            <div key={id} className="card">
                <img src={iit.image} alt={iit.name} />
                <h3>{ iit.name }</h3>
                <a href={iit.website} target='_main'>{ iit.website }</a> <br />
                <p>NIRF Ranking 2024 - <span>{ iit.nirf}</span></p>
            </div>
        ))}
      </div>

      <h2>Top University's in India</h2>
      <div className="card-content">
        {universityData.map((iit, id)=>(
            <div key={id} className="card">
                <img src={iit.image} alt={iit.name} />
                <h3>{ iit.name }</h3>
                <a href={iit.website} target='_main'>{ iit.website }</a> <br />
                <p>NIRF Ranking 2024 - <span>{ iit.nirf}</span></p>
            </div>
        ))}
      </div>

      <h2>Top Engineering colleges in Telangana</h2>
      <div className="card-content">
        {eamcetData.map((iit, id)=>(
            <div key={id} className="card">
                <img src={iit.image} alt={iit.name} />
                <h3>{ iit.name }</h3>
                <a href={iit.website} target='_main'>{ iit.website }</a> <br />
                <p>NIRF Ranking 2024 - <span>{ iit.nirf}</span></p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Engineer
