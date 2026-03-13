import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LeaderBoard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setData(store);
    console.log(data);
  }, []);
  const handleStorage = () => {
    localStorage.removeItem("leaderboard");
    setData([]);
  };
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
      {data.length === 0 ? (
        <>
          <h2 className="text-muted">No Scores Yet! Play the quiz.</h2>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Play Quiz
          </button>
        </>
      ) : (
        <>
          <table className="table table-striped shadow">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElm, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{curElm.name}</td>
                    <td>{curElm.score}</td>
                    <td>{curElm.percentage}%</td>
                    <td>{curElm.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="btn btn-danger mt-3" onClick={handleStorage}>
            Clear Leaderboard
          </button>
        </>
      )}
    </div>
  );
};

export default LeaderBoard;
