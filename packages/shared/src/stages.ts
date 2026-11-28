/**
 * The stages of the training, in order.
 *
 * `id` must match the stage's folder under apps/site/docs/stages/ without the number prefix
 * (e.g. "01-git" -> "git"). Progress is stored per stage id, so never rename an id once trainees
 * have started - add a new one instead.
 */
export const STAGES = [
  { id: 'git', title: 'Git & GitLab', milestone: 'Set up your project' },
  { id: 'html-css', title: 'HTML, CSS & SCSS', milestone: 'Feed page (UI only)' },
  { id: 'javascript', title: 'JavaScript', milestone: 'Interactive feed' },
  { id: 'nodejs', title: 'Node.js', milestone: 'Your first API' },
  { id: 'typescript', title: 'TypeScript', milestone: 'Type everything' },
  { id: 'databases', title: 'Databases & SQL', milestone: 'Persist your data' },
  { id: 'nestjs-s3', title: 'NestJS & S3', milestone: 'NestJS API with image uploads' },
  { id: 'frontend', title: 'Frontend framework', milestone: 'Instagram as a single-page app' },
  { id: 'elastic', title: 'Elasticsearch', milestone: 'Search' },
  { id: 'openshift-devops', title: 'OpenShift & DevOps', milestone: 'Ship it' },
] as const;

export type Stage = (typeof STAGES)[number];
export type StageId = Stage['id'];

export const STAGE_IDS: readonly StageId[] = STAGES.map((stage) => stage.id);

export function isStageId(value: string): value is StageId {
  return (STAGE_IDS as readonly string[]).includes(value);
}

/** The stage before `stageId`, or undefined for the first stage. */
export function getPreviousStageId(stageId: StageId): StageId | undefined {
  const index = STAGE_IDS.indexOf(stageId);
  return index > 0 ? STAGE_IDS[index - 1] : undefined;
}
