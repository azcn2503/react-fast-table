import React, { PureComponent } from "react";
import { Table } from "react-virtualized";

export default class ReactFastTable extends PureComponent {
  constructor(props) {
    super(props);
    this.rowGetter = this.rowGetter.bind(this);
    this.state = {
      width: 0,
      height: 0,
      data: []
    };
  }

  componentDidMount() {}

  rowGetter({ index }) {
    return this.state.data[index];
  }

  render() {
    return (
      <div>
        <Table
          width={this.state.width}
          height={this.state.height}
          rowHeight={20}
          rowCount={0}
          rowGetter={this.rowGetter}
        />
      </div>
    );
  }
}
