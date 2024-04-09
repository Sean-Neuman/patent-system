// src/components/ExplorePage.js
import React, { useState } from "react";
import patents from "../mockPatents";
import PatentCard from "../components/PatentCard";
import Navbar from "@/components/Navbar";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatents = patents.filter((patent) =>
    patent.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div>
        <input
          type="text"
          placeholder="Search patents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
        />
        <div>
          {filteredPatents.map((patent) => (
            <PatentCard key={patent.id} patent={patent} />
          ))}
        </div>
      </div>
    </>
  );
}
