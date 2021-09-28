// action creator
export const changeStatusFilter = (filterValue) =>{
    return {
        type: 'filters/changeStatusFilter', 
        payload: filterValue
    }
}

export const changeColorFilter = ({color, changeType}) =>{
    return {
        type: 'filters/changeColorFilter', 
        payload: {color, changeType}
    }
}


const initialState = {
    status: 'All',
    colors: []
  }
  
  export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
      case 'filters/changeStatusFilter': {
        return state
        
      }
      default:
        return state
    }
  }