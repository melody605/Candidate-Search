import { useState, useEffect, useCallback } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';


const CandidateSearch = () => {

  const [currentCandidate, setCurrentCandidate, ] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    bio: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
  });


  // w3 schools helped me with the localStorage
  
  const setCandidateData = (userData: Partial<Candidate>) => {
    setCurrentCandidate({
      name: userData.name || 'N/A',
      username: userData.username || 'N/A',
      location: userData.location || 'N/A',
      bio: userData.bio || 'N/A',
      avatar_url: userData.avatar_url || '',
      email: userData.email || 'N/A',
      html_url: userData.html_url || '',
      company: userData.company || 'N/A',
    });
  };

  const addCandidateToLocalStorage = () => {
    if (currentCandidate.username !== 'N/A') {
      const storedCandidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]');
      const updatedCandidates = [...storedCandidates, currentCandidate];
      localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
      console.log('Candidate saved:', currentCandidate);
    } else {
      console.warn('Cannot save candidate with username:', currentCandidate.username);
    }
  };

  const searchGithubCandidates = useCallback(async () => {
    try {
      const users = await searchGithub();
      const user = await searchGithubUser(users[Math.floor(Math.random() * users.length)].username);
      setCandidateData(user);
    } catch (error) {
      console.warn('No users found');
    }
  }, []);

  useEffect(() => {
    searchGithubCandidates();
  }, [searchGithubCandidates]);

  return (
    <div className="CandidateSearch">
      <h1>CandidateSearch</h1>
      {currentCandidate ? (
        <div className="Candidate-card">
          <div className="candidate-info">
            <h2>{`${currentCandidate.name} (${currentCandidate.username})`}</h2>
            <p>Location: {currentCandidate.location}</p>
            <p>Company: {currentCandidate.company}</p>
            <p>Email: <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email}</a></p>
            <p>Bio: {currentCandidate.bio}</p>
          </div>
          <div className="action-buttons">
            <button className="delete-button" onClick={searchGithubCandidates}>-</button>
            <button className="add-button" onClick={addCandidateToLocalStorage}>+</button>
          </div>
        </div>
      ) : (
        <p>No candidate selected</p>
      )}
  );
    </div>
  );
}

export default CandidateSearch;


