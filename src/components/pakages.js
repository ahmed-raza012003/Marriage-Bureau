import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { motion } from "framer-motion";

const columns = ["Packages", "Direct Messages", "Duration(Days)", "Profile Status", "Price-Rs"];
const rows = [
  ["Free", "10", "30", "Not Verified", "0"],
  ["Basic", "30", "60", "Not Verified", "1000"],
  ["Silver", "50", "90", "Semi Verified", "3000"],
  ["Gold", "100", "120", "Verified", "5000"],
];

const Packages = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#800000",
            cursor: "pointer",
          }}
        >
          Packages
        </Typography>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <TableContainer component={Paper} elevation={4} sx={{ maxWidth: "90%", margin: "auto", borderRadius: "10px" }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((col, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      backgroundColor: "#f5f5f5",
                      color: "#800000",
                    }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex} hover>
                  {row.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      align="center"
                      sx={{
                        fontSize: "14px",
                        "&:hover": {
                          backgroundColor: "#f0f0f0",
                          transition: "0.3s",
                        },
                      }}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </Box>
  );
};

export default Packages;
