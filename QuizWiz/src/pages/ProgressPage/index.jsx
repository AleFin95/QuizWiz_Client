import React, {useState, useEffect} from 'react'
import './style.css'

import { ScoreTable } from '../../components'

function Progress() {
  const [scores, setScores]=useState([])
  
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const token = localStorage.getItem('token');
    //     const response = await fetch(`https://quizwiz-api.onrender.com/scores/token/${token}`);

    //     if (response.status === 200) {
    //       const data = await response.json();
    //       const sortedData = data.sort((a, b) => b.value - a.value);
    //       setScores(sortedData);
    //     } else {
    //       throw new Error('Failed to fetch scores');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();
    const data = [
      { "subjectName": "Mathematics", "value": 95 },
      { "subjectName": "Science", "value": 88 },
      { "subjectName": "History", "value": 75 }
    ]

    setScores(data)
    
  }, []);


  return (
    <div className='ProgressPage'>
        <h2>My Progress</h2>
        <div className="leaderboardContainer">
          <table className="leaderboardTable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Subject</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) =><ScoreTable key={index} rank ={index+1} score={score} />)}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Progress