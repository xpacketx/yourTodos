export default function reducer(state, action) {

  switch(action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false
        }
      ]

    case 'toggle':
      return state.map(todo => {
        if(todo.id === action.payload) {       
        return {...todo, completed: !todo.completed}
      }
      return todo
      })

    case 'remove': 
      return state.filter(item => {
        return item.id !== action.payload
      })

    default:
      return state
  }
}