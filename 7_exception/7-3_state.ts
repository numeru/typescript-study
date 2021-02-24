{
  type SuccessState = {
    result: "success";
  };
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: "fail",
        reason: "timeout",
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      const result = this.client.tryConnect();
      return result;
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      const state = this.userService.login();
      if (state.result === "fail") {
        //
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}
