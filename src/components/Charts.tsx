import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const scoreData = [
  { year: 2022, score: 70 },
  { year: 2023, score: 79 },
  { year: 2024, score: 82 },
  { year: 2025, score: 98 },
];

const studentsData = [
  { year: 2022, students: 1100 },
  { year: 2023, students: 1300 },
  { year: 2024, students: 1600 },
  { year: 2025, students: 2000 },
];

const COLORS = ["#2563eb", "#f97316", "#16a34a", "#9333ea"]; // blue, orange, green, purple

const Charts = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 p-4 bg-white rounded-lg shadow-md">
      {/* Graph 1: Session vs Score */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-center text-lg font-semibold mb-4 text-blue-700">
          Session vs Score
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={scoreData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" barSize={50}>
              {scoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Graph 2: Students per Session */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-center text-lg font-semibold mb-4 text-green-700">
          Students per Session
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={studentsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" barSize={50}>
              {studentsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
