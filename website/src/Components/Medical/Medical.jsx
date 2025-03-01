import React from 'react'
import "./Medical.css"
const Medical = () => {
    const aiimsData = [
        {id:1,name:"AIIMS Delhi",website:"https://www.aiims.edu/",nirf:"1",image:"/Images/aiims-delhi.jpg"},
        {id:2,name:"AIIMS Jodhpur",website:"https://www.aiimsjodhpur.edu.in/",nirf:"16",image:"/Images/aiims-jodhpur.jpg"},
        {id:3,name:"AIIMS Bhubaneshwar",website:"https://aiimsbhubaneswar.nic.in/",nirf:"15",image:"/Images/aiims-bhubaneshwar.jpg"},
        {id:4,name:"AIIMS Rishikesh",website:"https://aiimsrishikesh.edu.in/a1_1/",nirf:"14",image:"/Images/aiims-rishikesh.jpg"},
        // {id:5,name:"AIIMS Patna",website:"https://aiimspatna.edu.in/",nirf:"26",image:"/Images/aiims-patna.jpg"},
    ]
    const govtData = [
        {id:1,name:"Madras Medical College Chennai",website:"https://www.tnmgrmu.ac.in/",nirf:"11",image:"/Images/govt-madras.jpg"},
        {id:2,name:"Stanley Medical College Chennai",website:"https://www.stanleymedicalcollege.in/",nirf:"20",image:"/Images/govt-2.jpg"},
        {id:3,name:"Government Medical College Kolkata",website:"https://www.medicalcollegekolkata.in/",nirf:"45",image:"/Images/govt-3.png"},
        {id:4,name:"Government Medical College Mumbai",website:"https://gmcmumbai.org/",nirf:"55",image:"/Images/govt-4.jpg"},
        // {id:5,name:"LADY HARDING MEDICAL COLLEGE NEW DELHI",website:"https://lhmc-hosp.gov.in/",nirf:"31",image:"/Images/govt-5.jpg"},
    ]
    const universityData = [
        {id:1,name:"Atal Bihari Vajpayee Medical University",website:"https://abvmuup.edu.in/",nirf:"100",image:"/Images/university-1.jpg"},
        {id:2,name:"Bihar University of Health Sciences",website:"http://buhs.ac.in/",nirf:"67",image:"/Images/university-2.jpg"},
        {id:3,name:"Dr. NTR University of Health Sciences",website:"https://drntr.uhsap.in/index/index.html",nirf:"54",image:"/Images/university-3.png"},
        {id:4,name:"Indira Gandhi Institute of Medical Sciences",website:"https://igims.org/topics.aspx?mid=Contact%20Us",nirf:"33",image:"/Images/university-4.png"},
        // {id:5,name:"Kaloji Narayana Rao University of Health Sciences",website:"https://www.knruhs.telangana.gov.in/",nirf:"31",image:"/Images/university-5.jpg"},
    ]
    const pharmData = [
        {id:1,name:"Delhi Institute of Pharmaceutical Sciences and Research",website:"https://dpsru.edu.in/",nirf:"432",image:"/Images/pharm-1.jpg"},
        {id:2,name:"National Institute of Pharmaceutical Education and Research, Ahmedabad",website:"https://niperahm.ac.in/",nirf:"23",image:"/Images/pharm-2.jpg"},
        {id:3,name:"Malik Deenar College of Pharmacy, Seethangoli",website:"https://malikdeenarpharmacy.com/",nirf:"234",image:"/Images/pharm-3.png"},
        {id:4,name:"Faculty of Pharmacy, Uttar Pradesh University of Medical Sciences",website:"https://www.upums.ac.in/facultyofPharmacy",nirf:"89",image:"/Images/pharm-4.jpg"},
        
    ]
  return (
    <div className='container2'>
            <h2>TOP AIIM'S COLLEGE'S IN INDIA</h2>
        <div className="card-container2">
        {aiimsData.map((data,id)=>(
            <div key={id} className="card2">

                <img src={data.image} alt={data.name} />
                <h3>{data.name}</h3>
                <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a> <br />
                <p ><b>NIRF RANKING 2024</b> - <span>{data.nirf}</span></p>

            </div>
        ))}
        </div>

            <h2>TOP GOVERNMENT COLLEGE'S LIST IN INDIA</h2>
        <div className="card-container2">
        {govtData.map((data,id)=>(
            <div key={id} className="card2">

                <img src={data.image} alt={data.name} />
                <h3>{data.name}</h3>
                <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a> <br />
                <p><b>NIRF RANKING 2024 </b>- <span>{data.nirf}</span></p>

            </div>
        ))}
        </div>

            <h2>TOP MEDICAL UNIVERSITIE'S IN INDIA</h2>
        <div className="card-container2">
        {universityData.map((data,id)=>(
            <div key={id} className="card2">

                <img src={data.image} alt={data.name} />
                <h3>{data.name}</h3>
                <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a> <br />
                <p><b>NIRF RANKING 2024</b> - <span>{data.nirf}</span></p>

            </div>
        ))}
        </div>

            <h2>TOP PHARM - D COLLEGE'S IN INDIA</h2>
        <div className="card-container2">
        {pharmData.map((data,id)=>(
            <div key={id} className="card2">

                <img src={data.image} alt={data.name} />
                <h3>{data.name}</h3>
                <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a> <br />
                <p><b>NIRF RANKING 2024</b> - <span>{data.nirf}</span></p>

            </div>
        ))}
        </div>

    </div>
  )
}

export default Medical
