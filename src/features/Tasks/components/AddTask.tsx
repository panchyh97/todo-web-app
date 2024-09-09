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

  return (
    <BottomSheet isOpen={isBottonSheetOpen} setIsOpen={setIsBottonSheetOpen}>
      <div className="p-6">
        <h2 className="font-bold text-lg">Añade una tarea</h2>
        <Input label='Tarea' maxLength={50} key={"Tarea"} value={newTask.name} onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
        <Input label='Descripción' maxLength={255} key={"Descripción"} value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
        <div className='flex justify-end mt-8'>
          <Button
            text='Guardar'
            onClick={() => {
              addTaskToLocalStorage(newTask, currentTaskList);
              setIsBottonSheetOpen(false);
              setNewTask({
                name: '',
                description: '',
                isCompleted: false
              })
            }} />
        </div>
      </div>
    </BottomSheet>
  )
}
