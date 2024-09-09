import PlusIcon from '@assets/svg/plus.svg';
import { ITask, Tab, TabContent, TabLayout, Task } from '@components';
import { useState } from 'react';

const initialTaskList: ITask[] = [
  {
    name: "Tarea 1",
    descripcion: "Descripción",
    isCompleted: false
  },
  {
    name: "Tarea 2",
    descripcion: "Descripción",
    isCompleted: false
  },
  {
    name: "Tarea 3",
    descripcion: "Descripción",
    isCompleted: false
  },
  {
    name: "Tarea 4",
    descripcion: "Descripción",
    isCompleted: true
  },
];

export const Tasks = () => {
  const [taskList, setTaskList] = useState<ITask[]>(initialTaskList);
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleTaskCompletion = (taskName: string) => {
    setTaskList(prevTasks =>
      prevTasks.map(task =>
        task.name === taskName
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  const todoTasks = () => {
    const todoTasks = taskList.filter((task) => !task.isCompleted);
    return todoTasks.map(({ name, descripcion, isCompleted }) => (
      <Task
        key={name}
        name={name}
        descripcion={descripcion}
        isCompleted={isCompleted}
        toggleCompletion={() => toggleTaskCompletion(name)}
      />
    ));
  };

  const completedTasks = () => {
    const completedTasks = taskList.filter((task) => task.isCompleted);
    return completedTasks.map(({ name, descripcion, isCompleted }) => (
      <Task
        key={name}
        name={name}
        descripcion={descripcion}
        isCompleted={isCompleted}
        toggleCompletion={() => toggleTaskCompletion(name)}
      />
    ));
  };

  return (
    <div className='px-4 py-8'>
      <div className="flex flex-row justify-between">
        <h1 className="w-fit">Listado de tareas</h1>
        <img
          src={PlusIcon}
          alt="Plus icon"
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
        />
      </div>
      <div>
        <TabLayout>
          {/* Tabs */}
          <div className="flex space-x-4">
            <Tab activeTab={activeTab} handleTabClick={() => handleTabClick('tab1')} tabName='Todas' tab='tab1' />
            <Tab activeTab={activeTab} handleTabClick={() => handleTabClick('tab2')} tabName='Por hacer' tab='tab2' />
            <Tab activeTab={activeTab} handleTabClick={() => handleTabClick('tab3')} tabName='Completado' tab='tab3' />
          </div>

          {/* Content */}
          <div className="mt-4">
            {activeTab === 'tab1' && (
              <TabContent>
                <h2 className='uppercase text-sm font-barlow text-gray-300 mb-2'> Por hacer </h2>
                {todoTasks()}

                <h2 className='uppercase text-sm font-barlow text-gray-300 mb-2'> Completadas </h2>
                {completedTasks()}
              </TabContent>
            )}
            {activeTab === 'tab2' && (
              <TabContent>
                {todoTasks()}
              </TabContent>
            )}
            {activeTab === 'tab3' && (
              <TabContent>
                {completedTasks()}
              </TabContent>
            )}
          </div>
        </TabLayout>
      </div>
    </div>
  );
};
