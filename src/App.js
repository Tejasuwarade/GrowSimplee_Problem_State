import React ,{useState,useEffect} from "react";
import Data from './data.json';
import Component from './components/component.js';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {directive} from '@babel/types';
import './index.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      columnDefs:[
        {headerName:'ID',field:'id',sortable:true,filter:true,checkboxSelection:true},
        {headerName:'Season',field:'season',sortable:true,filter:true},
        {headerName:'City',field:'city',sortable:true,filter:true}, 
        {headerName:'Date',field:'date',sortable:true,filter:true},  
        {headerName:'Team1',field:'team1',sortable:true,filter:true},  
        {headerName:'Team2',field:'team2',sortable:true,filter:true},  
        {headerName:'Toss-Winner',field:'toss_winner',sortable:true,filter:true},  
        {headerName:'Toss-Decision',field:'toss_decision',sortable:true,filter:true},  
        {headerName:'Result',field:'result',sortable:true,filter:true},
        {headerName:'Dl-Applied',field:'dl_applied',sortable:true,filter:true}, 
        {headerName:'Winner',field:'winner',sortable:true,filter:true},
        {headerName:'Win-By-Runs',field:'win_by_runs',sortable:true,filter:true},
        {headerName:'Win-By-Wickets',field:'win_by_wickets',sortable:true,filter:true},  
        {headerName:'Player-Of-The-Match',field:'player_of_match',sortable:true,filter:true},
        {headerName:'Venue',field:'venue',sortable:true,filter:true}

              

      ],

      // rowData:null,
      rowData:Data
        
                
      

    };
  }
  


  render() {
  return (
    <div>
      <div id="title" align="center">
        IPL Data
      </div>

    <div className="ag-theme-balham"
    style={{
      width:1500,
      height:1000
    }}>



      <AgGridReact 
      columnDefs={this.state.columnDefs}
      rowData={this.state.rowData}/>
    </div>

    </div>
    
  );
}

}

export default App;
