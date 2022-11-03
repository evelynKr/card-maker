// 어플리케이션에서 사용자가 로그인을 하거나 로그아웃을 하거나 Authentication 관련된 일을 하는 클래스.abs
import firebase from 'firebase';
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth.signInWithPopup(authProvider);
  }
}

export default AuthService;
