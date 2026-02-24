import { useApplication } from "./hooks/useApplication"; // Cambiado
import JobCard from "./components/JobsList";
import styles from "./App.module.css";

function App() {
    const { jobs, candidate, loading, error, submitApplication } = useApplication();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Nimble Gravity - Open Positions</h1>
                {candidate && <p>Hola, <strong>{candidate.firstName}</strong>. Selecciona una posición:</p>}
            </header>

            <main>
                {loading && <div className={styles.loader}><p>Cargando...</p></div>}
                
                {error && !loading && (
                    <div className={styles.errorMsg}>
                        <p>⚠️ {error}</p>
                        <button onClick={() => window.location.reload()} className={styles.retryBtn}>Reintentar</button>
                    </div>
                )}

                {!loading && !error && (
                    <div className={styles.jobsGrid}>
                        {jobs.map((job) => (
                            <JobCard 
                                key={job.id} 
                                job={job} 
                                candidate={candidate}
                                onApply={submitApplication}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
export default App;