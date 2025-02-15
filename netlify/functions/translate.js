require("dotenv").config();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.handler = async (event) => {
    try {
        console.log("Incoming request:", event.body); // Log request data

        const { inputCode, fromLang, toLang } = JSON.parse(event.body);
        if (!inputCode || !fromLang || !toLang) {
            throw new Error("Missing required fields.");
        }

        console.log("Calling OpenAI API..."); // Log before API call

        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4",
                prompt: `Translate the following ${fromLang} code to ${toLang}:\n\n${inputCode}`,
                max_tokens: 1000,
            }),
        });

        const data = await response.json();
        console.log("OpenAI API response:", data); // Log API response

        if (!data.choices) {
            throw new Error("No translation returned from OpenAI.");
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("Error:", error); // Log error details
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
