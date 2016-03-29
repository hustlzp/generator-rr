/**
 * Create reducer
 * @param initialState
 * @param handlers
 * @returns {function} reducer
 */
export function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        return handlers[action.type]
            ? handlers[action.type](state, action)
            : state
    }
}
