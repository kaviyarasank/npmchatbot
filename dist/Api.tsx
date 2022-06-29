const API = {
  GetChatbotResponse: async (message: string) => {
    return new Promise(function(resolve) {
        if (message === "hi") resolve("Welcome to chatbot!");
        else {
            resolve("RepeatMode"+`${" "}` + message)
        }
    });
  }
};

export default API;
