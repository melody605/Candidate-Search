import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [setCurrentCandidate, currentCandidate, ] = useState<Candidate>({
    name: '';
    username: '';
    location: '';
    bio: '';
    avatar_url: '';
    email: '';
    html_url: '';
    company: '';
  });


  //  adding to local storage

  const addCandidateToLocalStorage = () => {
  if (currentCandidate.username !== 'N/A') {

  const storedCandidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]');

  const updatedCandidates = [...storedCandidates, currentCandidate];

  localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));

  console.log('Candidate saved:', currentCandidate);



 const fetchCandidate = async () => { 
  try { 
    const users = await searchGithub(); 
    if (users.length) { 
      const user = await searchGithubUser(users[Math.floor(Math.random() * users.length)].username); 
      
      setCurrentCandidate(user); 
    } else { 
      console.warn('No users found'); 
      setCurrentCandidate(null); } 
    } catch (err) { 
        console.error('An error occurred while fetching candidate data:', err);


     searchGithubCandidates();
    } else {

      console.warn('Cannot save candidate with username:', currentCandidate.username);
    }
  };


      useEffect(() => { 
          searchGithubCandidates();
        }, []);
      
        return ( 
        <div className="CandidateSearch"> 
        <h1>CandidateSearch</h1> 
        {currentCandidate ? ( 
          <div className="Candidate-card">
             <div className="candidate-info"> 
              <h2>{`${currentCandidate.name} (${currentCandidate.username})`}<h2> 
              <p>Location: {currentCandidate.location}</p> 
              <p>Company: {currentCandidate.company}</p>
               <p>Email: <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email}</a></p> 
               <p>Bio: {currentCandidate.bio}</p> 
               </div>

               <div className="action-buttons"> 
          
        <button className="delete-button" onClick={searchGithubCandidates}>-</button>
        <button className="add-button" onClick={addCandidateToLocalStorage}>+</button>
      </div>
    </>
  );
};


export default CandidateSearch;
