import { auth } from '../firebase';

const API_BASE_URL = 'https://expense-tracker-api-gu6c.onrender.com';

export const makeAuthenticatedRequest = async (url, options = {}) => {
  const user = auth.currentUser;
  
  if (!user) {
    // throw new Error('User not authenticated');
    console.log('User not authenticated')
  }

  const token = await user.getIdToken();
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers 
  };

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    // throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    console.log(errorData.message)
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  
  return response.text();
};