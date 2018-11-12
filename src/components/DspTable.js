import React from "react";

import dspUsageTable from "../dsp-usage-table";
import theme from "../constants/theme";
import styled from "styled-components";
import sampleRates from "../constants/sample-rates";
import {
  sortPropertyAlphabetical,
  sortPropertyNumeric,
  SORT_ASCENDING,
  SORT_DESCENDING
} from "../utils/sort";

class DSPTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pluginTable: dspUsageTable.map(plugin => ({
        ...plugin,
        mono: parseFloat(plugin.mono.replace("%", "")),
        stereo: parseFloat(plugin.stereo.replace("%", ""))
      })),
      nameFilter: "",
      amountOfDSPChips: 1,
      sortedOn: "name",
      sortOrder: SORT_ASCENDING,
      sortFn: sortPropertyAlphabetical,
      freqFilter: sampleRates[0]
    };
  }

  listFilter(searchQuery) {
    const searchQueryLowerCase = searchQuery.toLowerCase();
    const findSearch = listTitle =>
      listTitle.toLowerCase().indexOf(searchQueryLowerCase) !== -1;

    return listItem => findSearch(listItem.name);
  }

  getFilteredDSPUsageTable() {
    return this.state.nameFilter
      ? dspUsageTable.filter(this.listFilter(this.state.nameFilter))
      : dspUsageTable;
  }

  sortField(fieldName, sortFn) {
    this.setState({
      sortedOn: fieldName,
      sortFn,
      sortOrder:
        fieldName === this.state.sortedOn
          ? this.toggleSortDirection(fieldName)
          : SORT_ASCENDING
    });
  }

  changeFilter(event) {
    console.log(event.currentTarget.value);
    this.setState({ nameFilter: event.currentTarget.value });
  }

  toggleSortDirection() {
    return this.state.sortOrder === SORT_ASCENDING
      ? SORT_DESCENDING
      : SORT_ASCENDING;
  }

  getSortOrderWhenSelected(fieldName) {
    return fieldName === this.state.sortedOn ? this.state.sortOrder : undefined;
  }

  modifyAmountOfDSPChips(event) {
    const amount = parseInt(event.currentTarget.value, 10);
    this.setState({
      amountOfDSPChips: amount >= 0 ? amount : 1
    });
  }

  render() {
    const plugins = this.getFilteredDSPUsageTable().sort(
      this.state.sortFn(this.state.sortedOn, this.state.sortOrder)
    );

    return (
      <div>
        <input type="text" onChange={event => this.changeFilter(event)} />
        <input
          type="number"
          value="0"
          onChange={event => this.modifyAmountOfDSPChips}
        />
        <table
          border="0"
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "100vw" }}
        >
          <thead>
            <DspTableHeadRow>
              <DspTableHeadCell
                onClick={() => this.sortField("name", sortPropertyAlphabetical)}
                currentSortedDirection={this.getSortOrderWhenSelected("name")}
              >
                Plugin name
              </DspTableHeadCell>
              <DspTableHeadCell
                onClick={() => this.sortField("mono", sortPropertyNumeric)}
                currentSortedDirection={this.getSortOrderWhenSelected("mono")}
              >
                Mono %
              </DspTableHeadCell>
              <DspTableHeadCell
                onClick={() => this.sortField("stereo", sortPropertyNumeric)}
                currentSortedDirection={this.getSortOrderWhenSelected("stereo")}
              >
                Stereo %
              </DspTableHeadCell>
            </DspTableHeadRow>
          </thead>
          <tbody>
            {plugins.map((item, index) => (
              <DspTableRow key={index}>
                <DspTableCell>{item.name}</DspTableCell>
                <DspTableCell>{item.mono}</DspTableCell>
                <DspTableCell>{item.stereo}</DspTableCell>
              </DspTableRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const DspTableHeadRow = styled.tr`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
`;

const DspTableHeadCell = styled.td`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 8px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: hotpink;
  }
`;

const DspTableRow = styled.tr`
  transition: all 0.15s ease-out;
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
