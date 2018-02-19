export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receive_entries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}

export function add_entry (entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}
