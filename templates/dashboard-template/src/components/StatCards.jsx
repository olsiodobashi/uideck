import React from 'react';

const STAT_CARDS = [
    {
        title: "all projects",
        value: "89",
        className: "bg-[#2298F1]",
        stat: "13% increase",
        icon: "upload"
    },
    {
        title: "team members",
        value: "5,990",
        className: "bg-[#66B92E]",
        stat: "4% increase",
        icon: "upload"
    },
    {
        title: "total budget",
        value: "$80,990",
        className: "bg-[#DA932C]",
        stat: "13% decrease",
        icon: "download"
    },
    {
        title: "new customers",
        value: "3",
        className: "bg-[#D65B4A]",
        stat: "13% decrease",
        icon: "download"
    }
];

/**
 * StatCards
 * Created on 6/3/25
 */
const StatCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_CARDS.map((card) => (
            <StatCard card={card} key={card.title} />
        ))}
    </div>
);

const StatCard = ({ card }) => {
    return (
        <div>
            <div
                className={`rounded-lg text-white p-2 relative ${card.className} transition-all hover:brightness-90`}
            >
                <div className="uppercase text-[8px] pt-2 px-2">{card.title}</div>
                <i
                    className={`zmdi zmdi-${card.icon} text-white text-[28px] opacity-30 absolute right-[13px] top-[13px]`}
                ></i>
                <div className="text-[28px] px-2">{card.value}</div>
                <div className="border-t border-white/30 text-[8px] mt-6 pt-2 px-2 uppercase">
                    <b>{card.stat.split("%")[0]}</b>%{" "}
                    {card.stat.includes("increase") ? "increase" : "decrease"}
                </div>
            </div>
        </div>
    );
};


export default StatCards;
