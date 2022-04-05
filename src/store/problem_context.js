import { createContext, useEffect, useState } from "react";

const axios = require("axios");

const ProblemContext = createContext({
  fetchedData: [],
  isLoading: true,
  getAllProblems: (url) => {},

  problemDetail: {},
  getOneProblem: (id) => {},

  getOneSolution: (id) => {},

  deleteOneProblem: (id) => {},

  getProbPostedByUser:()=>{}
});

export function ProblemContextProvider(props) {
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedProb, setFetchedProb] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllProblems(url) {
    var user = JSON.parse(localStorage.getItem("user"));
    var token = user["accessToken"];

    try {
      const response = await axios.get(url, {
        headers: {
          "x-access-token": `${token}`,
        },
      });
      const data = response.data;
      console.log(data);
      if (data) {
        setIsLoading(false);
        setFetchedData(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProblem(id, who) {
    var user = JSON.parse(localStorage.getItem("user"));
    var token = user["accessToken"];

    const response = await axios.get(
      `http://localhost:5000/api/${who}/getProblemDetail/${id}`,
      {
        headers: {
          "x-access-token": `${token}`,
        },
      }
    );
    const data = response.data;
    if (data) {
      console.log(data);
      localStorage.setItem("problemDetail", JSON.stringify(data));
    }
  }

  async function getOneSolution(id) {
    var user = JSON.parse(localStorage.getItem("user"));
    var token = user["accessToken"];

    const response = await axios.get(
      `http://localhost:5000/api/user/getSolutionDetail/${id}`,
      {
        headers: {
          "x-access-token": `${token}`,
        },
      }
    );
    const data = response.data;
    if (data) {
      console.log(data);
      localStorage.setItem("solutionDetail", JSON.stringify(data));
    }
  }

  async function deleteOneProblem(id) {
    var user = JSON.parse(localStorage.getItem("user"));
    var token = user["accessToken"];

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/user/deleteOneproblem/${id}`,
        {
          headers: {
            "x-access-token": `${token}`,
          },
        }
      );
      const data = response.data;
      if (data) {
        console.log(data);
      }
    } catch (err) {
      console.log("");
      console.log(err);
    }
  }

  async function getProbPostedByUser() {
    var user = JSON.parse(localStorage.getItem("user"));
    var token = user["accessToken"];
    try {
      const response = await axios.get("http://localhost:5000/api/user/getYourProblems", {
        headers: {
          "x-access-token": `${token}`,
        },
      });
      const data = response.data;
      if(data){
        setFetchedProb(data)
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const context = {
    fetchedData: fetchedData,
    isLoading: isLoading,
    getAllProblems: getAllProblems,

    getOneProblem: getOneProblem,

    getOneSolution: getOneSolution,

    deleteOneProblem: deleteOneProblem,

    getProbPostedByUser:getProbPostedByUser,

    fetchedProb:fetchedProb

  };
  return (
    <ProblemContext.Provider value={context}>
      {props.children}
    </ProblemContext.Provider>
  );
}

export default ProblemContext;
