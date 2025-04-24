const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];

    return JSON.parse(rawTodos);
}



export const setLocalStorageTodoData = (task) => {
    //add data to the local localStorage
    return localStorage.setItem(todoKey, JSON.stringify(task));
}