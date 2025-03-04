import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Container } from '@mui/material';

function CollegeSetup() {
  
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [collegeType, setCollegeType] = useState('Engineering'); 
  const collegeOptions = {
    Engineering: [
      'Indian Institute of Technology (IIT) Bombay',
      'Indian Institute of Technology (IIT) Delhi',
      'National Institute of Technology (NIT) Trichy',
      'Bennett University',
    ],
    Medical: [
      'All India Institute of Medical Sciences (AIIMS) Delhi',
      'All India Institute of Medical Sciences (AIIMS) Jodhpur',
      'All India Institute of Medical Sciences (AIIMS) Bhubaneshwar',
      'All India Institute of Medical Sciences (AIIMS) Rishikesh',
      'King George’s Medical University (KGMU)',
      'Maulana Azad Medical College (MAMC)',
      'Christian Medical College (CMC), Vellore',
      'Madaras Medical College Chennai (MMCC)',
      'Stanley Medical College Chennai (SMCC)',
      'Government Medical College Kolkata (GMCK)',
      'Government Medical College Mumbai (GMCM)',
      'Atal Bihari Vajpayee Medical University (ABVMU)',
      'Bihar University of Health Sciences (BUHS)',
      'Dr. NTR University of Health Sciences (DNUHS)',
      'Indira Gandhi Institute of Medical Sciences (IIMS)',
      'Delhi Institute of Pharmaceutical Sciences and Research (DIPS)',
      'National Institute of Pharmaceutical Education and Research, Ahmedabad (NIPR)',
      'Malik Deenar College of Pharmacy, Seethangoli (MDCPS)',
      'Faculty of Pharmacy, Uttar Pradesh University of Medical Sciences (FUMS)',

    ],
  };
  const handleSaveCollegeDetails = () => {
    if (!college || !course || !year) {
      alert('Please fill out all the fields.');
      return;
    }
    
    console.log('College Setup Details:', {
      college,
      course,
      year,
      collegeType,
    });

    alert('College Setup Saved Successfully!');
  };

  return (
    <Container>
      <h1>College Setup</h1>
      <div>
        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>College Type</InputLabel>
          <Select
            value={collegeType}
            onChange={(e) => setCollegeType(e.target.value)}
            label="College Type"
          >
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Medical">Medical</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>College</InputLabel>
          <Select
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            label="College"
          >
            {collegeOptions[collegeType].map((collegeOption) => (
              <MenuItem key={collegeOption} value={collegeOption}>
                {collegeOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Course"
          variant="outlined"
          fullWidth
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        <TextField
          label="Year of Study"
          variant="outlined"
          fullWidth
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveCollegeDetails}
          fullWidth
        >
          Save College Setup
        </Button>
      </div>
    </Container>
  );
}

export default CollegeSetup;
