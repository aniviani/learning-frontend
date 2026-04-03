import { Task } from './ui/Task.tsx';
import { useTasksQuery } from './model/useTasksQuery.ts';
import { useDeleteTaskMutation } from './model/useDeleteTaskMutation.ts';
import { useCompleteTaskMutation } from './model/useCompleteTaskMutation.ts';
import { CreateTaskForm } from './ui/CreateTaskForm.tsx';
import { useCreateTaskMutation } from './model/useCreateTaskMutation.ts';

export const TaskListWithServer = () => {
  const { isLoading, error, tasks, setTasks } = useTasksQuery();
  const { deleteTask } = useDeleteTaskMutation({ setTasks });
  const { completeTask } = useCompleteTaskMutation({ setTasks });
  const { createTask } = useCreateTaskMutation({ setTasks });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>что-то пошло не так...</div>;
  }

  return (
    <div>
      <div>Task list with server</div>
      <CreateTaskForm onSubmit={createTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          createdAt={task.createdAt}
          onDelete={() => deleteTask({ id: task.id })}
          onComplete={() =>
            completeTask({ id: task.id, completed: !task.completed })
          }
        />
      ))}
    </div>
  );
};
