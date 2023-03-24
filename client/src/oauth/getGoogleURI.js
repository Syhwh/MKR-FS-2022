export const getGoogleURI = () => {
    const googleURI = 'https://accounts.google.com/o/oauth2/v2/auth';
    const googleParams = {
        client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_URI_REDIRECT,
        response_type: 'code',
        scope: [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'openid'
        ].join(' '),
        access_type: 'offline',
        prompt: 'consent',
    };
    const googleParamsString = Object.keys(googleParams)
        .map(key => `${key}=${googleParams[key]}`)
        .join('&');
        // const query= new URLSearchParams(googleParams);

    return `${googleURI}?${googleParamsString}`;
};