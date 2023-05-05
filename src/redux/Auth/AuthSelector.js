export const selectAuthIsLoading = (state) => state.auth.isLoggedIn;

export const selectAuthUser = (state) => state.auth.user;

export const selectIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectAuthError = (state) => state.auth.error;
