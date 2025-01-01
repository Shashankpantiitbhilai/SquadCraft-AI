import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Filter } from "lucide-react";
import Header from "../components/Header/Header";
import MatchCard from "../components/landingPage/MatchCard";
import { setDate, setMatchType } from "../redux/slices/matchSlice";
import l from "../assets/l.jpg";

const AllMatches = () => {
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMatchType, setSelectedMatchType] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    dispatch(setDate(date));
    if (date && selectedMatchType) {
      handleFilterMatches(date, selectedMatchType);
    }
  };

  const handleMatchTypeChange = (event) => {
    const matchType = event.target.value;
    setSelectedMatchType(matchType);
    dispatch(setMatchType(matchType));
    if (selectedDate && matchType) {
      handleFilterMatches(selectedDate, matchType);
    }
  };

  const handleFilterMatches = async (date, matchType) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/v1/findAllMatches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          matchType: matchType,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          setFilteredMatches(data.filteredMatches);
        } else {
          alert(data.message);
        }
      } else {
        alert("Failed to fetch filtered matches.");
      }
    } catch (error) {
      console.error("Error fetching filtered matches:", error);
      alert("An unexpected error occurred while filtering matches.");
    }
  };

  useEffect(() => {
    const getAllMatches = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/v1/getAllMatches", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.status) {
            setFilteredMatches(data.matches);
          }
        } else {
          alert("Failed to fetch matches. Try again.");
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
        alert("An unexpected error occurred.");
      }
    };

    getAllMatches();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-blue-800">Upcoming Matches</h1>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Filter className="mr-2" />
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {isFilterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Match Type</label>
                <select
                  value={selectedMatchType}
                  onChange={handleMatchTypeChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">All Match Types</option>
                  <option value="T20">T20</option>
                  <option value="ODI">ODI</option>
                  <option value="Test">Test</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match, index) => (
              <MatchCard
                key={index}
                teamA={match.team1}
                teamB={match.team2}
                date={match.date}
                timeLeft="33h"
                matchImage={l}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">
              No matches found based on the selected filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMatches;
