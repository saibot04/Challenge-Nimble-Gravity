import { useApplication } from "./hooks/useApplication"; // Cambiado
import JobCard from "./components/JobsList";

function App() {
    const { jobs, candidate, loading, error } = useApplication();

    return (
        <div>
            <header>
                <h1>Nimble Gravity - Open Positions</h1>
                {candidate && <p>Hola, <strong>{candidate.firstName}</strong>. Selecciona una posición:</p>}
            </header>

            <main>
                {loading && <div><p>Cargando...</p></div>}
                
                {error && !loading && (
                    <div>
                        <p>⚠️ {error}</p>
                        <button onClick={() => window.location.reload()}>Reintentar</button>
                    </div>
                )}

                {!loading && !error && (
                    <div>
                        {jobs.map((job) => (
                            <JobCard 
                                key={job.id} 
                                job={job} 
                                candidate={candidate}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
export default App;