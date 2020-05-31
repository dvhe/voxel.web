export interface Auth {
  access_token: string;
  id: string;
  username: string;
  email: string;
  status: string;
  rooms?: any[];
  error?: string;
};

export interface User {
  id: string;
  username: string;
  tag: string;
  avatar: string;
  created_at?: string;
}

export interface UserData {
  id: string;
  username: string;
  avatar: string;
  tag: string;
  created_at: string;
  error?: string;
}