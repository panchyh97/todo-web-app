import { BottomSheet, Button, ITask, Input } from '@components';
import { useState } from 'react';
import { addTaskToLocalStorage } from '../utils/localstorage';

interface IAddTask {
  isBottonSheetOpen: boolean;
  setIsBottonSheetOpen: (state: boolean) => void;
  currentTaskList: ITask[];
}

export const AddTask = ({
  isBottonSheetOpen,
  setIsBottonSheetOpen,
  currentTaskList
}: IAddTask) => {
  const [newTask, setNewTask] = useState<ITask>({
    name: "",
    description: "",
    isCompleted: false
  });
  const [errorMessage, setErrorMessage] = useState<{ name?: string, description?: string }>({});

  const validateInputs = (): boolean => {
    const { name, description } = newTask;
    let valid = true;

    const errors: { name?: string; description?: string } = {};

    if (name.trim() === "") {
      errors.name = 'El nombre no puede estar vacío';
      valid = false;
    }

    if (description.trim() === "") {
      errors.description = 'La descripción no puede estar vacía';
      valid = false;
    }

    setErrorMessage(errors);
    return valid;
  }

  const handleSave = () => {
    if (validateInputs()) {
      addTaskToLocalStorage(newTask, currentTaskList);

      setNewTask({
        name: '',
        description: '',
        isCompleted: false
      });

      setIsBottonSheetOpen(false);
    }
  }

  return (
    <BottomSheet isOpen={isBottonSheetOpen} setIsOpen={setIsBottonSheetOpen}>
      <div className="p-6">
        <h2 className="font-bold text-lg">Añade una tarea</h2>
        <Input
          label='Tarea'
          maxLength={50}
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          errorMessage={errorMessage.name}
        />
        <Input
          label='Descripción'
          maxLength={255}
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          errorMessage={errorMessage.description}
        />
        <div className='flex justify-end mt-8'>
          <Button text='Guardar' onClick={handleSave} />
        </div>
      </div>
    </BottomSheet>
  )
}
