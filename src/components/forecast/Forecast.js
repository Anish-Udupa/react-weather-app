import "./Forecast.css";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Forecast({ data }) {

    const todayDayNumber = new Date().getDay();
    const forcastDays = WEEK_DAYS.slice(todayDayNumber, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, todayDayNumber))

    return (
        <div id="forecast-container">
            <p id="forecast-title">Daily Forecast</p>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="forecast-daily">
                                        <img alt="forecast-icon-small" className="forecast-icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                        <div className="forcast-value-container-small">
                                            <p className="forecast-day-small">{forcastDays[index]}</p>
                                            <p className="forcast-description-small">{item.weather[0].description}</p>
                                            <p className="forecast-temp-small">{`${Math.round((item.main.temp - 273.15) * 100)/100}°C`}</p>
                                        </div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="forcast-panel-container">
                                    <div className="forcast-col">
                                        <div className="forcast-parameter">
                                            <p className="forcast-label">Temperature:</p>
                                            <p className="forcast-value">{`${Math.round((item.main.temp - 273.15) * 100)/100}°C`}</p>
                                        </div>
                                        <div className="forcast-parameter">
                                            <p className="forcast-label">Temp Min:</p>
                                            <p className="forcast-value">{`${Math.round((item.main.temp_min - 273.15) * 100)/100}°C`}</p>
                                        </div>
                                        <div className="forcast-parameter">
                                            <p className="forcast-label">Temp Max:</p>
                                            <p className="forcast-value">{`${Math.round((item.main.temp_max - 273.15) * 100)/100}°C`}</p>
                                        </div>
                                    </div>
                                    <div className="forcast-col">
                                        <div className="forcast-parameter">
                                            <p className="forcast-label">Humidity:</p>
                                            <p className="forcast-value">{`${item.main.humidity}%`}</p>
                                        </div>
                                        <div className="forcast-parameter">
                                            <p className="forcast-label">Pressure:</p>
                                            <p className="forcast-value">{`${item.main.pressure} hPa`}</p>
                                        </div>
                                        <div className="forcast-parameter">
                                            <p className="forcast-label">Wind Speed:</p>
                                            <p className="forcast-value">{`${item.wind.speed} m/s`}</p>
                                        </div>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    );
}

export default Forecast;