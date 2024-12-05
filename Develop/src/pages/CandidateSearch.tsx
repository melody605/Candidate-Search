import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [setCurrentCandidate, currentCandidate, ] = useState<Candidate>({
    name: string;
    username: string;
    location: string;
    bio: string;
    avatar_url: string;
    email: string;
    html_url: string;
    company: string;
  });
  
  const searchGithubCandidates = async () => {
    try {

useEffect(() => { (async () => { try { 
  const users = await searchGithub(); 
  if (users.length) setCurrentCandidate(await searchGithubUser(users[Math.floor(Math.random() * users.length)].username)); 

} catch (err) { 
  console.error('An error occurred:', err); } })(); }, []);
      fetchCandidates();
     []);

      useEffect(() => { 
        useEffect(() => {
          searchGithubCandidates();
        }, []);
      
  return (
  <h1>CandidateSearch</h1>
  <div className="Candidate-card"> 

  <div className="candidate-info">
    <h2>{`${currentCandidate.name} (${currentCandidate.username})`}</h2>

    <p>Location: {currentCandidate.location}</p>
    <p>Company: {currentCandidate.company}</p>
    <p>Email: <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email}</a></p>
    <p>Bio: {currentCandidate.bio}</p>
    </div>
  </div>

<div className="action-buttons">

  <button className="delete-button" onClick={searchGithubCandidates}>-</button>
        <button className="add-button" onClick={addCandidateToLocalStorage}>+</button>
      </div>
    </>
  );
};


export default CandidateSearch;
