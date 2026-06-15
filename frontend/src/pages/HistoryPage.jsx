import { useEffect, useState } from "react";
import API from "../services/api";
import HistoryCard from "../components/HistoryCard";

function HistoryPage() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        API.get("/history")
            .then((response) => {
                setHistory(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div>

            <h1>Analysis History</h1>

            {
                history.map((analysis) => (
                    <HistoryCard
                        key={analysis.id}
                        analysis={analysis}
                    />
                ))
            }

        </div>
    );
}

export default HistoryPage;