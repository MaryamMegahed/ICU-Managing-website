let paName = document.querySelector(".pa-name")
let paAge = document.querySelector(".pa-report-age")
let paRoom = document.querySelector(".pa-report-room")
let paProgRatio = document.querySelector(".prog-ratio")
let paProgRatioText = document.querySelector(".prog-ratio-text")


let doctorPatients = new XMLHttpRequest();
window.addEventListener("load", function (e) {
    let patientsList = document.querySelector(".contains")
    doctorPatients.open("GET", "../../doctorPatients.json", true);
    doctorPatients.send();
    
    doctorPatients.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (this.responseText != "") {
                var patients = JSON.parse(this.responseText);
                for (i = 0; i < patients.length; i++) {
                    let patient = document.createElement('div')
                    patient.setAttribute(`data-pNum`, i )
                    patient.className = "patient patient-button row"
                    let name = document.createElement('div')
                        name.className = "name col-4 prevent-click"
                            let nameH3 = document.createElement('h3')
                            nameH3.innerHTML = "Name"
                            nameH3.classList.add("prevent-click")
                            let nameH2 = document.createElement('h2')
                            nameH2.innerHTML = patients[i].name
                            nameH2.classList.add("prevent-click")
                        name.append(nameH3)
                        name.append(nameH2)
                    let age = document.createElement('div')
                        age.className = "age col-4 prevent-click"
                            let ageH3 = document.createElement('h3')
                            ageH3.innerHTML = "Age"
                            ageH3.classList.add("prevent-click")
                            let ageH2 = document.createElement('h2')
                            ageH2.innerHTML = patients[i].age
                            ageH2.classList.add("prevent-click")
                            age.append(ageH3)
                            age.append(ageH2)
                            let prog = document.createElement('div')
                            prog.className = "progress col-4 prevent-click"
                            let progH3 = document.createElement('h3')
                            progH3.innerHTML = "Progress"
                            progH3.classList.add("prevent-click")
                            let progH2 = document.createElement('h2')
                            progH2.innerHTML = patients[i].prog
                            progH2.classList.add("prevent-click")
                            prog.append(progH3)
                            prog.append(progH2)
                            patient.append(name)
                            patient.append(age)
                            patient.append(prog)
                            patientsList.append(patient)
                        }
                        let patiensHide = document.querySelector(".contains")
            let reportShow = document.querySelector(".report")
            
            document.addEventListener("click", function (e) {
                if (e.target.classList.contains("patient-button")) {
                    patiensHide.classList.add("contains-hide")
                    reportShow.classList.add("report-show")
                    for (l = 0; l < patients.length; l++ ) {
                        if (e.target.querySelector(".name h2").innerHTML === patients[l].name) {
                            paName.innerHTML = patients[l].name
                            paAge.innerHTML = patients[l].age
                            paRoom.innerHTML = patients[l].room
                            paProgRatio.style.width = patients[l].prog
                            paProgRatioText.innerHTML = patients[l].prog
                            var bp = []
                            var bs = []
                            for (j = 0; j < patients[l].bp.length; j++) {
                                var dataBP = new google.visualization.DataTable();
                                var dataPG = new google.visualization.DataTable();
                                bp.push(["Day " + (j+1), patients[l].bp[j]])
                                bs.push(["Day " + (j+1), patients[l].bs[j]])
                            }                            
                            dataBP.addColumn('string', 'sitecode');
                            dataBP.addColumn('number', 'Blood Presure');
                            dataBP.addRows(bp)
                            
                            var options = {
                                colors: ['#00aeef'],
                                legend: { position: "none" },
                                titleTextStyle: {
                                color: '#FFF'
                                },
                                    hAxis: {
                                        titleTextStyle: {
                                            color: '#FFF',
                                            fontSize: 18,
                                            fontName: 'Roboto',
                                            italic: false,
                                            bold: true,
                                        },
                                    gridlines: {
                                        color: "transparent"
                                    },
                                    baselineColor: '#FFF',
                                    title: 'Days',
                                        textStyle: {
                                            color: '#FFF',
                                            fontSize: 14,
                                            fontName: 'Roboto',
                                            italic: false,
                                        },
                            },
                                vAxis: {
                                    title: 'Systolic Blood Pressure',
                                    titleTextStyle: {
                                        color: '#FFF',
                                        fontSize: 18,
                                        fontName: 'Roboto',
                                        italic: false,
                                        bold: true,
                                    },
                                    textStyle: {
                                        color: '#FFF',
                                        fontName: 'Roboto',
                                        italic: false,
                                        fontSize: 14
                                    },
                                    baseline: { color: '#FFF' },
                                },
                                width: '90%',
                                height: 500,
                                backgroundColor: '#222468',
                                is3D: false
                                };
                            
                                var chart = new google.visualization.ColumnChart(
                                document.getElementById('bp'));
                            
                                chart.draw(dataBP, options);
                            dataPG.addColumn('string', 'sitecode');
                            dataPG.addColumn('number', 'Blood Glucose');
                            dataPG.addRows(bs)
                            
                            var options = {
                                colors: ['#00aeef'],
                                legend: { position: "none" },
                                titleTextStyle: {
                                color: '#FFF'
                                },
                                    hAxis: {
                                        titleTextStyle: {
                                            color: '#FFF',
                                            fontSize: 18,
                                            fontName: 'Roboto',
                                            italic: false,
                                            bold: true,
                                        },
                                    gridlines: {
                                        color: "transparent"
                                    },
                                    baselineColor: '#FFF',
                                    title: 'Days',
                                        textStyle: {
                                            color: '#FFF',
                                            fontSize: 14,
                                            fontName: 'Roboto',
                                            italic: false,
                                        },
                            },
                                vAxis: {
                                    title: 'Blood Glucose',
                                    titleTextStyle: {
                                        color: '#FFF',
                                        fontSize: 18,
                                        fontName: 'Roboto',
                                        italic: false,
                                        bold: true,
                                    },
                                    textStyle: {
                                        color: '#FFF',
                                        fontName: 'Roboto',
                                        italic: false,
                                        fontSize: 14
                                    },
                                    baseline: { color: '#FFF' },
                                },
                                width: '90%',
                                height: 500,
                                backgroundColor: '#222468',
                                is3D: false
                                };
                            
                                var chart2 = new google.visualization.ColumnChart(
                                document.getElementById('bg'));
                            
                                chart2.draw(dataPG, options);
                            
                            

                        }
                    }
                }
                if (e.target.classList.contains("report-back")) {
                    patiensHide.classList.remove("contains-hide")
                    reportShow.classList.remove("report-show")
                }
            })
        }
    }
}
})




