import axios from 'axios';
import useStore from '../useStore';

// Set your server base URL
const BASE_URL = 'http://localhost:8000/api';

const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// User Authentication
export const registerUser = async (userData) => {
  try {
    const response = await apiService.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error in registerUser', error); // Log the full error
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error('Network Error or unexpected issue');
    }
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await apiService.post('/auth/login', userData);
    useStore.getState().setUser(response.data.user);
    useStore.getState().setToken(response.data.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Users
export const getUserById = async (id) => {
  try {
    const response = await apiService.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUserById = async (id, userData) => {
  try {
    const response = await apiService.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteUserById = async (id) => {
  try {
    const response = await apiService.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Questions - Multiple Choice
export const createMultipleChoiceQuestion = async (questionData) => {
  try {
    const response = await apiService.post('/questions/multiplechoice', questionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMultipleChoiceQuestion = async (id) => {
  try {
    const response = await apiService.get(`/questions/multiplechoice/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateMultipleChoiceQuestion = async (id, questionData) => {
  try {
    const response = await apiService.put(`/questions/multiplechoice/${id}`, questionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteMultipleChoiceQuestion = async (id) => {
  try {
    const response = await apiService.delete(`/questions/multiplechoice/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRandomMultipleChoiceQuestions = async (count) => {
  try {
    const response = await apiService.get(`/questions/multiplechoice/random/${count}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};



// Questions - True/False 
export const createTrueFalseQuestion = async (questionData) => {
  try {
    const response = await apiService.post('/questions/truefalse', questionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getTrueFalseQuestion = async (id) => {
  try {
    const response = await apiService.get(`/questions/truefalse/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTrueFalseQuestion = async (id, questionData) => {
  try {
    const response = await apiService.put(`/questions/truefalse/${id}`, questionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTrueFalseQuestion = async (id) => {
  try {
    const response = await apiService.delete(`/questions/truefalse/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRandomTrueFalseQuestions = async (count) => {
  try {
    const response = await apiService.get(`/questions/truefalse/random/${count}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Questions - Fill in the Blank
export const createFillBlankQuestion = async (questionData) => {
  try {
    const response = await apiService.post('/questions/fillblank', questionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getFillBlankQuestion = async (id) => {
  try {
    const response = await apiService.get(`/questions/fillblank/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateFillBlankQuestion = async (id, questionData) => {
  try {
    const response = await apiService.put(`/questions/fillblank/${id}`, questionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteFillBlankQuestion = async (id) => {
  try {
    const response = await apiService.delete(`/questions/fillblank/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getRandomFillBlankQuestions = async (count) => {
  try {
    const response = await apiService.get('/questions/fillblank/random', { params: { count } });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Leaderboard
export const getLeaderboardByGameMode = async (gameMode) => {
  try {
    const response = await apiService.get(`/leaderboard/${gameMode}`);
    return response.data;
  } catch (error) {
    console.error('Error in getLeaderboardByGameMode', error); // Log the full error
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error('Network Error or unexpected issue');
    }
  }
};


export default apiService;

/*
EXAMPLES OF USAGE, TOO LAZY TO ACTUALLY IMPLEMENT STUFF ON FRONTEND

#####REGISTERING A USER
const newUser = { username: 'testuser', password: 'password123' };
registerUser(newUser).then(data => {
  console.log('User registered:', data);
}).catch(error => {
  console.error('Error registering user:', error);
});


#####LOGIN USER
const userCredentials = { username: 'testuser', password: 'password123' };
loginUser(userCredentials).then(data => {
  console.log('User logged in:', data);
}).catch(error => {
  console.error('Error logging in user:', error);
});

####GET USER BY ID
const userId = 'userIdHere';
getUserById(userId).then(data => {
  console.log('User data:', data);
}).catch(error => {
  console.error('Error fetching user data:', error);
});

#####UPDATE USER BY ID (SCORE UPDATE)
const userId = 'userIdHere';
const updatedUserData = { trueFalseScore: 50, multipleChoiceScore: 75, fillBlankScore: 100 };
updateUserById(userId, updatedUserData).then(data => {
  console.log('Updated user data:', data);
}).catch(error => {
  console.error('Error updating user data:', error);
});

####DELETE USER BY ID
const userId = 'userIdHere';
deleteUserById(userId).then(data => {
  console.log('User deleted:', data);
}).catch(error => {
  console.error('Error deleting user:', error);
});

#####CREATE MULTIPLE CHOICE  QUESTIONS
const newQuestion = {
  question: 'What is the capital of France?',
  options: ['Paris', 'London', 'Berlin', 'Rome'],
  answer: 'Paris'
};

createMultipleChoiceQuestion(newQuestion).then(data => {
  console.log('Multiple choice question created:', data);
}).catch(error => {
  console.error('Error creating multiple choice question:', error);
});

####GET MCQ BY ID
const questionId = 'questionIdHere';

getMultipleChoiceQuestion(questionId).then(data => {
  console.log('Multiple choice question data:', data);
}).catch(error => {
  console.error('Error fetching multiple choice question:', error);
});

#####GET 5 RANDOM MCQ
const count = 5;

getRandomMultipleChoiceQuestions(count).then(data => {
  console.log('Random multiple choice questions:', data);
}).catch(error => {
  console.error('Error fetching random multiple choice questions:', error);
});

####GET TRUE FALSE LEADERBOARD (options are truefalse, multiplechoice and fillblank)
const gameMode = 'truefalse'; 

getLeaderboardByGameMode(gameMode).then(data => {
  console.log('Leaderboard for game mode:', gameMode, data);
}).catch(error => {
  console.error('Error fetching leaderboard:', error);
});


*/