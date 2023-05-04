export const getContacts = (rootState) => {
  const { contactsState } = rootState;

  return contactsState.contacts;
};

export const getFilter = (rootState) => {
  const { contactsState } = rootState;

  return contactsState.filter;
};

export const getIsLoadingContacts = (rootState) => {
  const { contactsState } = rootState;

  return contactsState.contacts.isLoading;
};
