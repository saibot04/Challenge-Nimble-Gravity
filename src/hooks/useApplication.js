import { useState, useEffect } from "react";
import { API_CONFIG } from "../config/api";

export function useApplication() {
    const [jobs, setJobs] = useState([]);
    const [candidate, setCandidate]= useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const initData = async () => {
            try {
                setLoading(true);

                const resCand = await fetch(
                    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CANDIDATE}?email=${API_CONFIG.CANDIDATE_EMAIL}`
                );
                if (!resCand.ok) throw new Error("No se pudo obtener el perfil del candidato");
                const dataCand = await resCand.json();
                setCandidate(dataCand);

                const resJobs = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.JOBS}`);
                if (!resJobs.ok) throw new Error("No se pudieron obtener los puestos");
                const dataJobs = await resJobs.json();
                setJobs(dataJobs);
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
        };
        initData();
    }, []);

    const submitApplication = async (jobId, repoUrl) => {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.APPLY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uuid: candidate.uuid,
                applicationId: candidate.applicationId,
                candidateId: candidate.candidateId,
                jobId: jobId,
                repoUrl: repoUrl
            }),
        });

        if (!response.ok) throw new Error("Error al enviar la postulación");
        return { success: true };
    } catch (err) {
        return { success: false, error: err.message };
    }
    };

    return { jobs, candidate, loading, error, submitApplication };
}
