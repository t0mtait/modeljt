import './index.css';
import { useState } from "react";
import Background from "./Background";

const teams = [
    ["Celtics", 0.3],
    ["Thunder", 0.0],
    ["Nuggets", 0.22],
    ["Knicks", 0.0],
    ["Mavericks", 0.0],
    ["Timberwolves", 0.0],
    ["76ers", 0.08],
    ["Bucks", 0.0],
    ["Pacers", 0.0],
    ["Kings", 0.05],
    ["Grizzlies", 0.0],
    ["Pelicans", 0.0],
    ["Lakers", 0.19],
    ["Clippers", 0.0],
    ["Heat", 0.0],
    ["Magic", 0.0],
    ["Cavs", 0.0],
    ["Suns", 0.03],
    ["Rockets", 0.31],
    ["Warriors", 0.0],
    ["Raptors", 0.06],
    ["Hawks", 0.15],
    ["Bulls", 0.0],
    ["Spurs", 0.0],
    ["Jazz", 0.0],
    ["Hornets", 0.0],
    ["Wizards", 0.0],
    ["Pistons", 0.01],
    ["Blazers", 0.0],
    ["Nets", 0.0]
];

function App() {
    const [away, setAwayTeam] = useState("Team 1");
    const [awayIp, setAwayIp] = useState(0);
    const [home, setHomeTeam] = useState("Team 2");
    const [homeIp, setHomeIp] = useState(0);
    const [result, setResult] = useState('');
    const [homePr, setHomePr] = useState(0);
    const [awayPr, setAwayPr] = useState(0);
    const [aprs, setAprs] = useState("");
    const [injuries, setInjuries] = useState("");
    const [hca, setHca] = useState("");

    const getSpread = () => {
        let awayPr = 0, homePr = 0;

        const awayTeamInput = document.getElementById("awayTeam").value;
        const homeTeamInput = document.getElementById("homeTeam").value;
        const awayIpInput = document.getElementById("awayIp").value;
        const homeIpInput = document.getElementById("homeIp").value;


        for (let i = 0; i < teams.length; i++) {
            if (teams[i][0] === awayTeamInput) {
                awayPr = (30 - i) * 65 - (awayIpInput * 5);
                setAwayPr(awayPr);
            }
            if (teams[i][0] === homeTeamInput) {
                homePr = (30 - i) * 65 - (homeIpInput * 5);

                homePr += homePr * teams[i][1];
                setHomePr(homePr);
                setHca(`${homeTeamInput} receives a home court advantage of ${(teams[i][1] * homePr).toFixed(1)}`);
            }
        }


        setAwayTeam(awayTeamInput);
        setHomeTeam(homeTeamInput);
        setAwayIp(awayIpInput);
        setHomeIp(homeIpInput);

        setAprs(`${awayTeamInput} (${awayPr}) @ ${homeTeamInput} (${homePr})`);
        setInjuries(`${awayTeamInput} (${awayIpInput * 5} IP) ${homeTeamInput} (${homeIpInput * 5} IP)`);


        if (homePr >= awayPr) {
            setResult(`The ${homeTeamInput} are favored by ${((homePr - awayPr) / 100).toFixed(1)} points!`);
        } else {
            setResult(`The ${awayTeamInput} are favored by ${((awayPr - homePr) / 100).toFixed(1)} points!`);
        }
    };


    return (
        <div className="App">
            <Background />
            <div className="container">
                <label id = "heading">ModelJT v1.0</label>
                <div className="input-group">

                    <input type="text" placeholder="Guest Team" id="awayTeam"
                           className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"/>
                    <input type="number" placeholder="Guest Injuries (PER)" id="awayIp"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="input-group">

                    <input type="text" placeholder="Home Team" id="homeTeam"
                           className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"/>
                    <input type="number" placeholder="Home Injuries (PER)" id="homeIp"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <button onClick={getSpread}
                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                    Get Spread
                </button>
                <p>{aprs}</p>
                <p>{injuries}</p>
                <p>{hca}</p>
                <p>{result}</p>
            </div>


        </div>
    );
}

export default App;
