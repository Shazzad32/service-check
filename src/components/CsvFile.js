import React, { useState } from "react";
import Papa from "papaparse";

const CsvUpload = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true, // Use true if your CSV has headers
        skipEmptyLines: true,
        complete: (results) => {
          console.log(results.data);
          setCsvData(results.data); // Set the parsed data to state
        },
        error: (error) => {
          console.error("Error parsing CSV: ", error);
        },
      });
    }
  };

  return (
    <div>
      <h1>Upload CSV File</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div>
        <h2>Parsed CSV Data:</h2>
        <pre>{JSON.stringify(csvData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CsvUpload;
