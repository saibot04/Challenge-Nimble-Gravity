import { useState } from "react";

    function JobCard({ job }) {
    const [repoUrl, setRepoUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implementar la lógica de envío a la API usando el repoUrl y job.id
        console.log("Enviando postulación para:", job.id, "con el repo:", repoUrl);
    };

    return (
        <div>
        <h3>{job.title}</h3>
        <p><small>ID: {job.id}</small></p>
        
        <form onSubmit={handleSubmit}>
            <input
            type="url"
            placeholder="https://github.com/usuario/repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            required
            pattern=".*github\.com.*" 
            title="Por favor, introduce una URL válida de GitHub"
            />
            <button type="submit">
            Submit Application
            </button>
        </form>
        </div>
    );
}
export default JobCard;

