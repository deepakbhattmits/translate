import React,{ Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import worldbank from '../apis/worldbank';

class HighCharts extends Component {
    state={ 
        GDParrayDate: [],
        GDParrayValue: [],
        GDPLastupdated: '',
        chartOptions: {
            xAxis: {
                categories :[]
            },
            series: [{ 
                        data: []
                    }]
        },
        plotOptions:{
            series: {
                points: {
                    events: {
                        mouseOver: this.setHoverData,
                    }
                }
            }
        },
        hoverData: null
    }
    componentDidMount (){
       this.getData();
    }
    getData = async ( e ) => {
       const response = await worldbank.get('');
    //    console.log('TEST GDP :',response.data);
       // const GDParray =  response.data[1];
        const GDPLastupdated =  response.data[0].lastupdated
        response.data[1].map( ({ date, value }) => {
             console.log('TEST date :',date);
            return this.setState({GDParrayDate: [...this.state.GDParrayDate, date], GDParrayValue: [...this.state.GDParrayValue, value]})
        });
        // this.setState({ 
        //                 xAxis: { ...this.state.xAxis, categories: this.state.GDParrayDate },
        //                 series: { ...this.state.xAxis, data: this.state.GDParrayValue} 
        //             });
        var chartOptions = {...this.state.chartOptions}
        chartOptions.xAxis.categories =  this.state.GDParrayDate;
        chartOptions.series[0].data = this.state.GDParrayValue;
        this.setState({chartOptions})
       this.setState({ GDPLastupdated });
        // console.log('GDP ARRAY date:',this.state.GDParrayDate,'value : ',this.state.GDParrayValue,'lastupdated : ',this.state.GDPLastupdated);
        // console.log('chartOptions : ',this.state.chartOptions)
    }
//    state={
//         chartOptions: {
//             xAxis: {
//                 categories :['deepak','nishant','praveen']
//             },
//             series: [
//                 {data: [90,60,70,60,65,44,23,43]}
//             ]
//         },
//         plotOptions:{
//                 series: {
//                     points: {
//                         events: {
//                             mouseOver: this.setHoverData,
//                         }
//                     }
//                 }
//             },
//             hoverData: null
//         }
        setHoverData = ( e ) => {
            console.log('TEST');
            this.setState({hoverData: e.target.category})
        }
    render () {
        console.log('chartoption default : ',this.state.chartOptions)
        const { chartOptions, hoverData } = this.state;
                return (
            <div>
                <HighchartsReact 
                    highcharts={ Highcharts }
                    options={ chartOptions }
                />
                <span> HOVERING over { hoverData }</span>
            </div>
        );
    }
};
export default HighCharts; 