import axios from 'axios';
import useStore from '../useStore';

// Set your server base URL
const BASE_URL = 'http://localhost:8000/api'

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
      const response = await apiService.get(`/questions/fillblank/random/${count}`);
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
