export const selectAuthIsLoading = (state) => state.auth.isLoggedIn;
export const selectAuthUser = (state) => state.auth.user;
export const selectIsOnline = (state) => state.auth.isOnline;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
