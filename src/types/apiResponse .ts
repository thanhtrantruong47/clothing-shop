export interface ApiResponse<T> {
  data?: T;
  errors?: Error[];
  isSuccess: boolean;
}
