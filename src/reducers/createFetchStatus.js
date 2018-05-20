// Creator of common reducer for fetch status.
export default ([requestType, successType, errorType]) => (
  state = {
    isFetching: false,
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case requestType:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case successType:
      return {
        ...state,
        isFetching: false,
      };
    case errorType:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
