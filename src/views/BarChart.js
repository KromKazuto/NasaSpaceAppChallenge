import React from 'react'
import lodash from 'lodash';
import { Bar } from 'react-chartjs-2'

export default function CardView(cities) {
    let groupCities = lodash.groupBy(cities['cities'], 'municipio_name');
    let focosList = [];
    let cityList  = Object.keys(groupCities);
    Object.values(groupCities).forEach((item, key) => {
        focosList.push(item[0].count_focos);
    });

    return (
        cityList && cityList[0]
        ?
        <Bar className="grafico"
            data = {{
                labels: cityList,
                datasets: [{
                    label: 'Área incendiada',
                    data: focosList,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }}
            options = {{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
        />
        :
        <Bar
            data = {{
                labels: [],
                datasets: [{
                    label: 'Área incendiada',
                    borderWidth: 1
                }]
            }}
        />
    )
}
