import React from 'react'
import Chart from "chart.js"

export default class MyPieChart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            type: 'doughnut',
            data : {
                labels: ["Direct", "Referral", "Social"],
                datasets: [{
                  data: [55, 30, 15],
                  backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                  hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                  hoverBorderColor: "rgba(234, 236, 244, 1)",
                }]
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                    },
                legend: {
                    display: false
                },
                cutoutPercentage: 80
            }
        }}

        chartRef = React.createRef();

        componentDidMount =()=>{
            const myChartRef = this.chartRef.current.getContext("2d");

            new Chart(myChartRef, {
                type: this.state.type,
                data: this.state.data,
                options: this.state.options,
                legend: this.state.legend,
                cutoutPercentage: this.state.cutoutPercentage
            })
        }

    render(){
        
        return (
            <>
                <canvas id="myPieChart" ref={this.chartRef}></canvas>
            </>
        )
    }
    
}

