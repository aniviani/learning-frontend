import { Task } from '../Task/Task';
import { useState } from 'react';
import { Modal } from '../../shared/ui/Modal/Modal.tsx';
import type { TTask } from './tasks.ts';
import { EditTaskForm } from './edit-task/ui/EditTaskForm.tsx';
import { useSortTasks } from './sort/model/useSortTasks.ts';
import { tasks as allTasks } from '../ToDoList/tasks';
import { useSearchTasks } from './search/model/useSearchTasks.ts';
import { useFilterTasks } from './filter/model/useFilterTasks.ts';
import { useDeleteTask } from './delete-task/model/useDeleteTask.ts';
import { useEditTask } from './edit-task/model/useEditTask.ts';
import { SearchInput } from './search/ui/SearchInput.tsx';
import { SortSelect } from './sort/ui/SortSelect.tsx';
import { FilterSelect } from './filter/ui/FilterSelect.tsx';

export const ToDoList = () => {
  const [tasks, setTasks] = useState<TTask[]>(allTasks);
  const { sort, sortedTasks, handleSortChange } = useSortTasks({ tasks });
  const { searchedTasks, searchValue, handleSearchChange } = useSearchTasks({
    tasks: sortedTasks,
  });
  const { filter, filteredTasks, handleFilterChange } = useFilterTasks({
    tasks: searchedTasks,
  });
  const { deleteTask } = useDeleteTask({ setTasks });
  const { editableTask, editTask, saveEditedTask, finishEditingTask } =
    useEditTask({ setTasks });

  return (
    <div>
      <div>To Do List:</div>

      <SearchInput
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
      <SortSelect
        sort={sort}
        handleSortChange={handleSortChange}
      />
      <FilterSelect
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <div>
        {filteredTasks.map((task) => (
          <Task
            onEdit={() => editTask({ task })}
            key={task.id}
            name={task.name}
            description={task.description}
            onDelete={() => deleteTask({ id: task.id })}
          />
        ))}
      </div>
      {editableTask && (
        <Modal close={finishEditingTask}>
          <EditTaskForm
            name={editableTask.name}
            description={editableTask.description}
            onSave={(name, description) =>
              saveEditedTask({
                newName: name,
                newDescription: description,
              })
            }
          />
        </Modal>
      )}
    </div>
  );
};
