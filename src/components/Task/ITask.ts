export interface ITask {
  name: string;
  description: string;
  isCompleted: boolean;
  toggleCompletion?: () => void
}