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

    return { jobs, candidate, loading, error };
}
