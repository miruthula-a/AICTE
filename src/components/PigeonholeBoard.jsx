import React, { useState } from 'react';
import { STAGES } from '../data/mockFiles';
import { RubberStamp, PaperSticker } from './RubberStamp';
import { 
  IconFolder, 
  IconClock, 
  IconFilter, 
  IconSearch, 
  IconArrowRight, 
  IconAlert
} from './Icons';

export function PigeonholeBoard({ 
  files, 
  onOpenFileDossier, 
  onAdvanceStage,
  onOpenNewDocket
}) {
  const [regionFilter, setRegionFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = files.filter(f => {
    const matchesRegion = regionFilter === 'ALL' || f.region.includes(regionFilter);
    const matchesStatus = statusFilter === 'ALL' || f.status === statusFilter;
    const matchesSearch = !searchQuery || 
      f.fileNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.instituteName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.applicationType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesStatus && matchesSearch;
  });

  const regions = ['ALL', 'WRO', 'NRO', 'SRO', 'NWRO', 'ERO', 'SCRO'];

  return (
    <div className="space-y-6">
      {/* Registry Filter & Ledger Controls Bar */}
      <div className="bg-[#FAF7F2] border border-[#D6CEBF] rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-soft-sm">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <IconSearch className="w-4 h-4 text-[#878D96] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search docket by number, college name, city..."
            className="w-full bg-[#F4EFE6] border border-[#C2B8A5] rounded-xl text-xs pl-10 pr-3.5 py-2 font-mono text-[#14181F] placeholder:text-[#878D96] placeholder:font-sans focus:outline-none focus:border-[#14181F] transition-colors"
          />
        </div>

        {/* Filter Badges with Curves */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 font-mono text-[#4F545E]">
            <IconFilter className="w-3.5 h-3.5" />
            <span>REGION:</span>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="bg-[#F4EFE6] border border-[#C2B8A5] rounded-xl px-2.5 py-1.5 font-mono text-xs focus:outline-none cursor-pointer"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r === 'ALL' ? 'All Regional Offices' : `${r} Office`}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[#4F545E]">
            <span>STATUS:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#F4EFE6] border border-[#C2B8A5] rounded-xl px-2.5 py-1.5 font-mono text-xs focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="COMPLIANCE_GAP">Compliance Gap Found</option>
              <option value="OVERDUE">Overdue SLA</option>
              <option value="DUE_SOON">Due in ≤ 5 Days</option>
              <option value="ON_TRACK">On Track</option>
            </select>
          </div>

          <button
            onClick={onOpenNewDocket}
            className="btn-hover ml-auto inline-flex items-center gap-1.5 bg-[#14181F] hover:bg-[#2F5D46] text-[#FAF7F2] px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors shadow-soft-sm"
          >
            <span>+ Inward New Docket</span>
          </button>
        </div>
      </div>

      {/* Pigeonhole Filing Shelf Grid with Smooth Curves */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
        {STAGES.map((stage) => {
          const stageFiles = filteredFiles.filter(f => f.currentStageId === stage.id);
          const hasOverdue = stageFiles.some(f => f.status === 'OVERDUE');
          const hasGaps = stageFiles.some(f => f.status === 'COMPLIANCE_GAP');

          return (
            <div 
              key={stage.id} 
              className="bg-[#EFE8DC] border border-[#C2B8A5] rounded-2xl flex flex-col min-h-[580px] relative shadow-soft-sm overflow-hidden"
            >
              {/* Pigeonhole Shelf Label Placard */}
              <div className="bg-[#DFD5C2] border-b border-[#C2B8A5] p-3.5">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="font-bold tracking-wider text-[#14181F]">
                    STAGE {stage.code}
                  </span>
                  <span className="text-[10px] text-[#4F545E] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#C2B8A5]">
                    {stage.pigeonholeRack}
                  </span>
                </div>
                <h3 className="font-serif text-base font-semibold text-[#14181F] leading-tight mb-1.5">
                  {stage.name}
                </h3>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#4F545E]">
                  <span>SLA: {stage.leadTimeDays}d max</span>
                  <span className="font-bold px-2 py-0.5 rounded-full bg-[#14181F] text-[#FAF7F2]">
                    {stageFiles.length} {stageFiles.length === 1 ? 'FILE' : 'FILES'}
                  </span>
                </div>

                {hasOverdue && (
                  <div className="mt-2 text-[10px] font-mono font-semibold text-[#C8321E] bg-[#FAECE9] px-2.5 py-1 rounded-lg border border-[#C8321E]/30 flex items-center gap-1.5">
                    <IconAlert className="w-3 h-3 text-[#C8321E]" />
                    <span>SLA BREACHED</span>
                  </div>
                )}
                {!hasOverdue && hasGaps && (
                  <div className="mt-2 text-[10px] font-mono font-semibold text-[#C8321E] bg-[#FAECE9] px-2.5 py-1 rounded-lg border border-[#C8321E]/30 flex items-center gap-1.5">
                    <IconAlert className="w-3 h-3 text-[#C8321E]" />
                    <span>DEFICIENCY FLAGGED</span>
                  </div>
                )}
              </div>

              {/* Pigeonhole Interior Shelf */}
              <div className="p-2.5 space-y-3.5 flex-1 overflow-y-auto ledger-ruled">
                {stageFiles.length === 0 ? (
                  <div className="h-44 flex flex-col items-center justify-center text-center p-4 text-[#878D96]">
                    <IconFolder className="w-7 h-7 mb-1.5 stroke-[#C2B8A5]" />
                    <span className="font-mono text-xs font-medium">Pigeonhole Empty</span>
                    <span className="text-[10px] text-[#878D96] mt-0.5">No files queued at Stage {stage.code}</span>
                  </div>
                ) : (
                  stageFiles.map((file) => {
                    const isOverdue = file.status === 'OVERDUE';
                    const isGap = file.status === 'COMPLIANCE_GAP';
                    const isDueSoon = file.status === 'DUE_SOON';

                    const stickerVariant = isOverdue ? 'vermilion' : isGap ? 'vermilion' : isDueSoon ? 'ochre' : 'pine';
                    const stampVariant = isOverdue ? 'vermilion' : isGap ? 'vermilion' : isDueSoon ? 'ochre' : 'pine';

                    return (
                      <div
                        key={file.id}
                        onClick={() => onOpenFileDossier(file)}
                        className="folder-card group relative bg-[#FAF7F2] border border-[#C2B8A5] cursor-pointer shadow-soft-sm overflow-hidden select-none hover:border-[#14181F]"
                      >
                        {/* Folder Top Tab with File Number */}
                        <div className="bg-[#EFE8DC] border-b border-[#C2B8A5] px-3 py-1.5 flex items-center justify-between text-[11px] font-mono">
                          <span className="font-bold text-[#14181F] flex items-center gap-1.5 truncate max-w-[170px]" title={file.fileNumber}>
                            <IconFolder className="w-3.5 h-3.5 flex-shrink-0 text-[#4F545E]" />
                            {file.fileNumber.split('/').pop()}
                          </span>
                          <span className="text-[9px] uppercase px-1.5 py-0.2 rounded-md bg-[#F4EFE6] border border-[#D6CEBF] text-[#4F545E]">
                            {file.region.split(' ')[0]}
                          </span>
                        </div>

                        {/* Folder Body */}
                        <div className="p-3.5 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <PaperSticker variant={stickerVariant} rotation={-1.2}>
                              {isOverdue 
                                ? `OVERDUE ${Math.abs(file.totalSlaDays - file.daysElapsed)}D` 
                                : `DUE: ${file.deadlineDate}`}
                            </PaperSticker>

                            <span className="text-[10px] font-mono text-[#4F545E]">
                              {file.daysElapsed}d / {file.totalSlaDays}d
                            </span>
                          </div>

                          <h4 className="font-serif text-sm font-semibold text-[#14181F] leading-snug line-clamp-2 group-hover:text-[#C8321E] transition-colors">
                            {file.instituteName}
                          </h4>

                          <p className="text-[11px] text-[#4F545E] line-clamp-1">
                            {file.location}
                          </p>

                          <div className="border-t border-dashed border-[#D6CEBF] pt-2">
                            <span className="text-[10px] font-mono text-[#4F545E] block truncate" title={file.applicationType}>
                              ↳ {file.applicationType}
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <RubberStamp 
                              label={file.stampLabel} 
                              variant={stampVariant} 
                              size="sm"
                              rotation={file.id.charCodeAt(file.id.length - 1) % 4 - 2}
                            />
                            
                            <span className="text-[10px] font-mono font-medium text-[#878D96] group-hover:text-[#14181F] transition-colors flex items-center gap-1">
                              <span>Open</span>
                              <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                          </div>

                          {stage.id < 5 && (
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                onAdvanceStage(file.id);
                              }}
                              title={`Advance file to Stage 0${stage.id + 1}`}
                              className="mt-3 border-t border-[#E8DFCF] pt-2 flex items-center justify-end"
                            >
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#EFE8DC] hover:bg-[#2F5D46] hover:text-[#FAF7F2] text-[#4F545E] text-[10px] font-mono font-medium border border-[#C2B8A5] transition-all">
                                <span>Move to Stage 0{stage.id + 1}</span>
                                <IconArrowRight className="w-2.5 h-2.5" />
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Shelf Footer */}
              <div className="bg-[#DFD5C2] border-t border-[#C2B8A5] px-3.5 py-1.5 text-[10px] font-mono text-[#878D96] flex items-center justify-between">
                <span>AICTE Registry Sec. B</span>
                <span>Box {stage.code}/5</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
