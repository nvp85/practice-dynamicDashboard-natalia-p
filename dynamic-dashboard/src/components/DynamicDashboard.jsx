

const DynamicDashboard = () => {
    const isPremium = true;
    const userName = "Jane Doe";
    const today = new Date().toLocaleDateString();
    const tasks = [
        {
            taskName: "Learn React",
            completed: true
        },
        {
            taskName: "Build a project",
            completed: false
        },
        {
            taskName: "Read documentation",
            completed: true
        }
    ]
    const completedTasks = tasks.filter(task=>task.completed).length;
    const incompleteTasks = tasks.length - completedTasks;
    return (
        <div id="container">  
            <h1>Hello, {userName}!</h1>
            <p>Today is {today}</p>
            {isPremium
            ? <p>Thank you for being a premium member!</p>
            : <p>Upgrade to premium to enjoy exclusive features!</p>
            }
            <h3>Task List:</h3>
            <ul>
                {tasks.map((task, index) => <li key={index}>{task.taskName} {task.completed ? "✅" : "❌"}</li>)}
            </ul>
            <p>Completed tasks: {completedTasks}</p>
            <p>Incomplete tasks: {incompleteTasks}</p>
        </div>

    )
}

export default DynamicDashboard;