import { Task } from './ui/Task.tsx';
import { useTasksQuery } from './model/useTasksQuery.ts';

export const TaskListWithServer = () => {
  const { isLoading, error, tasks } = useTasksQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>что-то пошло не так...</div>;
  }

  return (
    <div>
      <div>Task list with server</div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          createdAt={task.createdAt}
        />
      ))}
    </div>
  );
};
