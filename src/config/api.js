export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_BASE_URL,
    CANDIDATE_EMAIL: import.meta.env.VITE_MI_EMAIL,

    ENDPOINTS: {
    CANDIDATE: '/api/candidate/get-by-email',
    JOBS: '/api/jobs/get-list',
    APPLY: '/api/candidate/apply-to-job'
}
};