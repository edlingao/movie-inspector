export interface Submit {
  email: string,
  name: string,
  phone: string,
  message: string,
}

export interface FormField {
  name: string,
  placeholder: string,
  error: string,
}

export interface HTTPConfig {
  apiEndpoint: string
}

