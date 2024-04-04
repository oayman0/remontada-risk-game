import React, { useState, useRef } from 'react';
import '../assets/styles/score-calculator.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ScoreCalculator = () => {
  const [teamNames, setTeamNames] = useState(["فريق 1...", "فريق 2..."]);
  const [scores, setScores] = useState(Array(2).fill(0));
  const inputRefs = useRef([]);

  const addTeam = () => {
    if (teamNames.length < 7) {
      const newTeamName = `فريق ${teamNames.length + 1}...`;
      setTeamNames([...teamNames, newTeamName]);
      setScores([...scores, 0]);
    }
  };

  const incrementScore = (teamIndex, amount) => {
    const newScores = [...scores];
    newScores[teamIndex] += amount;
    setScores(newScores);
  };

  const resetTeamScore = (teamIndex) => {
    const newScores = [...scores];
    newScores[teamIndex] = 0;
    setScores(newScores);
  };

  const handleTeamNameChange = (event, index) => {
    const updatedTeamNames = [...teamNames];
    updatedTeamNames[index] = event.target.value;
    setTeamNames(updatedTeamNames);
  };

  const handleInputClick = (index) => {
    inputRefs.current[index].select();
  };

  return (
    <div className="score-container">

      <div className="score-grid">
        {teamNames.map((teamName, index) => (
          <div key={index} className="score-item button-55">
            <div className='score-name'>
              <input
                type="text"
                value={teamNames[index]}
                onChange={(e) => handleTeamNameChange(e, index)}
                maxLength={12} // Limiting the maximum characters for the team name
                onClick={() => handleInputClick(index)}
                ref={(el) => inputRefs.current[index] = el}
              />
              <div className='score-display'>{scores[index]}</div>
              <FontAwesomeIcon className='trash-icon' icon={faTrashCan} onClick={() => resetTeamScore(index)} />
            </div>

            <div className="score-buttons">
              <button onClick={() => incrementScore(index, 5)} className="button-64">5+</button>
              <button onClick={() => incrementScore(index, 10)} className="button-64">10+</button>
              <button onClick={() => incrementScore(index, 20)} className="button-64">20+</button>
              <button onClick={() => incrementScore(index, 40)} className="button-64">40+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        <button className='button-85' onClick={addTeam}>إضافة فريق</button>
        {/* <button className='button-85' onClick={() => setScores(Array(teamNames.length).fill(0))}>حذف النقاط</button> */}
      </div>

    </div>
  );
};

export default ScoreCalculator;
