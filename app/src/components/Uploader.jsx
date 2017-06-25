import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import Papa from 'papaparse';
import Griddle from 'griddle-react';

class Uploader extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [],
      data: []
    }
  }

  onDrop(files) {
    console.log(files);
    Papa.parse(files[0] , {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        console.log(results);
        this.setState({
          data: results.data,
        });
        console.log(this.state.data)
      }.bind(this)
    });
  }

  render() {

    const cardStyle = {
      margin: 10,
      backgroundColor: 'DarkGray',
      color: 'White'
    }

    const iconStyle = {
      fontSize: 100,
      color: 'White',
    }

    const dzStyle = {
      textAlign: 'center',
      padding: 5,
    }

    const dzAccepted = {
      boxShadow: 'inset 0px 0px 20px 10px rgb(15, 175, 0)'
    }

    const GriddleLayout = ({ Table, Pagination }) => (
      <div>
        <Pagination />
        <Table />
      </div>
    )

    return (
      <div>
        <Card style={cardStyle}>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)} disablePreview={true} style={dzStyle} activeStyle={dzAccepted} accept accept={'.csv'} multiple={false}>
              <p>Drag your CSV file here or click to Browse your Computer.</p>
              <FontIcon className="material-icons" style={iconStyle}>backup</FontIcon>
            </Dropzone>
          </div>
        </Card>
        <Griddle data={this.state.data} components={{Layout: GriddleLayout}} />
      </div>
    );
  }
}

export default Uploader;
