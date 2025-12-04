import React from "react";
import { Filter,ChevronDown } from "lucide-react";
import DataTable from "../common/DataTable";
import ActionDropdown, { type DropdownAction } from "../common/ActionDropdown";

interface LeaveRecord {
  id: number;
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

const LeaveHistory: React.FC = () => {
  const leaveData: LeaveRecord[] = [
    { id: 1, name: "Abenezer kebede", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
    { id: 2, name: "Abenezer kebede", duration: 7, startDate: "22/04/2022", endDate: "30/04/2022", type: "Exam", reason: "Examination" },
    { id: 3, name: "Abenezer kebede", duration: 120, startDate: "22/04/2022", endDate: "28/06/2022", type: "Maternity", reason: "Child Care" },
    { id: 4, name: "Abenezer kebede", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
    { id: 5, name: "Abenezer kebede", duration: 7, startDate: "22/04/2022", endDate: "30/04/2022", type: "Exam", reason: "Examination" },
    { id: 6, name: "Abenezer kebede", duration: 120, startDate: "22/04/2022", endDate: "28/06/2022", type: "Maternity", reason: "Child Care" },
    { id: 7, name: "Abenezer kebede", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
    { id: 8, name: "Abenezer kebede", duration: 7, startDate: "22/04/2022", endDate: "30/04/2022", type: "Exam", reason: "Examination" },
    { id: 9, name: "Abenezer kebede", duration: 120, startDate: "22/04/2022", endDate: "28/06/2022", type: "Maternity", reason: "Child Care" },
    { id: 10, name: "Abenezer kebede", duration: 5, startDate: "22/04/2022", endDate: "28/04/2022", type: "Sick", reason: "Personal" },
    { id: 11, name: "Abenezer kebede", duration: 7, startDate: "22/04/2022", endDate: "30/04/2022", type: "Exam", reason: "Examination" },
    { id: 12, name: "Abenezer kebede", duration: 120, startDate: "22/04/2022", endDate: "28/06/2022", type: "Maternity", reason: "Child Care" },
    { id: 13, name: "Abenezer kebede", duration: 3, startDate: "01/05/2022", endDate: "03/05/2022", type: "Vacation", reason: "Personal" },
    { id: 14, name: "Abenezer kebede", duration: 10, startDate: "05/05/2022", endDate: "14/05/2022", type: "Sick", reason: "Health Issue" },
    { id: 15, name: "Abenezer kebede", duration: 1, startDate: "15/05/2022", endDate: "15/05/2022", type: "Personal", reason: "Family Event" },
    { id: 16, name: "Abenezer kebede", duration: 14, startDate: "20/05/2022", endDate: "02/06/2022", type: "Maternity", reason: "Child Care" },
    { id: 17, name: "Abenezer kebede", duration: 5, startDate: "10/06/2022", endDate: "14/06/2022", type: "Exam", reason: "Certification" },
    { id: 18, name: "Abenezer kebede", duration: 7, startDate: "25/06/2022", endDate: "01/07/2022", type: "Vacation", reason: "Travel" },
    { id: 19, name: "Abenezer kebede", duration: 2, startDate: "05/07/2022", endDate: "06/07/2022", type: "Sick", reason: "Medical Checkup" },
    { id: 20, name: "Abenezer kebede", duration: 21, startDate: "15/07/2022", endDate: "04/08/2022", type: "Maternity", reason: "Child Care" },
    { id: 21, name: "Abenezer kebede", duration: 3, startDate: "10/08/2022", endDate: "12/08/2022", type: "Personal", reason: "Wedding" },
    { id: 22, name: "Abenezer kebede", duration: 5, startDate: "20/08/2022", endDate: "24/08/2022", type: "Sick", reason: "Recovery" },
    { id: 23, name: "Abenezer kebede", duration: 10, startDate: "01/09/2022", endDate: "10/09/2022", type: "Vacation", reason: "Holiday" },
    { id: 24, name: "Abenezer kebede", duration: 1, startDate: "15/09/2022", endDate: "15/09/2022", type: "Personal", reason: "Appointment" },
  ];

  const actions: DropdownAction<LeaveRecord>[] = [
    {
      label: "Edit",
      colorClass: "text-white",
    },
    {
      label: "Delete", 
      colorClass: "text-white",
    },
    {
      label: "View details",
      colorClass: "text-white",
    },
  ];

  const columns = [
    { key: "name", header: "Name(s)" },
    {
      key: "duration",
      header: "Duration(s)",
      align: "center" as const,
      render: (value: number) => `${value} days`,
    },
    { key: "startDate", header: "Start Date", align: "center" as const },
    { key: "endDate", header: "End Date", align: "center" as const },
    {
      key: "type",
      header: "Type",
      align: "center" as const,
      render: (value: string) => value,
    },
    { key: "reason", header: "Reason(s)" },
    {
      key: "actions",
      header: "Actions",
      align: "center" as const,
      render: (_value: any, row: LeaveRecord) => (
        <ActionDropdown<LeaveRecord>
          row={row}
          actions={actions}
          buttonLabel="Actions"
          buttonClassName="min-w-[100px]"
        />
      ),
    },
  ];

  return (
    <div className="mt-8 bg-white rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Leave History</h2>

        <div className="flex items-center gap-3">
          <button
            className="p-2 hover:bg-gray-100 "
            title="Filter"
          >
            <Filter className="w-5 h-5 text-black" />
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2" title="Export">
            Export
            <span className="bg-white rounded-full"><ChevronDown className="w-4 h-4 text-black" /></span>
          </button>
        </div>
      </div>

      <DataTable<LeaveRecord>
        columns={columns}
        data={leaveData}
        rowsPerPage={12}
        showHeader
      />
    </div>
  );
};

export default LeaveHistory;