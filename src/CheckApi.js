import React from "react";
import { useState } from "react";
import axios from "axios";

const CheckApi = () => {
  const [url, setUrl] = useState(null);
  const [key, setKey] = useState(null);
  const [id, setId] = useState(null);

  async function buttonHandler() {
    console.log('fetching...')
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/js",
        api_key: key,
        api_id: id,
      },
    };

    try {
      const  data = await axios.get(url, (id || key) && config);
      console.log({ data });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <input
        style={{
          color: "white",
          backgroundColor: "black",
          border: "1px solid white",
          padding: "10px",
          marginBottom: "10px",
        }}
        placeholder="Enter API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <input
        style={{
          color: "white",
          backgroundColor: "black",
          border: "1px solid white",
          padding: "10px",
          marginBottom: "10px",
        }}
        placeholder="Enter API Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />

      <input
        style={{
          color: "white",
          backgroundColor: "black",
          border: "1px solid white",
          padding: "10px",
          marginBottom: "10px",
        }}
        placeholder="Enter API ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button
        style={{
          color: "white",
          backgroundColor: "black",
          border: "1px solid white",
          padding: "10px",
        }}
        onClick={buttonHandler}
      >
        Check API
      </button>
    </div>
  );
};

export default CheckApi;
