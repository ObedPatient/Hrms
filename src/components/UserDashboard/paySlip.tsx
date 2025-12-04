import React from "react";
import { MoreVertical } from "lucide-react";
import Card from "../common/card";

const PayslipBreakdown: React.FC = () => {
  const rows = [
    { label: "Basic Wage", amount: "150,000", deductions: "-30,000", total: "120,000" },
    { label: "Tax", amount: "15,000", deductions: "-3,000", total: "12,000" },
    { label: "Pension", amount: "15,000", deductions: "-3,000", total: "12,000" },
    { label: "Total Earnings", amount: "150,000", deductions: "-36,000", total: "114,000" },
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          April Pay slip breakdown
        </h2>

        <button
          aria-label="More options"
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <MoreVertical className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="grid grid-cols-4 bg-[#e8f0fe] py-3 px-4 rounded-xl font-medium text-gray-700">
        <span>Earnings</span>
        <span>Amount</span>
        <span>Deductions</span>
        <span>Total</span>
      </div>

      <div className="mt-3 space-y-3">
        {rows.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 bg-[#e8f0fe] py-3 px-4 rounded-xl text-gray-700"
          >
            <span className="font-medium">{item.label}</span>
            <span>{item.amount}</span>
            <span>{item.deductions}</span>
            <span className="font-medium">{item.total}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PayslipBreakdown;
