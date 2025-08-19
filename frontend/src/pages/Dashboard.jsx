import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", usage: 400 },
  { name: "Feb", usage: 300 },
  { name: "Mar", usage: 500 },
  { name: "Apr", usage: 200 },
  { name: "May", usage: 600 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid gap-6">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Cloud Usage Dashboard
        </h1>

        {/* Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Usage Over Time</h2>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}
                  labelStyle={{ color: "#111827", fontWeight: "bold" }}
                />
                <Line type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6, fill: "#2563eb" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
