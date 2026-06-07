import React from "react";
import DetailsView, { RowData } from "./DetailsView";

interface DetailsViewSectionProps {
  title: string;
  icon?: React.ReactNode;
  data: RowData[];
  action?: React.ReactNode;
}

const DetailsViewSection = ({ title, icon, data, action }: DetailsViewSectionProps) => (
  <div className="mb-6 rounded-lg border border-sw-yellow/20 overflow-hidden shadow-[0_0_8px_rgba(255,232,31,0.05)]">
    <div className="flex items-center justify-between gap-2 px-8 py-4 border-b border-sw-yellow/20 bg-sw-yellow/5">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold text-sw-yellow tracking-wide">{title}</h3>
      </div>
      {action}
    </div>
    <div className="py-2">
      {data.length === 0 ? (
        <p className="text-muted-foreground italic mx-8 my-3">{`No ${title.toLowerCase()}`}</p>
      ) : (
        <DetailsView data={data} />
      )}
    </div>
  </div>
);

export default DetailsViewSection;
