import React from "react";
import DetailsView, { RowData } from "./DetailsView";

interface DetailsViewSectionProps {
  title: string;
  icon?: React.ReactNode;
  data: RowData[];
  action?: React.ReactNode;
}

const DetailsViewSection = ({ title, icon, data, action }: DetailsViewSectionProps) => (
  <div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <div className="flex items-center justify-between gap-2 px-8 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold text-black dark:text-foreground">{title}</h3>
      </div>
      {action}
    </div>
    <div className="py-2">
      {data.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 italic mx-8 my-3">{`No ${title.toLowerCase()}`}</p>
      ) : (
        <DetailsView data={data} />
      )}
    </div>
  </div>
);

export default DetailsViewSection;
