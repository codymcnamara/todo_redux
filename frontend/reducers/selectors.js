export const allTodos = ({todos}) => (
  Object.keys(todos).map(id => todos[id])
)

export const stepsByTodoId = ({steps}, todoId) => {
  let stepsArr = [];
  Object.keys(steps).forEach(stepId => {
      if(steps[stepId].todo_id == todoId){
        stepsArr.push(steps[stepId])
      }
    }
  )
  return stepsArr;
}
