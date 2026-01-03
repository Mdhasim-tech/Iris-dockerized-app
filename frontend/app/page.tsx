"use client";

import { useState } from "react";

type PredictionResponse = {
  prediction: string;
};

export default function Home() {
  const [features, setFeatures] = useState<number[]>([0, 0, 0, 0]);
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (index: number, value: string) => {
    const updated = [...features];
    updated[index] = Number(value);
    setFeatures(updated);
  };

  const predict = async (): Promise<void> => {
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ features }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data: PredictionResponse = await res.json();
      setResult(data.prediction);
    } catch {
      setError("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">🌸 Iris Flower Prediction</h1>
        <p className="subtitle">
          Enter flower measurements to predict the species
        </p>

        {[
          "Sepal Length",
          "Sepal Width",
          "Petal Length",
          "Petal Width",
        ].map((label, i) => (
          <input
            key={i}
            type="number"
            placeholder={label}
            className="input"
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}

        <button
          onClick={predict}
          className="button"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {result && (
          <div className="result">
            🌼 Prediction: <strong>{result}</strong>
          </div>
        )}

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
