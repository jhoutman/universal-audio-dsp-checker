import React from "react";
import dspUsageTable from "../dsp-usage-table";
import theme from "../constants/theme";
import styled from "styled-components";

const DSPTable = () => (
  <table border="0" cellspacing="0" cellpadding="0" style={{ width: "100vw" }}>
    <thead>
      <DspTableHeadRow>
        <DspTableHeadCell>Plugin name</DspTableHeadCell>
        <DspTableHeadCell>Mono %</DspTableHeadCell>
        <DspTableHeadCell>Stereo %</DspTableHeadCell>
      </DspTableHeadRow>
    </thead>
    <tbody>
      {dspUsageTable.map((item, index) => (
        <DspTableRow key={index}>
          <DspTableCell>{item.name}</DspTableCell>
          <DspTableCell>{item.mono}</DspTableCell>
          <DspTableCell>{item.stereo}</DspTableCell>
        </DspTableRow>
      ))}
    </tbody>
  </table>
);

const DspTableHeadRow = styled.tr`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
`;

const DspTableHeadCell = styled.td`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 8px;
`;

const DspTableRow = styled.tr`
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  background: #fff;

  &:nth-child(even) {
    background: #f9f7f5;
  }

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.accent2};
  }
`;

const DspTableCell = styled.td`
  padding: 8px;
  border-top: 1px solid ${theme.colors.black};
`;

export default DSPTable;
