import React, { useState } from "react";
// import { Configuration, OpenAIApi } from "openai";
// import ChatInterface from "./ChatInterface";
import Chat from "./Chat";

const ChatAi = () => {
  // const configuration = new Configuration({
  //   apiKey: process.env.REACT_APP_Key,
  // });
  // console.log(process.env.REACT_APP_Key);
  // delete configuration.baseOptions.headers["User-Agent"];
  // let openai = new OpenAIApi(configuration);
  // const [prompt, setPrompt] = useState("");
  // const [result, setResult] = useState("");
  // const [loading, setLoading] = useState(false);
  // console.log(openai);
  // const handleClick = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await openai.createCompletion({
  //       model: "text-davinci-003",
  //       prompt: prompt,
  //       temperature: 0.5,
  //       max_tokens: 100,
  //     });

  //     setResult(response.data.choices[0].text);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoading(false);
  // };
  return (
    <div>
      {/* <main className="main">
        <div className="w-2/4 mx-auto">
          <textarea
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write your prompt."
            cLassName="textarea"
          ></textarea>

          <button
            onClick={handleClick}
            disabled={loading || prompt.length === 0}
            className="btn"
          >
            {loading ? "Generating" : "Generate"}
          </button>
          <p className="text-xl">{result}</p>
        </div>
      </main>
      <ChatInterface></ChatInterface> */}
      <Chat></Chat>
    </div>
  );
};

export default ChatAi;
