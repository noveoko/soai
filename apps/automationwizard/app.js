console.log("main js loaded")
const App = {
    data() {
        return {
            choices: { frequency: 50, duration: 60, workers: 1, pay: 15, developerSalary: 35, developmentTime: 5, workerSalary: false,sameWorker:true,salaryCountry:"106810",salaryCalc:0 },
            frequency: [{ value: 50, label: "50/day" },
            { value: 5, label: "5/day" },
            { value: 1, label: "1/day" },
            { value: 0.14, label: "weekly" },
            { value: 0.03, label: "monthly" },
            { value: 0.0027, label: "yearly" }],
            duration: [{ value: 1, label: "1 second" },
            { value: 5, label: "5 seconds" },
            { value: 30, label: "30 seconds" },
            { value: 60, label: "1 minute" },
            { value: 300, label: "5 minutes" },
            { value: 1800, label: "30 minutes" },
            { value: 3600, label: "1 hour" },
            { value: 21600, label: "6 hours" },
            { value: 86400, label: "24 hours" },
            { value: 172800, label: "48 hours" },
            { value: 604800, label: "1 week (24/day)" }],
            prefs:{labelWidth:300},
            salaries:{"USA":106810,
                "Switzerland":88700,
                "New Zealand":76644,
                "Norway":61000,
                "Denmark":66322,
                "United Kingdom":59000,
                "Sweden":45112,
                "Germany":54311,
                "Netherlands":51162,
                "Finland":43000,
                "Australia":46500,
                "France":40119}
        }

    },
    computed:{
            getChoices:function(){
                return this.choices
            },
    },
    mounted: function () {
            this.prefs.labelWidth = this.widestElem('span');},
    methods:{
        manualWork:function(){
            let data = this.manualTaskCost();
            return data
        },
        secondsTo:function(seconds, time){
            switch (time) {
                case 'minute':
                    return seconds/60
                    break;
                case 'hour':
                    return seconds/60/60
                    break;
                case 'day':
                    return seconds/60/60/24
                    break
                default:
                    break;
            }
        },
        manualTaskCost:function(){
            //values
            let frequency = this.choices.frequency;
            let duration = this.choices.duration;
            let workersCount = this.choices.workers;
            let workerCost = this.choices.pay;
            let workerCostSecond = this.choices.pay/60/60;
            let daysPerMonth = 20;
            //calculations
            let workerCostPerSecond = workerCost/60/60;
            let taskCostPerRun = workerCostSecond*duration;
            let taskCostMonth = taskCostPerRun*frequency*daysPerMonth*workersCount;
            let taskCostYear = 2

            return [{label:"Worker $/sec",value:workerCostPerSecond.toFixed(4)},
                    {label:"Team $/sec",value:(workerCostPerSecond*workersCount).toFixed(4)},
                    {label:"Task $/instance",value:`$${(taskCostPerRun).toFixed(2)}`},
                    {label:"Task $/month",value:taskCostMonth.toFixed(2)}]
        },
        getRadio:function(name="salary",update="salaryCalc"){
            console.log("fetching radio buttons")
            let elements = document.getElementsByName(name)
            elements.forEach(elem=>{
                if(elem.checked==true){
                    this.choices[update] = elem.value
                    console.log(elem.value, update)
                }
            });
        },
        getSalary:function(country="USA"){
            return salaries[country]
        },
        widestElem:function(tag){
            maxWidth = 0
            maxlabel = ''
            let elements = document.querySelectorAll(tag)
            elements.forEach(item=>{let width = item.offsetWidth;
                if(maxWidth<width){maxWidth=width,maxLabel=item.textContent}
            });
            console.log("Longest element is:",maxWidth, maxLabel)
            return maxWidth
        }
    }
}

Vue.createApp(App).mount('#app')