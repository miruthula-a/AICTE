import React, { useState } from 'react';
import { STAGES } from '../data/mockFiles';
import { RubberStamp } from './RubberStamp';
import { DeadlineRuler } from './DeadlineRuler';
import {
  IconCross,
  IconPaperclip,
  IconArrowRight,
  IconDownload
} from './Icons';

export function FileDossierModal({ 
  file, 
  onClose, 
  onAdvanceStage, 
  onAddAnnotation,
  onResolveGap
}) {
  const [activeTab, setActiveTab] = useState('COMPLIANCE');
  const [newNoteText, setNewNoteText] = useState('');
  const [officerName, setOfficerName] = useState('Dr. S. K. Ramanathan, Scrutiny Officer');

  if (!file) return null;

  const currentStage = STAGES.find(s => s.id === file.currentStageId) || STAGES[0];
  const isOverdue = file.status === 'OVERDUE';
  const isGap = file.status === 'COMPLIANCE_GAP';
  const isDueSoon = file.status === 'DUE_SOON';
  const stampVariant = isOverdue ? 'vermilion' : isGap ? 'vermilion' : isDueSoon ? 'ochre' : 'pine';

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;
    onAddAnnotation(file.id, {
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      officer: officerName.split(',')[0],
      note: newNoteText.trim()
    });
    setNewNoteText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#14181F]/70 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-[#F4EFE6] border border-[#C2B8A5] rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Folder Tab & Clasp */}
        <div className="bg-[#DFD5C2] border-b border-[#C2B8A5] px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#E8DFCF] border border-[#C2B8A5] text-xs font-mono text-[#4F545E]">
              <IconPaperclip className="w-3.5 h-3.5 text-[#878D96]" />
              <span>DOSSIER #{file.fileNumber.split('/').pop()}</span>
            </div>
            <span className="text-xs font-mono text-[#4F545E] hidden sm:inline">
              Regional Office: <strong className="text-[#14181F]">{file.region}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#FAF7F2] text-[#14181F] border border-[#C2B8A5] transition-colors"
          >
            <IconCross className="w-4 h-4" />
          </button>
        </div>

        {/* Dossier Header Section */}
        <div className="p-6 sm:p-7 bg-[#FAF7F2] border-b border-[#D6CEBF]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#4F545E] px-2.5 py-0.5 rounded-full bg-[#EFE8DC] border border-[#C2B8A5]">
                ALL INDIA COUNCIL FOR TECHNICAL EDUCATION • STATUTORY CASE FILE
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14181F] leading-tight">
                {file.instituteName}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#4F545E]">
                <span>Docket: <strong className="text-[#14181F]">{file.fileNumber}</strong></span>
                <span>•</span>
                <span>Location: <strong className="text-[#14181F]">{file.location}</strong></span>
                <span>•</span>
                <span>Current Stage: <strong className="text-[#14181F]">Stage 0{currentStage.id} — {currentStage.name}</strong></span>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
              <RubberStamp
                label={file.stampLabel}
                variant={stampVariant}
                size="lg"
                rotation={-2}
              />
              <span className="text-[10px] font-mono text-[#878D96]">
                Official Registry Stamp
              </span>
            </div>
          </div>

          {/* Institution Summary Ledger Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-[#E8DFCF] text-xs font-mono">
            <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#E8DFCF] shadow-soft-sm">
              <span className="text-[10px] text-[#878D96] block uppercase tracking-wider">APPLICATION TYPE</span>
              <span className="font-medium text-[#14181F] text-xs leading-snug line-clamp-1 mt-0.5" title={file.applicationType}>
                {file.applicationType}
              </span>
            </div>
            <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#E8DFCF] shadow-soft-sm">
              <span className="text-[10px] text-[#878D96] block uppercase tracking-wider">SPONSORING TRUST</span>
              <span className="font-medium text-[#14181F] text-xs leading-snug line-clamp-1 mt-0.5" title={file.trustName}>
                {file.trustName}
              </span>
            </div>
            <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#E8DFCF] shadow-soft-sm">
              <span className="text-[10px] text-[#878D96] block uppercase tracking-wider">LAND & CARPET AREA</span>
              <span className="font-medium text-[#14181F] text-xs mt-0.5 block">
                {file.landAreaAcres} | {file.builtUpAreaSqM}
              </span>
            </div>
            <div className="bg-[#F4EFE6] p-3 rounded-xl border border-[#E8DFCF] shadow-soft-sm">
              <span className="text-[10px] text-[#878D96] block uppercase tracking-wider">ASSIGNED OFFICER</span>
              <span className="font-medium text-[#14181F] text-xs truncate block mt-0.5" title={file.assignedOfficer}>
                {file.assignedOfficer}
              </span>
            </div>
          </div>
        </div>

        {/* Embedded Calibrated Deadline Ruler */}
        <div className="p-4 sm:p-6 bg-[#F4EFE6] border-b border-[#D6CEBF]">
          <DeadlineRuler
            daysElapsed={file.daysElapsed}
            totalSlaDays={file.totalSlaDays}
            stageDayMarks={file.timelineRuler.stageDayMarks}
            deadlineDate={file.deadlineDate}
            isOverdue={isOverdue}
          />
        </div>

        {/* Navigation Tabs with Smooth Rounded Pills */}
        <div className="bg-[#EFE8DC] border-b border-[#C2B8A5] px-6 py-1.5 flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('COMPLIANCE')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'COMPLIANCE'
                ? 'bg-[#FAF7F2] text-[#14181F] shadow-soft-sm font-semibold'
                : 'text-[#4F545E] hover:text-[#14181F] hover:bg-[#FAF7F2]/60'
            }`}
          >
            01. Compliance Checks ({file.complianceChecks.length})
          </button>
          <button
            onClick={() => setActiveTab('ANNOTATIONS')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'ANNOTATIONS'
                ? 'bg-[#FAF7F2] text-[#14181F] shadow-soft-sm font-semibold'
                : 'text-[#4F545E] hover:text-[#14181F] hover:bg-[#FAF7F2]/60'
            }`}
          >
            02. Red-Pen Notes ({file.redPenNotes.length})
          </button>
          <button
            onClick={() => setActiveTab('DISPATCH_LOG')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'DISPATCH_LOG'
                ? 'bg-[#FAF7F2] text-[#14181F] shadow-soft-sm font-semibold'
                : 'text-[#4F545E] hover:text-[#14181F] hover:bg-[#FAF7F2]/60'
            }`}
          >
            03. Dispatch Ledger ({file.dispatchLog.length})
          </button>
          <button
            onClick={() => setActiveTab('MEMO')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'MEMO'
                ? 'bg-[#FAF7F2] text-[#14181F] shadow-soft-sm font-semibold'
                : 'text-[#4F545E] hover:text-[#14181F] hover:bg-[#FAF7F2]/60'
            }`}
          >
            04. Official Notice Memo
          </button>
        </div>

        {/* Dossier Content Body */}
        <div className="p-6 bg-[#FAF7F2] max-h-[440px] overflow-y-auto">
          {activeTab === 'COMPLIANCE' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#4F545E] pb-2 border-b border-[#E8DFCF]">
                <span>VERSIONED CLAUSE VALIDATION (AICTE APH 2026-27)</span>
                <span>Deterministic Checking</span>
              </div>

              <div className="divide-y divide-[#E8DFCF] border border-[#D6CEBF] rounded-2xl bg-[#FAF7F2] overflow-hidden shadow-soft-sm">
                {file.complianceChecks.map((check, idx) => {
                  const isCheckGap = check.status === 'GAP_FOUND';
                  const isCheckVerified = check.status === 'VERIFIED';

                  return (
                    <div key={idx} className="p-4 hover:bg-[#F4EFE6] transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="font-mono text-xs font-bold text-[#14181F] px-2 py-0.5 rounded-md bg-[#EFE8DC] border border-[#C2B8A5]">
                            {check.clauseId}
                          </span>
                          <h4 className="font-serif text-base font-semibold text-[#14181F] mt-1.5">
                            {check.title}
                          </h4>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full border ${
                            isCheckGap 
                              ? 'bg-[#FAECE9] text-[#C8321E] border-[#C8321E]/30' 
                              : isCheckVerified 
                                ? 'bg-[#EBF2EE] text-[#2F5D46] border-[#2F5D46]/30' 
                                : 'bg-[#FBF5E9] text-[#92671E] border-[#B9852B]/30'
                          }`}>
                            {isCheckGap ? '● COMPLIANCE GAP' : isCheckVerified ? '✓ VERIFIED COMPLIANT' : '▲ PHYSICAL INSPECTION DUE'}
                          </span>

                          {isCheckGap && (
                            <button
                              onClick={() => onResolveGap(file.id, check.clauseId)}
                              className="btn-hover text-[10px] font-mono font-medium px-3 py-1 rounded-lg bg-[#14181F] text-white hover:bg-[#2F5D46] transition-colors shadow-soft-sm"
                            >
                              Verify Cure
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono my-2.5 p-3 rounded-xl bg-[#F4EFE6] border border-[#E8DFCF]">
                        <div>
                          <span className="text-[10px] text-[#878D96] uppercase block">Statutory Requirement:</span>
                          <span className="text-[#14181F]">{check.required}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#878D96] uppercase block">Institution Submission:</span>
                          <span className={isCheckGap ? 'text-[#C8321E] font-medium' : 'text-[#14181F]'}>
                            {check.submitted}
                          </span>
                        </div>
                      </div>

                      {check.inspectorNote && (
                        <div className="mt-2.5 pl-3 border-l-2 border-[#C8321E] py-0.5">
                          <div className="text-[10px] font-mono uppercase font-bold text-[#C8321E]">Marginal Red Observation:</div>
                          <p className="red-annotation text-sm mt-0.5">"{check.inspectorNote}"</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'ANNOTATIONS' && (
            <div className="space-y-6">
              <div className="border border-[#D6CEBF] bg-[#FAF7F2] rounded-2xl p-5 shadow-soft-sm">
                <h4 className="font-serif text-lg font-bold text-[#14181F] mb-1">
                  Inspector's Margin & Red-Pen Annotations
                </h4>
                <p className="text-xs text-[#4F545E] font-mono mb-4">
                  Hand-written remarks recorded by Scrutiny Officers and EVC Committee members.
                </p>

                <div className="space-y-3">
                  {file.redPenNotes.length === 0 ? (
                    <div className="p-4 bg-[#F4EFE6] border border-[#E8DFCF] rounded-xl text-xs font-mono text-[#878D96] text-center">
                      No marginal annotations entered yet.
                    </div>
                  ) : (
                    file.redPenNotes.map((note, idx) => (
                      <div key={idx} className="p-3.5 bg-[#FAF7F2] border-l-4 border-[#C8321E] border-y border-r border-[#D6CEBF] rounded-r-xl shadow-soft-sm">
                        <div className="flex items-center justify-between text-xs font-mono text-[#878D96] mb-1">
                          <span className="font-bold text-[#C8321E]">NOTE #{idx + 1} — {note.officer}</span>
                          <span>{note.date}</span>
                        </div>
                        <p className="red-annotation text-base leading-relaxed">
                          "{note.note}"
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <form onSubmit={handleAddNote} className="p-5 bg-[#EFE8DC] border border-[#C2B8A5] rounded-2xl space-y-3.5 shadow-soft-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#14181F] uppercase">
                    Record Hand-Written Red Annotation
                  </span>
                  <input
                    type="text"
                    value={officerName}
                    onChange={(e) => setOfficerName(e.target.value)}
                    className="text-xs font-mono bg-[#FAF7F2] border border-[#C2B8A5] rounded-lg px-2.5 py-1 w-64 focus:outline-none"
                  />
                </div>
                <textarea
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Record deficiency observation, clause violation note, or hearing recommendation..."
                  rows={3}
                  className="w-full bg-[#FAF7F2] border border-[#C2B8A5] rounded-xl p-3 text-sm text-[#14181F] font-serif focus:outline-none focus:border-[#C8321E]"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!newNoteText.trim()}
                    className="btn-hover px-4 py-2 rounded-xl bg-[#C8321E] hover:bg-[#A52413] disabled:opacity-50 text-white text-xs font-mono font-medium transition-colors shadow-soft-sm"
                  >
                    + Stamp Red Annotation
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'DISPATCH_LOG' && (
            <div className="space-y-4">
              <div className="border border-[#D6CEBF] divide-y divide-[#E8DFCF] bg-[#FAF7F2] rounded-2xl shadow-soft-sm overflow-hidden">
                {file.dispatchLog.map((log, idx) => (
                  <div key={idx} className="p-4 hover:bg-[#F4EFE6] transition-colors flex flex-col md:flex-row md:items-start justify-between gap-3 text-xs font-mono">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#14181F] bg-[#EFE8DC] px-2 py-0.5 rounded-md border border-[#C2B8A5]">
                          {log.dispatchNo}
                        </span>
                        <span className="text-[#878D96]">{log.timestamp}</span>
                      </div>
                      <p className="text-sm font-sans text-[#14181F] leading-snug">
                        {log.action}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 text-[#4F545E]">
                      <span className="text-[10px] text-[#878D96] block">SIGNING AUTHORITY</span>
                      <span className="font-medium">{log.officer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'MEMO' && (
            <div className="border border-[#D6CEBF] bg-[#FAF7F2] rounded-2xl p-7 max-w-2xl mx-auto shadow-soft-md">
              <div className="text-center pb-4 border-b-2 border-[#14181F] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4F545E] block">
                  GOVERNMENT OF INDIA • MINISTRY OF EDUCATION
                </span>
                <h3 className="font-serif text-xl font-bold text-[#14181F] tracking-wide">
                  ALL INDIA COUNCIL FOR TECHNICAL EDUCATION
                </h3>
                <span className="text-xs font-mono text-[#4F545E] block">
                  Nelson Mandela Marg, Vasant Kunj, New Delhi - 110070
                </span>
                <span className="text-[11px] font-mono text-[#4F545E] block">
                  REGIONAL OFFICE: {file.region}
                </span>
              </div>

              <div className="my-4 flex justify-between text-xs font-mono border-b border-[#E8DFCF] pb-2">
                <span>Ref: <strong>AICTE/{file.region.split(' ')[0]}/APH/2026/SCRUT-{file.fileNumber.split('-').pop()}</strong></span>
                <span>Date: <strong>{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</strong></span>
              </div>

              <div className="text-xs font-mono mb-4 space-y-0.5">
                <span className="text-[#4F545E]">To:</span>
                <div className="font-bold text-[#14181F]">The Chairman / Principal,</div>
                <div>{file.instituteName}</div>
                <div className="text-[#4F545E]">{file.location}</div>
              </div>

              <div className="p-3 bg-[#F4EFE6] border border-[#C2B8A5] rounded-xl text-xs font-mono font-semibold mb-4 text-[#14181F]">
                SUB: STATUTORY COMPLIANCE OBSERVATIONS FOR APPROVAL AY 2026-27 (FILE NO. {file.fileNumber})
              </div>

              <div className="text-xs font-sans leading-relaxed text-[#14181F] space-y-3">
                <p>
                  With reference to your application for <strong>{file.applicationType}</strong> submitted on {file.submissionDate}, the scrutiny committee has completed the statutory review under the AICTE Approval Process Handbook (APH) 2026-27 regulations.
                </p>
                
                {isGap ? (
                  <div className="p-3.5 bg-[#FAECE9] border border-[#C8321E]/30 rounded-xl my-2 text-xs font-mono space-y-1.5">
                    <div className="font-bold text-[#C8321E]">DEFICIENCIES RECORDED:</div>
                    {file.complianceChecks.filter(c => c.status === 'GAP_FOUND').map((gap, gIdx) => (
                      <div key={gIdx} className="text-[#A52413]">
                        • <strong>{gap.clauseId}</strong> ({gap.title}): {gap.inspectorNote}
                      </div>
                    ))}
                    <div className="pt-2 text-[11px] text-[#C8321E] font-sans">
                      You are hereby directed to upload rectifying compliance within <strong>48 hours</strong>, failing which the case shall be placed before the Standing Hearing Committee (SHC).
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 bg-[#EBF2EE] border border-[#2F5D46]/30 rounded-xl my-2 text-xs font-mono text-[#2F5D46]">
                    ✓ All statutory certificates, faculty ratios, and land documents comply with AICTE APH 2026-27 norms.
                  </div>
                )}

                <p>
                  This is an official communication issued under the authority of the Regional Officer, AICTE.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D6CEBF] flex justify-between items-end text-xs font-mono">
                <div className="text-[#878D96] text-[10px]">
                  Generated by FileTrail v2.3<br />AICTE Digital Docket Registry
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#14181F]">{file.assignedOfficer}</div>
                  <div className="text-[#4F545E]">Authorized Scrutiny Officer</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Curves and Smooth Buttons */}
        <div className="bg-[#DFD5C2] border-t border-[#C2B8A5] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#4F545E]">
            <span>Active Officer Desk:</span>
            <strong className="text-[#14181F]">{file.actionNeededBy}</strong>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('MEMO')}
              className="btn-hover px-4 py-2 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#14181F] border border-[#C2B8A5] flex items-center gap-1.5 transition-colors shadow-soft-sm"
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>Print Officer Notice</span>
            </button>

            {currentStage.id < 5 ? (
              <button
                onClick={() => {
                  onAdvanceStage(file.id);
                  onClose();
                }}
                className="btn-hover px-5 py-2 rounded-xl bg-[#14181F] hover:bg-[#2F5D46] text-[#FAF7F2] font-semibold flex items-center gap-1.5 transition-colors shadow-soft-sm"
              >
                <span>Advance to Stage 0{currentStage.id + 1} ({STAGES[currentStage.id].shortName})</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="px-3.5 py-1.5 rounded-xl bg-[#EBF2EE] border border-[#2F5D46]/40 text-[#2F5D46] font-bold">
                ✓ Final Order Stage Reached
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
