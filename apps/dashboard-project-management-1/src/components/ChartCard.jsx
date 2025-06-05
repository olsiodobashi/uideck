import React from 'react';
import {Chart} from "chart.js/auto";

/**
 * ChartCard
 * Created on 6/3/25
 */
const ChartCard = ({ config }) => {
    const canvasRef = React.useRef(null);
    const chartRef = React.useRef(null);

    React.useEffect(() => {
        if (!canvasRef.current) return;

        // Cleanup existing chart if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(canvasRef.current, config);

        return () => {
            chartRef.current?.destroy();
        };
    }, [config]); // rerun whenever config changes

    React.useEffect(() => {
        const resizeHandler = () => {
            chartRef.current?.resize();
        };
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [window.innerWidth]);

    return <canvas id={config.type} ref={canvasRef} className="w-full h-full" />;
};

export default ChartCard;
