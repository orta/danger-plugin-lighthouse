export interface LighthouseJSON {
  userAgent: string
  environment: Environment
  lighthouseVersion: string
  fetchTime: Date
  requestedUrl: string
  finalUrl: string
  runWarnings: any[]
  audits: Audits
  configSettings: ConfigSettings
  categories: Categories
  categoryGroups: CategoryGroups
  timing: Timing
  i18n: I18N
  stackPacks: any[]
}

export interface Audits {
  "is-on-https": AuditScore
  "redirects-http": AuditScore
  "service-worker": BootupTime
  "works-offline": AuditScore
  viewport: AuditScore
  "without-javascript": AuditScore
  "first-contentful-paint": CriticalRequestChains
  "first-meaningful-paint": CriticalRequestChains
  "load-fast-enough-for-pwa": BeijingPigeon
  "speed-index": BootupTime
  "screenshot-thumbnails": AuditScore
  "final-screenshot": AuditScore
  "estimated-input-latency": BootupTime
  "total-blocking-time": CriticalRequestChains
  "max-potential-fid": BeijingPigeon
  "errors-in-console": AuditScore
  "time-to-first-byte": CriticalRequestChains
  "first-cpu-idle": CriticalRequestChains
  interactive: BootupTime
  "user-timings": BeijingPigeon
  "critical-request-chains": CriticalRequestChains
  redirects: CriticalRequestChains
  "installable-manifest": AuditScore
  "apple-touch-icon": AuditScore
  "splash-screen": AuditScore
  "themed-omnibox": AuditScore
  "content-width": AuditScore
  "image-aspect-ratio": AuditScore
  deprecations: AuditScore
  "mainthread-work-breakdown": BeijingPigeon
  "bootup-time": BootupTime
  "uses-rel-preload": BootupTime
  "uses-rel-preconnect": BootupTime
  "font-display": AuditScore
  diagnostics: AuditScore
  "network-requests": BootupTime
  "network-rtt": BootupTime
  "network-server-latency": AuditScore
  "main-thread-tasks": BeijingPigeon
  metrics: CriticalRequestChains
  "offline-start-url": AuditScore
  "performance-budget": AuditScore
  "resource-summary": CriticalRequestChains
  "third-party-summary": CriticalRequestChains
  "pwa-cross-browser": AuditScore
  "pwa-page-transitions": AuditScore
  "pwa-each-page-has-url": AuditScore
  accesskeys: AuditScore
  "aria-allowed-attr": AuditScore
  "aria-required-attr": AuditScore
  "aria-required-children": AuditScore
  "aria-required-parent": AuditScore
  "aria-roles": AuditScore
  "aria-valid-attr-value": AuditScore
  "aria-valid-attr": AuditScore
  "audio-caption": AuditScore
  "button-name": AuditScore
  bypass: AuditScore
  "color-contrast": AuditScore
  "definition-list": AuditScore
  dlitem: AuditScore
  "document-title": AuditScore
  "duplicate-id": AuditScore
  "frame-title": AuditScore
  "html-has-lang": AuditScore
  "html-lang-valid": AuditScore
  "image-alt": AuditScore
  "input-image-alt": AuditScore
  label: AuditScore
  "layout-table": AuditScore
  "link-name": AuditScore
  list: AuditScore
  listitem: AuditScore
  "meta-refresh": BeijingPigeon
  "meta-viewport": BeijingPigeon
  "object-alt": BootupTime
  tabindex: AuditScore
  "td-headers-attr": BeijingPigeon
  "th-has-data-cells": AuditScore
  "valid-lang": AuditScore
  "video-caption": AuditScore
  "video-description": AuditScore
  "custom-controls-labels": AuditScore
  "custom-controls-roles": AuditScore
  "focus-traps": AuditScore
  "focusable-controls": AuditScore
  "heading-levels": AuditScore
  "interactive-element-affordance": AuditScore
  "logical-tab-order": BeijingPigeon
  "managed-focus": BeijingPigeon
  "offscreen-content-hidden": AuditScore
  "use-landmarks": BeijingPigeon
  "visual-order-follows-dom": AuditScore
  "uses-long-cache-ttl": BeijingPigeon
  "total-byte-weight": CriticalRequestChains
  "offscreen-images": CriticalRequestChains
  "render-blocking-resources": CriticalRequestChains
  "unminified-css": CriticalRequestChains
  "unminified-javascript": BeijingPigeon
  "unused-css-rules": BeijingPigeon
  "uses-webp-images": CriticalRequestChains
  "uses-optimized-images": BeijingPigeon
  "uses-text-compression": CriticalRequestChains
  "uses-responsive-images": BootupTime
  "efficient-animated-content": BeijingPigeon
  "appcache-manifest": AuditScore
  doctype: AuditScore
  "dom-size": AuditScore
  "external-anchors-use-rel-noopener": AuditScore
  "geolocation-on-start": AuditScore
  "no-document-write": BeijingPigeon
  "no-vulnerable-libraries": BootupTime
  "js-libraries": AuditScore
  "notification-on-start": BootupTime
  "password-inputs-can-be-pasted-into": AuditScore
  "uses-http2": BeijingPigeon
  "uses-passive-event-listeners": BootupTime
  "meta-description": BeijingPigeon
  "http-status-code": AuditScore
  "font-size": AuditScore
  "link-text": AuditScore
  "is-crawlable": AuditScore
  "robots-txt": AuditScore
  "tap-targets": BeijingPigeon
  hreflang: AuditScore
  plugins: AuditScore
  canonical: AuditScore
  "structured-data": AuditScore
}

export interface AuditScore {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  warnings?: any[]
  details?: PurpleDetails
  explanation?: string
  displayValue?: string
  numericValue?: number
}

export interface PurpleDetails {
  type: DebugDataType
  headings?: PurpleHeading[]
  items?: PurpleItem[]
  debugData?: DebugData
  timing?: number
  timestamp?: number
  data?: string
  summary?: PurpleSummary
  scale?: number
}

export interface DebugData {
  type: DebugDataType
  impact: Impact
  tags: string[]
}

export enum Impact {
  Serious = "serious",
}

export enum DebugDataType {
  Debugdata = "debugdata",
  Filmstrip = "filmstrip",
  Screenshot = "screenshot",
  Table = "table",
}

export interface PurpleHeading {
  key: string
  itemType: Channel
  text: string
  granularity?: number
  displayUnit?: string
}

export enum Channel {
  Bytes = "bytes",
  Code = "code",
  Link = "link",
  MS = "ms",
  Node = "node",
  Numeric = "numeric",
  Text = "text",
  URL = "url",
}

export interface PurpleItem {
  node?: Node
  numRequests?: number
  numScripts?: number
  numStylesheets?: number
  numFonts?: number
  numTasks?: number
  numTasksOver10ms?: number
  numTasksOver25ms?: number
  numTasksOver50ms?: number
  numTasksOver100ms?: number
  numTasksOver500ms?: number
  rtt?: number
  throughput?: number
  maxRtt?: number
  maxServerLatency?: number
  totalByteWeight?: number
  totalTaskTime?: number
  mainDocumentTransferSize?: number
  statistic?: string
  element?: ElementClass | string
  value?: string
  source?: Source
  description?: string
  url?: string
  wastedMs?: number
  selector?: string
  coverage?: string
  fontSize?: string
  failures?: ParseFailureReason[]
  isParseFailure?: boolean
  parseFailureReason?: ParseFailureReason
  name?: string
  npm?: string
  origin?: string
  serverResponseTime?: number
  timing?: number
  timestamp?: number
  data?: string
  themeColor?: null
}

export interface ElementClass {
  type: Channel
  value: string
}

export enum ParseFailureReason {
  NoManifestWasFetched = "No manifest was fetched",
  NoMetaNameThemeColorTagFound = 'No `<meta name="theme-color">` tag found',
}

export interface Node {
  type: Channel
  selector: string
  path: string
  snippet: string
  explanation?: string
  nodeLabel: string
}

export enum Source {
  LegibleText = "Legible text",
  Network = "network",
}

export interface PurpleSummary {}

export enum ScoreDisplayMode {
  Binary = "binary",
  Informative = "informative",
  Manual = "manual",
  NotApplicable = "notApplicable",
  Numeric = "numeric",
}

export interface BootupTime {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  numericValue?: number
  displayValue?: string
  details?: FluffyDetails
  warnings?: any[]
}

export interface FluffyDetails {
  type: PurpleType
  headings: FluffyHeading[]
  items: FluffyItem[]
  summary?: LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary
  overallSavingsMs?: number
  overallSavingsBytes?: number
}

export interface FluffyHeading {
  key: string
  itemType?: Channel
  text?: string
  granularity?: number
  displayUnit?: string
  valueType?: ValueType
  label?: Label
}

export enum Label {
  PotentialSavings = "Potential Savings",
  Size = "Size",
  URL = "URL",
}

export enum ValueType {
  Bytes = "bytes",
  TimespanMS = "timespanMs",
  URL = "url",
}

export interface FluffyItem {
  url?: string
  total?: number
  scripting?: number
  scriptParseCompile?: number
  startTime?: number
  endTime?: number
  transferSize?: number
  resourceSize?: number
  statusCode?: number
  mimeType?: MIMEType
  resourceType?: string
  origin?: string
  rtt?: number
  wastedMs?: number
}

export enum MIMEType {
  ApplicationJSON = "application/json",
  ApplicationJavascript = "application/javascript",
  FontWoff2 = "font/woff2",
  TextCSS = "text/css",
  TextHTML = "text/html",
  TextPlain = "text/plain",
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary {
  wastedMs?: number
}

export enum PurpleType {
  Criticalrequestchain = "criticalrequestchain",
  Debugdata = "debugdata",
  Opportunity = "opportunity",
  Table = "table",
}

export interface CriticalRequestChains {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  displayValue?: string
  details?: TentacledDetails
  numericValue?: number
  warnings?: any[]
}

export interface TentacledDetails {
  type: PurpleType
  chains?: { [key: string]: Chain }
  longestChain?: LongestChain
  items?: TentacledItem[]
  headings?: TentacledHeading[]
  overallSavingsMs?: number
  overallSavingsBytes?: number
  summary?: FluffySummary
}

export interface Chain {
  request: Request
  children: { [key: string]: Child }
}

export interface Child {
  request: Request
}

export interface Request {
  url: string
  startTime: number
  endTime: number
  responseReceivedTime: number
  transferSize: number
}

export interface TentacledHeading {
  key: string
  valueType?: ValueType
  label?: Label
  itemType?: Channel
  text?: string
  granularity?: number
}

export interface TentacledItem {
  firstContentfulPaint?: number
  firstMeaningfulPaint?: number
  firstCPUIdle?: number
  interactive?: number
  speedIndex?: number
  estimatedInputLatency?: number
  totalBlockingTime?: number
  observedNavigationStart?: number
  observedNavigationStartTs?: number
  observedFirstPaint?: number
  observedFirstPaintTs?: number
  observedFirstContentfulPaint?: number
  observedFirstContentfulPaintTs?: number
  observedFirstMeaningfulPaint?: number
  observedFirstMeaningfulPaintTs?: number
  observedTraceEnd?: number
  observedTraceEndTs?: number
  observedLoad?: number
  observedLoadTs?: number
  observedDomContentLoaded?: number
  observedDomContentLoadedTs?: number
  observedFirstVisualChange?: number
  observedFirstVisualChangeTs?: number
  observedLastVisualChange?: number
  observedLastVisualChangeTs?: number
  observedSpeedIndex?: number
  observedSpeedIndexTs?: number
  url?: string
  totalBytes?: number
  wastedMs?: number
  resourceType?: string
  label?: string
  requestCount?: number
  size?: number
  entity?: Entity
  transferSize?: number
  mainThreadTime?: number
  blockingTime?: number
}

export interface Entity {
  type: Channel
  text: string
  url: string
}

export interface LongestChain {
  duration: number
  length: number
  transferSize: number
}

export interface FluffySummary {
  wastedBytes: number
  wastedMs: number
}

export interface BeijingPigeon {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: ScoreDisplayMode
  numericValue?: number
  displayValue?: string
  details?: StickyDetails
  warnings?: any[]
}

export interface StickyDetails {
  type: PurpleType
  headings: TentacledHeading[]
  items: StickyItem[]
  overallSavingsMs?: number
  overallSavingsBytes?: number
  summary?: LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary
}

export interface StickyItem {
  duration?: number
  startTime?: number
  group?: string
  groupLabel?: string
  tapTarget?: Node
  overlappingTarget?: Node
  tapTargetScore?: number
  overlappingTargetScore?: number
  overlapScoreRatio?: number
  size?: string
  width?: number
  height?: number
  url?: string
  wastedBytes?: number
  wastedPercent?: number
  totalBytes?: number
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary {
  wastedBytes: number
}

export interface Categories {
  performance: Performance
  accessibility: Accessibility
  "best-practices": BestPractices
  seo: Accessibility
  pwa: Accessibility
}

export interface Accessibility {
  title: string
  description: string
  manualDescription: string
  auditRefs: AccessibilityAuditRef[]
  id: string
  score: number
}

export interface AccessibilityAuditRef {
  id: string
  weight: number
  group?: string
}

export interface BestPractices {
  title: string
  auditRefs: BestPracticesAuditRef[]
  id: string
  score: number
}

export interface BestPracticesAuditRef {
  id: string
  weight: number
}

export interface Performance {
  title: string
  auditRefs: AccessibilityAuditRef[]
  id: string
  score: number
}

export interface CategoryGroups {
  metrics: Metrics
  "load-opportunities": A11YAria
  budgets: A11YAria
  diagnostics: A11YAria
  "pwa-fast-reliable": Metrics
  "pwa-installable": Metrics
  "pwa-optimized": Metrics
  "a11y-best-practices": A11YAria
  "a11y-color-contrast": A11YAria
  "a11y-names-labels": A11YAria
  "a11y-navigation": A11YAria
  "a11y-aria": A11YAria
  "a11y-language": A11YAria
  "a11y-audio-video": A11YAria
  "a11y-tables-lists": A11YAria
  "seo-mobile": A11YAria
  "seo-content": A11YAria
  "seo-crawl": A11YAria
}

export interface A11YAria {
  title: string
  description: string
}

export interface Metrics {
  title: string
}

export interface ConfigSettings {
  output: string
  maxWaitForFcp: number
  maxWaitForLoad: number
  throttlingMethod: string
  throttling: Throttling
  auditMode: boolean
  gatherMode: boolean
  disableStorageReset: boolean
  emulatedFormFactor: string
  channel: Channel
  budgets: null
  locale: string
  blockedUrlPatterns: null
  additionalTraceCategories: null
  extraHeaders: null
  precomputedLanternData: null
  onlyAudits: null
  onlyCategories: null
  skipAudits: null
}

export interface Throttling {
  rttMs: number
  throughputKbps: number
  requestLatencyMs: number
  downloadThroughputKbps: number
  uploadThroughputKbps: number
  cpuSlowdownMultiplier: number
}

export interface Environment {
  networkUserAgent: string
  hostUserAgent: string
  benchmarkIndex: number
}

export interface I18N {
  rendererFormattedStrings: RendererFormattedStrings
  icuMessagePaths: any
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValue {
  values: LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues
  path: string
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues {
  totalBytes: number
}

export interface LighthouseCoreAuditsJSDisplayValue {
  values: LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues
  path: string
}

export interface LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues {
  itemCount: number
}

export interface LighthouseCoreAuditsContentWidthJSExplanation {
  values: LighthouseCoreAuditsContentWidthJSExplanationValues
  path: string
}

export interface LighthouseCoreAuditsContentWidthJSExplanationValues {
  innerWidth: number
  outerWidth: number
}

export interface LighthouseCoreAuditsResourceSummaryJSDisplayValue {
  values: LighthouseCoreAuditsResourceSummaryJSDisplayValueValues
  path: string
}

export interface LighthouseCoreAuditsResourceSummaryJSDisplayValueValues {
  requestCount: number
  byteCount: number
}

export interface LighthouseCoreAuditsSEOJSDisplayValue {
  values: LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues
  path: string
}

export interface LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues {
  decimalProportion: number
}

export interface LighthouseCore {
  values: LighthouseCoreAuditsThirdPartySummaryJSDisplayValueValues
  path: string
}

export interface LighthouseCoreAuditsThirdPartySummaryJSDisplayValueValues {
  timeInMs: number
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSaving {
  values: LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary
  path: string
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueMSSaving {
  values: LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary
  path: string
}

export interface RendererFormattedStrings {
  auditGroupExpandTooltip: string
  crcInitialNavigation: string
  crcLongestDurationLabel: string
  errorLabel: string
  errorMissingAuditInfo: string
  labDataTitle: string
  lsPerformanceCategoryDescription: string
  manualAuditsGroupTitle: string
  notApplicableAuditsGroupTitle: string
  opportunityResourceColumnLabel: string
  opportunitySavingsColumnLabel: string
  passedAuditsGroupTitle: string
  snippetCollapseButtonLabel: string
  snippetExpandButtonLabel: string
  thirdPartyResourcesLabel: string
  toplevelWarningsMessage: string
  varianceDisclaimer: string
  warningAuditsGroupTitle: string
  warningHeader: string
}

export interface Timing {
  entries: Entry[]
  total: number
}

export interface Entry {
  startTime: number
  name: string
  duration: number
  entryType: EntryType
}

export enum EntryType {
  Measure = "measure",
}
