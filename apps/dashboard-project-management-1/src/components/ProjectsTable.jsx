import React from 'react';
import {setStatusClass} from "../utils";

// ===
// Table data
const TABLE_HEADERS = [
    "Project",
    "Deadline",
    "Leader + Team",
    "Budget",
    "Status",
    "Actions"
];
const PROJECT_ROWS = [
    {
        name: "New Dashboard",
        client: "Google",
        deadline: "17th Oct, 25",
        status: "In progress",
        budget: "$4,670",
        payment: "Paid",
        member: {
            name: "Myrtle Erickson",
            team: "UK Design Team",
            avatar:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png"
        },
        isDanger: false
    },
    {
        name: "New Dashboard",
        client: "Google",
        deadline: "17th Oct, 25",
        status: "Blocked",
        budget: "$4,670",
        payment: "Paid",
        member: {
            name: "Myrtle Erickson",
            team: "UK Design Team",
            avatar:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png"
        },
        isDanger: true
    },
    {
        name: "New Dashboard",
        client: "Google",
        deadline: "17th Oct, 25",
        status: "Done",
        budget: "$4,670",
        payment: "Paid",
        member: {
            name: "Myrtle Erickson",
            team: "UK Design Team",
            avatar:
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png"
        },
        isDanger: false
    }
];
// === End Table data

/**
 * ProjectsTable
 * Created on 6/3/25
 */
const ProjectsTable = () => (
    <div className="bg-[#273142] w-full border border-[#313D4F] rounded-md overflow-x-auto">
        <div className="text-white px-6 py-4 flex items-center justify-between">
            <div className="text-lg font-semibold">
                Ongoing Projects{" "}
                <span className="text-[#738297] text-sm">
               | {PROJECT_ROWS.length} Projects
            </span>
            </div>
            <i className="zmdi zmdi-download text-white text-xl cursor-pointer"></i>
        </div>

        <table className="w-full text-white text-sm">
            <thead className="bg-[#313D4F]">
            <tr>
                {TABLE_HEADERS.map((header) => (
                    <th
                        key={header}
                        className="text-left px-6 py-3 whitespace-nowrap"
                    >
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {PROJECT_ROWS.map((row, index) => (
                <tr
                    key={index}
                    className={`border-b border-[#313D4F] ${
                        row.isDanger ? "border-l-4 border-l-[#A84D43]" : ""
                    } hover:bg-[#2f3b4e]`}
                >
                    <td className="px-6 py-4">
                        <p>{row.name}</p>
                        <p className="text-[#738297] text-xs">{row.client}</p>
                    </td>
                    <td className="px-6 py-4">
                        <p>{row.deadline}</p>
                        <p className="text-red-500 text-xs">Overdue</p>
                    </td>
                    <td className="px-6 py-4 flex items-center">
                        <img
                            src={row.member.avatar}
                            alt={row.member.name}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <div>
                            <p>{row.member.name}</p>
                            <p className="text-[#738297] text-xs">
                                {row.member.team}
                            </p>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <p>{row.budget}</p>
                        <p className="text-[#738297] text-xs">{row.payment}</p>
                    </td>
                    <td className="px-6 py-4">
                     <span
                         className={`relative pl-5 text-sm before:content-[''] before:absolute before:top-0.5 before:left-0 before:w-[14px] before:h-[14px] before:rounded-full before:border-4 ${
                             setStatusClass(row.status)
                         }`}
                     >
                        {row.status}
                     </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <select className="bg-transparent border border-[#313D4F] text-[#738297] px-2 py-1 rounded">
                            <option>Actions</option>
                            <option>Start project</option>
                            <option>Send for QA</option>
                            <option>Send invoice</option>
                        </select>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default ProjectsTable;
