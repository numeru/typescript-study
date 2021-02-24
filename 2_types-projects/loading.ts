{
  //Print Loading State

  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(curState: ResourceLoadState) {
    switch (curState.state) {
      case "loading":
        console.log("Loading....");
        break;
      case "success":
        console.log(`${curState.response.body}`);
        break;
      case "fail":
        console.log(`${curState.reason}`);
        break;
      default:
        throw new Error("unknown error");
    }
  }

  printLoginState({ state: "loading" }); // loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // loaded
  printLoginState({ state: "fail", reason: "no network" }); // no network
}
