import queryString from "query-string";

export const createAuthUrl = (req, res) => {
  try {
    const stringifiedParams = queryString.stringify({
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: "http://localhost:3000",
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "), // space seperated string
      response_type: "code",
      access_type: "offline",
      prompt: "consent",
    });
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
    console.log(googleLoginUrl);
    return res.status(200).json({ data: { url: googleLoginUrl }, err: null });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: null, err });
  }
};
