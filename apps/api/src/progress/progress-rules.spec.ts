import { STAGE_IDS } from '@hafifa/shared';

import { getNextStatus, isStageUnlocked, summarizeProgress } from './progress-rules';

describe('getNextStatus', () => {
  it.each([
    ['not_started', 'start', 'in_progress'],
    ['in_progress', 'submit', 'submitted'],
    ['changes_requested', 'submit', 'submitted'],
    ['submitted', 'approve', 'approved'],
    ['submitted', 'request_changes', 'changes_requested'],
  ] as const)('%s + %s -> %s', (current, action, expected) => {
    expect(getNextStatus(current, action)).toBe(expected);
  });

  it.each([
    ['in_progress', 'start'],
    ['not_started', 'submit'],
    ['in_progress', 'approve'],
    ['approved', 'submit'],
    ['approved', 'request_changes'],
  ] as const)('rejects %s + %s', (current, action) => {
    expect(getNextStatus(current, action)).toBeNull();
  });
});

describe('isStageUnlocked', () => {
  it('always unlocks the first stage', () => {
    expect(isStageUnlocked(STAGE_IDS[0], new Set())).toBe(true);
  });

  it('unlocks a stage once the previous one is approved', () => {
    expect(isStageUnlocked(STAGE_IDS[1], new Set())).toBe(false);
    expect(isStageUnlocked(STAGE_IDS[1], new Set([STAGE_IDS[0]]))).toBe(true);
  });
});

describe('summarizeProgress', () => {
  const at = new Date('2026-01-01');

  it('starts at the first stage', () => {
    expect(summarizeProgress([])).toEqual({
      currentStageId: STAGE_IDS[0],
      status: 'not_started',
      approvedCount: 0,
    });
  });

  it('points at the first stage that is not approved', () => {
    const summary = summarizeProgress([
      { stageId: STAGE_IDS[0], status: 'approved', updatedAt: at, history: [{ at }] },
      { stageId: STAGE_IDS[1], status: 'submitted', updatedAt: at, history: [{ at }] },
    ]);
    expect(summary).toEqual({
      currentStageId: STAGE_IDS[1],
      status: 'submitted',
      since: at,
      approvedCount: 1,
    });
  });

  it('is finished when every stage is approved', () => {
    const records = STAGE_IDS.map((stageId) => ({
      stageId,
      status: 'approved' as const,
      updatedAt: at,
      history: [{ at }],
    }));
    expect(summarizeProgress(records)).toEqual({
      currentStageId: null,
      status: 'finished',
      approvedCount: STAGE_IDS.length,
    });
  });
});
