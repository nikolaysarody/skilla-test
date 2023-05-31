const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || '';
};

export const SKILLA_API_URL = getEnvVar('REACT_APP_SKILLA_API_URL');
