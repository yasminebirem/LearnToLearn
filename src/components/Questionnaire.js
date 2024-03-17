// Inside Questionnaire.js
import React, { useState } from 'react';

function Questionnaire() {
  // States to store the user's answers
  const [disability, setDisability] = useState('No');
  const [levelOfStudies, setLevelOfStudies] = useState('');
  const [subjectOfInterest, setSubjectOfInterest] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    // For example, send to an API or display in the UI
    console.log({ disability, levelOfStudies, subjectOfInterest });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="disability">Do you have any disability?</label>
        <select id="disability" value={disability} onChange={(e) => setDisability(e.target.value)} className="block w-full mt-1">
          <option value="No">No</option>
          <option value="Autism">Autism</option>
          <option value="ADHD">ADHD</option>
          <option value="VisualImpairment">Visual Impairment</option>
        </select>
      </div>

      <div>
        <label htmlFor="levelOfStudies">What is your level of studies?</label>
        <select id="levelOfStudies" value={levelOfStudies} onChange={(e) => setLevelOfStudies(e.target.value)} className="block w-full mt-1">
          <option value="HighSchool">High School</option>
          <option value="Bachelors">Bachelor's</option>
          <option value="Masters">Master's</option>
          <option value="PhD">Ph.D.</option>
        </select>
      </div>

      <div>
        <label htmlFor="subjectOfInterest">Choose your subject of interest:</label>
        <select id="subjectOfInterest" value={subjectOfInterest} onChange={(e) => setSubjectOfInterest(e.target.value)} className="block w-full mt-1">
          <option value="ComputerScience">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Literature">Literature</option>
          <option value="Biology">Biology</option>
        </select>
      </div>

      <div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </div>
    </form>
  );
}

export default Questionnaire;
