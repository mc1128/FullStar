export const isAuthenticated = (request) => {
  if (!request.user) {
    throw Error("로그인 후 사용해주세요.");
  }
  return;
};
