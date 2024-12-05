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
  
} catch (err) {
  console.error('An error occurred while fetching candidate data:', err);
}
};
  useEffect(() => { const fetchCandidates = async () => { 
    const users = await searchGithub(); if (users.length) { 
    const user = await searchGithubUser(users[Math.floor(Math.random() * 
      users.length)].username); 
      setCurrentCandidate(user); } else { console.warn('No users found'); } };

      fetchCandidates();
    }, []);

      useEffect(() => { 
        localStorage.setItem('potentialCandidates', JSON.stringify(potentialCandidates)); }, [potentialCandidates]); 
        
        const handleCandidateAction = (save: boolean) => { if (save && currentCandidate) { setPotentialCandidates(prev => [...prev, currentCandidate]); } showNextCandidate(); };


  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
