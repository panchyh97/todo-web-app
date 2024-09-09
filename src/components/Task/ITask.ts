export interface ITask {
  name: string;
  descripcion: string;
  isCompleted: boolean;
  toggleCompletion?: () => void
}