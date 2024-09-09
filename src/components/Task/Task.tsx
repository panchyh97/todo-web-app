import CheckIcon from '@assets/svg/check.svg';
import UncheckIcon from '@assets/svg/uncheck.svg';
import { ITask } from './ITask';

export const Task = ({
  name,
  description,
  isCompleted,
  toggleCompletion
}: ITask) => {

  return (
    <div className={`flex flex-row items-center rounded-lg p-2 mb-1 ${isCompleted ? 'bg-gray-200' : 'bg-gray-100'} transition-colors duration-1000 ease-out`}>
      {
        isCompleted ?
          <img src={CheckIcon} alt="Check icon" className="w-6 h-6 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300" onClick={toggleCompletion} /> :
          <img src={UncheckIcon} alt="Uncheck icon" className="w-6 h-6 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300" onClick={toggleCompletion} />
      }
      <div className='ml-2'>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
