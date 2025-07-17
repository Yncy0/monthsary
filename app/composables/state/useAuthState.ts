export function useAuthState() {
  const userAuth = useState("userAuth");
  const user = useSupabaseUser();

  function setUserAuth() {
    if (!userAuth.value) {
      userAuth.value = user.value;
    }
  }

  function getUserAuth() {
    return userAuth.value;
  }

  return {userAuth, setUserAuth, getUserAuth };
}
