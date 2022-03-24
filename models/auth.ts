export interface LoginPayLoad {
  username: string
  password: string
}

export interface Profile {
  username: string
  city: string
  email: string
}

export interface UseAuthProps {
  profile: Profile | any
  error: any
  login: any
  logout: any
  firstLoading: any
}
