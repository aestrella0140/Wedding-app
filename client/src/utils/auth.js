import decode from "jwt-decode";

class AuthService {
  getUser() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  login = async ({ firstName, lastName, password }) => {
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, password }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("id_token", data.token);
          window.location.assign("/");
        } else {
          throw new Error("login Failed");
        }
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      console.log("Login Failed", err);
    }
  };

  logout = () => {
    localStorage.removeItem("id_token");
    return Promise.resolve();
  };

  checkError = (error) => {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if (error.response.status === 401) {
            throw new Error('unauthorized');
        } else {
            throw new Error(error.response.data.message);
        }
    } else if (error.request) {
        throw new Error('No response from server');
    } else {
        console.log('Error', error.message);
        throw new Error('Request setup failed');
    }
  }

  checkAuth = () => {
    return this.loggedIn() ? Promise.resolve() : Promise.reject();
  }

  getPermissions = () => {
    const role =  this.getUser().role;
    return role ? Promise.resolve(role) : Promise.reject();
  }

  isTokenExpired(token) {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    } catch (err) {
        console.error('failed to decode token', err);
    }
  }

 getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}

export default new AuthService();

