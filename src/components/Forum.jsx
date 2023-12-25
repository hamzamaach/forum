import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Grid, Avatar, Box, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Forum = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');

  const handleAddQuestion = () => {
    if (question.trim()  !== '') {
      setQuestions(prevQuestions => [...prevQuestions, { question, answers: [] }]);
      setQuestion('');
    }
  };

  const handleAnswer = (index) => {
    if (answer.trim() !== '') {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].answers.push(answer);
      return updatedQuestions;
    });}
    setAnswer('');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', background: '#f5f5f5' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '24px', textAlign: 'center', background: 'white' }}>
          <Typography variant="h4" gutterBottom style={{ color: '#333' }}>
            Q&A Forum
          </Typography>
          <TextField
            label="Ask a question"
            variant="outlined"
            fullWidth
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ marginBottom: '16px', background: '#fff' }}
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleAddQuestion}
            style={{ background: '#4caf50', color: 'white' }}
          >
            Ask a Question
          </Button>

          {questions.map((post, index) => (
            <Card key={index} style={{ marginTop: '16px', background: '#f0f0f0' }}>
              <CardContent>
                <Typography variant="h6" align="center" style={{ marginBottom: '16px', color: '#333' }}>
                  {post.question}
                </Typography>
                {post.answers.map((answer, answerIndex) => (
                  <Box key={answerIndex} display="flex" alignItems="center" style={{ marginTop: '8px' }}>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                    <Typography variant="body1" style={{ marginLeft: '8px', color: '#555' }}>
                      {answer}
                    </Typography>
                  </Box>
                ))}
                <Box display="flex" alignItems="center" style={{ marginTop: '8px' }}>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                  <TextField
                    label="Your Answer"
                    variant="outlined"
                    fullWidth
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ marginLeft: '8px' }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAnswer(index)}
                    style={{ marginLeft: '8px', background: '#2196f3', color: 'white' }}
                  >
                    Answer
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Forum;
