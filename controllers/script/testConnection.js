import axios from "axios";

export const testConnection = async (req, res) => {
  try {
    const { data: quoteData } = await axios.get(
      "https://api.quotable.io/random",
    );
    const { data: imageData } = await axios.get(
      "https://api.unsplash.com/photos/random",
      {
        headers: {
          Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY, // Replace 'your_unsplash_access_key' with your key
        },
      },
    );
    const { content, author } = quoteData;
    const {
      urls: { regular: imageUrl },
    } = imageData;

    res.send(`
      <html> 
        <head>
          <title>Test Connection</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #f8f9fa;
              color: #343a40;
              font-family: Arial, sans-serif;
            }
            .content {
              text-align: center;
              max-width: 80%;
            }
            .text {
              font-size: 36px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .quote {
              font-size: 24px;
              margin-bottom: 10px;
            }
            .author {
              font-size: 20px;
              font-style: italic;
              margin-bottom: 20px;
            }
            img {
                width: 300px;
                height: 200px;
                object-fit: cover;
              }
          </style>
        </head>
        <body>
          <div class="content">
            <p class="text">Connection secured!</p>
            <p class="quote">"${content}"</p>
            <p class="author">- ${author}</p>
            <img src="${imageUrl}" alt="Random Unsplash Image">
          </div>
        </body>
      </html>`);
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Error fetching data");
  }
};
