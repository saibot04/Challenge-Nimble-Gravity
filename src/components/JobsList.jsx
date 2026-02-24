import { useState } from "react";
import styles from  "./JobsList.module.css";

    function JobCard({ job, onApply }) {
    const [repoUrl, setRepoUrl] = useState("");
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const result = await onApply(job.id, repoUrl);

        if (result.success) {
            setStatus("success");
            setRepoUrl("");
        } else {
            setStatus("error");
            alert(result.error);
        }
    };

    return (
        <div className={styles.card}>
            <h3>{job.title}</h3>
            {status === "success" ? (
                <p className={styles.successText}>¡Postulación enviada!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="url"
                        placeholder="https://github.com/usuario/repo"
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        required
                        pattern=".*github\.com.*" 
                        title="Por favor, introduce una URL válida de GitHub"
                        disabled={status === "loading"}
                        className={styles.input}
                    />
                    <button 
                        type="submit" 
                        className={styles.button}
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Enviando..." : "Submit Application"}
                    </button>
                </form>
            )}
        </div>
    );
}
export default JobCard;

