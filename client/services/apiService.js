import axios from 'axios';

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
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await apiService.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Players
export const createPlayer = async (playerData) => {
    try {
      const response = await apiService.post('/players', playerData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const getPlayerById = async (id) => {
    try {
      const response = await apiService.get(`/players/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const getAllPlayers = async () => {
    try {
      const response = await apiService.get('/players');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const updatePlayerById = async (id, playerData) => {
    try {
      const response = await apiService.put(`/players/${id}`, playerData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const deletePlayerById = async (id) => {
    try {
      const response = await apiService.delete(`/players/${id}`);
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
    const response = await apiService.get('/questions/multiplechoice/random', { params: { count } });
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
    const response = await apiService.get('/questions/truefalse/random', { params: { count } });
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
    throw error.response.data;
  }
};
