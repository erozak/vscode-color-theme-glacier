/**
 * Ref: https://code.visualstudio.com/api/references/theme-color
 */

import Color = require('color');

import type { ThemeMeta } from '../types';
import type { ColorsOutput } from '../io';

type ThemeColorGroup<K extends string, C = string> = Partial<Record<K, C>>;

type PanelThemeColorGroup<C = string> = ThemeColorGroup<
  'background' | 'foreground' | 'border',
  C
>;

type CursorThemeColorGroup<C = string> = ThemeColorGroup<'background' | 'foreground', C>;

type IconColors<C = string> = ThemeColorGroup<'foreground', C>;

export type VscodeColorThemeActivityBarColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<
    | 'activeBackground'
    | 'activeBorder'
    | 'activeFocusBorder'
    | 'dropBorder'
    | 'inactiveForeground',
    C
  >;

export type VscodeColorThemeActivityBarBadgeColors<C = string> = ThemeColorGroup<
  'background' | 'foreground',
  C
>;

export type VscodeColorThemeBadgeColors<C = string> = ThemeColorGroup<
  'background' | 'foreground',
  C
>;

export type VscodeColorThemeBreadcrumbColors<C = string> = ThemeColorGroup<
  'activeSelectionForeground' | 'background' | 'foreground' | 'focusForeground',
  C
>;

export type VscodeColorThemeButtonColors<C = string> = ThemeColorGroup<
  | 'background'
  | 'foreground'
  | 'hoverBackground'
  | 'secondaryForeground'
  | 'secondaryBackground'
  | 'secondaryHoverBackground',
  C
>;

export type VscodeColorThemeCheckboxColors<C = string> = PanelThemeColorGroup<C>;

export type VscodeColorThemeCommonColors<C = string> = ThemeColorGroup<
  'focusBorder' | 'foreground' | 'descriptionForeground' | 'errorForeground',
  C
>;

export type VscodeColorThemeContrastColors<C = string> = ThemeColorGroup<
  'contrastActiveBorder' | 'contrastBorder',
  C
>;

export type VscodeColorThemeDebugConsoleColors<C = string> = ThemeColorGroup<
  'errorForeground' | 'infoForeground' | 'sourceForeground' | 'warningForeground',
  C
>;

export type VscodeColorThemeDebugConsoleInputIconColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeDebugExceptionWidgetColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VscodeColorThemeDebugIconColors<C = string> = ThemeColorGroup<
  | 'breakpointCurrentStackframeForeground'
  | 'breakpointDisabledForeground'
  | 'breakpointForeground'
  | 'breakpointStackframeForeground'
  | 'breakpointUnverifiedForeground'
  | 'continueForeground'
  | 'disconnectForeground'
  | 'pauseForeground'
  | 'restartForeground'
  | 'startForeground'
  | 'stepBackForeground'
  | 'stepIntoForeground'
  | 'stepOutForeground'
  | 'stepOverForeground'
  | 'stopForeground',
  C
>;

export type VscodeColorThemeDebugTokenExpressionColors<C = string> = ThemeColorGroup<
  'boolean' | 'error' | 'name' | 'number' | 'string' | 'value',
  C
>;

export type VscodeColorThemeDebugToolBarColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VscodeColorThemeDebugViewColors<C = string> = ThemeColorGroup<
  | 'exceptionLabelBackground'
  | 'exceptionLabelForeground'
  | 'stateLabelBackground'
  | 'stateLabelForeground'
  | 'valueChangedHighlight',
  C
>;

export type VscodeColorThemeDiffEditorColors<C = string> = ThemeColorGroup<
  | 'border'
  | 'diagonalFill'
  | 'insertedTextBackground'
  | 'insertedTextBorder'
  | 'removedTextBackground'
  | 'removedTextBorder',
  C
>;

export type VscodeColorThemeDropdownColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'listBackground', C>;

export type VscodeColorThemeEditorColors<C = string> = ThemeColorGroup<
  | 'background'
  | 'findMatchBackground'
  | 'findMatchBorder'
  | 'findMatchHighlightBackground'
  | 'findMatchHighlightBorder'
  | 'findRangeHighlightBackground'
  | 'findRangeHighlightBorder'
  | 'focusedStackFrameHighlightBackground'
  | 'foldBackground'
  | 'foreground'
  | 'hoverHighlightBackground'
  | 'inactiveSelectionBackground'
  | 'lineHighlightBackground'
  | 'lineHighlightBorder'
  | 'rangeHighlightBackground'
  | 'rangeHighlightBorder'
  | 'selectionBackground'
  | 'selectionForeground'
  | 'selectionHighlightBackground'
  | 'selectionHighlightBorder'
  | 'snippetFinalTabstopHighlightBackground'
  | 'snippetFinalTabstopHighlightBorder'
  | 'snippetTabstopHighlightBackground'
  | 'snippetTabstopHighlightBorder'
  | 'stackFrameHighlightBackground'
  | 'symbolHighlightBackground'
  | 'symbolHighlightBorder'
  | 'wordHighlightBackground'
  | 'wordHighlightBorder'
  | 'wordHighlightStrongBackground'
  | 'wordHighlightStrongBorder',
  C
>;

export type VscodeColorThemeEditorBracketMatchColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VscodeColorThemeEditorCodeLensColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeEditorErrorColors<C = string> = ThemeColorGroup<
  'foreground' | 'border',
  C
>;

export type VscodeColorThemeEditorGroupColors<C = string> = ThemeColorGroup<
  'border' | 'dropBackground' | 'emptyBackground' | 'focusedEmptyBorder',
  C
>;

export type VscodeColorThemeEditorGroupHeaderColors<C = string> = ThemeColorGroup<
  'border' | 'noTabsBackground' | 'tabsBackground' | 'tabsBorder',
  C
>;

export type VscodeColorThemeEditorGutterColors<C = string> = ThemeColorGroup<
  | 'addedBackground'
  | 'background'
  | 'commentRangeForeground'
  | 'deletedBackground'
  | 'foldingControlForeground'
  | 'modifiedBackground',
  C
>;

export type VscodeColorThemeEditorHintColors<C = string> = ThemeColorGroup<
  'border' | 'foreground',
  C
>;

export type VscodeColorThemeEditorHoverWidgetColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'statusBarBackground', C>;

export type VscodeColorThemeEditorIndentGuideColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background',
  C
>;

export type VscodeColorThemeEditorInfoColors<C = string> = ThemeColorGroup<
  'border' | 'foreground',
  C
>;

export type VscodeColorThemeEditorLineNumberColors<C = string> = ThemeColorGroup<
  'activeForeground' | 'foreground',
  C
>;

export type VscodeColorThemeEditorLinkColors<C = string> = ThemeColorGroup<
  'activeForeground',
  C
>;

export type VscodeColorThemeEditorMarkerNavigationColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VscodeColorThemeEditorMarkerNavigationErrorColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VscodeColorThemeEditorMarkerNavigationInfoColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VscodeColorThemeEditorMarkerNavigationWarningColors<
  C = string
> = ThemeColorGroup<'background', C>;

export type VscodeColorThemeEditorOverviewRulerColors<C = string> = ThemeColorGroup<
  | 'addedForeground'
  | 'background'
  | 'border'
  | 'bracketMatchForeground'
  | 'commonContentForeground'
  | 'currentContentForeground'
  | 'deletedForeground'
  | 'errorForeground'
  | 'findMatchForeground'
  | 'incomingContentForeground'
  | 'infoForeground'
  | 'modifiedForeground'
  | 'rangeHighlightForeground'
  | 'selectionHighlightForeground'
  | 'warningForeground'
  | 'wordHighlightForeground'
  | 'wordHighlightStrongForeground',
  C
>;

export type VscodeColorThemeEditorPaneColors<C = string> = ThemeColorGroup<'background', C>;

export type VscodeColorThemeEditorRulerColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeEditorSuggestWidgetColors<C = string> = PanelThemeColorGroup<
  C
> &
  ThemeColorGroup<'highlightForeground' | 'selectedBackground', C>;

export type VscodeColorThemeEditorUnnecescessaryCodeColors<C = string> = ThemeColorGroup<
  'border' | 'opacity',
  C
>;

export type VscodeColorThemeEditorWarningCodeColors<C = string> = ThemeColorGroup<
  'border' | 'foreground',
  C
>;

export type VscodeColorThemeEditorWhitespaceCodeColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeEditorWidgetCodeColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'resizeBorder', C>;

export type VscodeColorThemeExtensionBadgeCodeColors<C = string> = ThemeColorGroup<
  'remoteBackground' | 'remoteForeground',
  C
>;

export type VscodeColorThemeExtensionButtonColors<C = string> = ThemeColorGroup<
  'prominentBackground' | 'prominentForeground' | 'prominentHoverBackground',
  C
>;

export type VscodeColorThemeGitDecorationColors<C = string> = ThemeColorGroup<
  | 'addedResourceForeground'
  | 'conflictingResourceForeground'
  | 'deletedResourceForeground'
  | 'ignoredResourceForeground'
  | 'modifiedResourceForeground'
  | 'submoduleResourceForeground'
  | 'untrackedResourceForeground',
  C
>;

export type VscodeColorThemeIconColors<C = string> = ThemeColorGroup<'foreground', C>;

export type VscodeColorThemeImagePreviewColors<C = string> = ThemeColorGroup<'border', C>;

export type VscodeColorThemeInputColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'placeholderForeground', C>;

export type VscodeColorThemeInputOptionColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'activeBorder' | 'activeForeground',
  C
>;

export type VscodeColorThemeInputValidationColors<C = string> = ThemeColorGroup<
  | 'errorBackground'
  | 'errorBorder'
  | 'errorForeground'
  | 'infoBackground'
  | 'infoBorder'
  | 'infoForeground'
  | 'warningBackground'
  | 'warningBorder'
  | 'warningForeground',
  C
>;

export type VscodeColorThemeListColors<C = string> = ThemeColorGroup<
  | 'activeSelectionBackground'
  | 'activeSelectionForeground'
  | 'deemphasizedForeground'
  | 'dropBackground'
  | 'errorForeground'
  | 'filterMatchBackground'
  | 'filterMatchBorder'
  | 'focusBackground'
  | 'focusForeground'
  | 'highlightForeground'
  | 'hoverBackground'
  | 'hoverForeground'
  | 'inactiveFocusBackground'
  | 'inactiveSelectionBackground'
  | 'inactiveSelectionForeground'
  | 'invalidItemForeground'
  | 'warningForeground',
  C
>;

export type VscodeColorThemeListFilterWidgetColors<C = string> = ThemeColorGroup<
  'background' | 'noMatchesOutline' | 'outline',
  C
>;

export type VscodeColorThemeMenuColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<
    | 'selectionBackground'
    | 'selectionBorder'
    | 'selectionForeground'
    | 'separatorBackground',
    C
  >;

export type VscodeColorThemeMenubarColors<C = string> = ThemeColorGroup<
  'selectionBackground' | 'selectionBorder' | 'selectionForeground',
  C
>;

export type VscodeColorThemeMergeColors<C = string> = ThemeColorGroup<
  | 'border'
  | 'commonContentBackground'
  | 'commonHeaderBackground'
  | 'currentContentBackground'
  | 'currentHeaderBackground'
  | 'incomingContentBackground'
  | 'incomingHeaderBackground',
  C
>;

export type VscodeColorThemeMinimapColors<C = string> = ThemeColorGroup<
  | 'background'
  | 'errorHighlight'
  | 'findMatchHighlight'
  | 'selectionHighlight'
  | 'warningHighlight',
  C
>;

export type VscodeColorThemeMinimapGutterColors<C = string> = ThemeColorGroup<
  'addedBackground' | 'deletedBackground' | 'modifiedBackground',
  C
>;

export type VscodeColorThemeMinimapSliderColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background' | 'hoverBackground',
  C
>;

export type VscodeColorThemeNotebookColors<C = string> = ThemeColorGroup<
  | 'cellBorderColor'
  | 'cellHoverBackground'
  | 'cellInsertionIndicator'
  | 'cellStatusBarItemHoverBackground'
  | 'cellToolbarSeperator'
  | 'focusedCellBackground'
  | 'focusedCellBorder'
  | 'focusedCellShadow'
  | 'focusedEditorBorder'
  | 'outputContainerBackgroundColor',
  C
>;

export type VscodeColorThemeNotebookScrollbarSliderColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background' | 'hoverBackground',
  C
>;

export type VscodeColorThemeNotificationCenterColors<C = string> = ThemeColorGroup<
  'border',
  C
>;

export type VscodeColorThemeNotificationCenterHeaderColors<C = string> = ThemeColorGroup<
  'background' | 'foreground',
  C
>;

export type VscodeColorThemeNotificationLinkColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeNotificationsColors<C = string> = PanelThemeColorGroup<C>;

export type VscodeColorThemeNotificationToastColors<C = string> = ThemeColorGroup<
  'border',
  C
>;

export type VscodeColorThemePanelColors<C = string> = ThemeColorGroup<
  'background' | 'border' | 'dropBorder',
  C
>;

export type VscodeColorThemePanelInputColors<C = string> = ThemeColorGroup<'border', C>;

export type VscodeColorThemePanelSectionColors<C = string> = ThemeColorGroup<
  'border' | 'dropBackground',
  C
>;

export type VscodeColorThemePanelSectionHeaderColors<C = string> = PanelThemeColorGroup<C>;

export type VscodeColorThemePanelTitleColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'activeForeground' | 'inactiveForeground',
  C
>;

export type VscodeColorThemePeekViewColors<C = string> = ThemeColorGroup<'border', C>;

export type VscodeColorThemePeekViewEditorColors<C = string> = ThemeColorGroup<
  'background' | 'matchHighlightBackground' | 'matchHighlightBorder',
  C
>;

export type VscodeColorThemePeekViewEditorGutterColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VscodeColorThemePeekViewResultColors<C = string> = ThemeColorGroup<
  | 'background'
  | 'fileForeground'
  | 'lineForeground'
  | 'matchHighlightBackground'
  | 'selectionBackground'
  | 'selectionForeground',
  C
>;

export type VscodeColorThemePeekViewTitleColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VscodeColorThemePeekViewTitleDescriptionColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemePeekViewTitleLabelColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeProgressBarColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VscodeColorThemeScmColors<C = string> = ThemeColorGroup<'providerBorder', C>;

export type VscodeColorThemeScrollbarColors<C = string> = ThemeColorGroup<'shadow', C>;

export type VscodeColorThemeScrollbarSliderColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background' | 'hoverBackground',
  C
>;

export type VscodeColorThemeSearchEditorColors<C = string> = ThemeColorGroup<
  'findMatchBackground' | 'findMatchBorder' | 'textInputBorder',
  C
>;

export type VscodeColorThemeSelectionColors<C = string> = ThemeColorGroup<'background', C>;

export type VscodeColorThemeSideBarColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'dropBackground', C>;

export type VscodeColorThemeSideBarSectionHeaderColors<C = string> = PanelThemeColorGroup<
  C
>;

export type VscodeColorThemeSideBarTitleColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeStatusBarColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<
    | 'background'
    | 'border'
    | 'debuggingBackground'
    | 'debuggingBorder'
    | 'debuggingForeground'
    | 'foreground'
    | 'noFolderBackground'
    | 'noFolderBorder'
    | 'noFolderForeground',
    C
  >;

export type VscodeColorThemeStatusBarItemColors<C = string> = ThemeColorGroup<
  | 'activeBackground'
  | 'hoverBackground'
  | 'prominentBackground'
  | 'prominentForeground'
  | 'prominentHoverBackground'
  | 'remoteBackground'
  | 'remoteForeground',
  C
>;

export type VscodeColorThemeSymbolIconColors<C = string> = ThemeColorGroup<
  | 'arrayForeground'
  | 'booleanForeground'
  | 'classForeground'
  | 'colorForeground'
  | 'constantForeground'
  | 'enumeratorForeground'
  | 'enumeratorMemberForeground'
  | 'eventForeground'
  | 'fieldForeground'
  | 'fileForeground'
  | 'folderForeground'
  | 'constructorForeground'
  | 'functionForeground'
  | 'methodForeground'
  | 'interfaceForeground'
  | 'keyForeground'
  | 'keywordForeground'
  | 'moduleForeground'
  | 'namespaceForeground'
  | 'nullForeground'
  | 'numberForeground'
  | 'objectForeground'
  | 'operatorForeground'
  | 'packageForeground'
  | 'propertyForeground'
  | 'referenceForeground'
  | 'snippetForeground'
  | 'stringForeground'
  | 'structForeground'
  | 'textForeground'
  | 'typeParameterForeground'
  | 'unitForeground'
  | 'variableForeground',
  C
>;

export type VscodeColorThemeTabColors<C = string> = ThemeColorGroup<
  | 'activeBackground'
  | 'activeBorder'
  | 'activeBorderTop'
  | 'activeForeground'
  | 'activeModifiedBorder'
  | 'border'
  | 'hoverBackground'
  | 'hoverBorder'
  | 'hoverForeground'
  | 'inactiveBackground'
  | 'inactiveForeground'
  | 'inactiveModifiedBorder'
  | 'unfocusedActiveBackground'
  | 'unfocusedActiveBorder'
  | 'unfocusedActiveBorderTop'
  | 'unfocusedActiveForeground'
  | 'unfocusedActiveModifiedBorder'
  | 'unfocusedHoverBackground'
  | 'unfocusedHoverBorder'
  | 'unfocusedHoverForeground'
  | 'unfocusedInactiveBackground'
  | 'unfocusedInactiveForeground'
  | 'unfocusedInactiveModifiedBorder',
  C
>;

export type VscodeColorThemeTerminalColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<
    | 'ansiBlack'
    | 'ansiBlue'
    | 'ansiBrightBlack'
    | 'ansiBrightBlue'
    | 'ansiBrightCyan'
    | 'ansiBrightGreen'
    | 'ansiBrightMagenta'
    | 'ansiBrightRed'
    | 'ansiBrightWhite'
    | 'ansiBrightYellow'
    | 'ansiCyan'
    | 'ansiGreen'
    | 'ansiMagenta'
    | 'ansiRed'
    | 'ansiWhite'
    | 'ansiYellow'
    | 'selectionBackground',
    C
  >;

export type VscodeColorThemeTextBlockQuoteColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VscodeColorThemeTextCodeBlockColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VscodeColorThemeTextLinkColors<C = string> = ThemeColorGroup<
  'activeForeground' | 'foreground',
  C
>;

export type VscodeColorThemeTextPreformatColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeTextSeparatorColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VscodeColorThemeTreeColors<C = string> = ThemeColorGroup<
  'indentGuidesStroke',
  C
>;

export type VscodeColorThemeWalkThroughColors<C = string> = ThemeColorGroup<
  'embeddedEditorBackground',
  C
>;

export type VscodeColorThemeWelcomePageColors<C = string> = ThemeColorGroup<
  'background' | 'buttonBackground' | 'buttonHoverBackground',
  C
>;

export type VscodeColorThemeWidgetColors<C = string> = ThemeColorGroup<'shadow', C>;

export type VscodeColorThemeWindowColors<C = string> = ThemeColorGroup<
  'activeBorder' | 'inactiveBorder',
  C
>;

export interface VscodeColorThemeTokenColor<C = string> {
  name: string;
  scope: string[];
  settings: Partial<{
    fontStyle: string;
    foreground: C;
  }>;
}

export type VscodeColorThemeColors<C = string> = Partial<
  VscodeColorThemeContrastColors<C> &
    VscodeColorThemeCommonColors<C> & {
      activityBar: VscodeColorThemeActivityBarColors<C>;
      activityBarBadge: VscodeColorThemeActivityBarBadgeColors<C>;
      badge: VscodeColorThemeBadgeColors<C>;
      breadcrumb: VscodeColorThemeBreadcrumbColors<C>;
      button: VscodeColorThemeButtonColors<C>;
      checkbox: VscodeColorThemeCheckboxColors<C>;
      debugConsole: VscodeColorThemeDebugConsoleColors<C>;
      debugConsoleInputIcon: VscodeColorThemeDebugConsoleInputIconColors<C>;
      debugExceptionWidget: VscodeColorThemeDebugExceptionWidgetColors<C>;
      debugIcon: VscodeColorThemeDebugIconColors<C>;
      debugTokenExpression: VscodeColorThemeDebugTokenExpressionColors<C>;
      debugToolBar: VscodeColorThemeDebugToolBarColors<C>;
      debugView: VscodeColorThemeDebugViewColors<C>;
      diffEditor: VscodeColorThemeDiffEditorColors<C>;
      dropdown: VscodeColorThemeDropdownColors<C>;
      editor: VscodeColorThemeEditorColors<C>;
      editorBracketMatch: VscodeColorThemeEditorBracketMatchColors<C>;
      editorCodeLens: VscodeColorThemeEditorCodeLensColors<C>;
      editorCursor: CursorThemeColorGroup<C>;
      editorError: VscodeColorThemeEditorErrorColors<C>;
      editorGroup: VscodeColorThemeEditorGroupColors<C>;
      editorGroupHeader: VscodeColorThemeEditorGroupHeaderColors<C>;
      editorGutter: VscodeColorThemeEditorGutterColors<C>;
      editorHint: VscodeColorThemeEditorHintColors<C>;
      editorHoverWidget: VscodeColorThemeEditorHoverWidgetColors<C>;
      editorIndentGuide: VscodeColorThemeEditorIndentGuideColors<C>;
      editorInfo: VscodeColorThemeEditorInfoColors<C>;
      editorLightBulb: IconColors<C>;
      editorLightBulbAutoFix: IconColors<C>;
      editorLineNumber: VscodeColorThemeEditorLineNumberColors<C>;
      editorLink: VscodeColorThemeEditorLinkColors<C>;
      editorMarkerNavigation: VscodeColorThemeEditorMarkerNavigationColors<C>;
      editorMarkerNavigationError: VscodeColorThemeEditorMarkerNavigationErrorColors<C>;
      editorMarkerNavigationInfo: VscodeColorThemeEditorMarkerNavigationInfoColors<C>;
      editorMarkerNavigationWarning: VscodeColorThemeEditorMarkerNavigationWarningColors<C>;
      editorOverviewRuler: VscodeColorThemeEditorOverviewRulerColors<C>;
      editorPane: VscodeColorThemeEditorPaneColors<C>;
      editorRuler: VscodeColorThemeEditorRulerColors<C>;
      editorSuggestWidget: VscodeColorThemeEditorSuggestWidgetColors<C>;
      editorUnnecessaryCode: VscodeColorThemeEditorUnnecescessaryCodeColors<C>;
      editorWarning: VscodeColorThemeEditorWarningCodeColors<C>;
      editorWhitespace: VscodeColorThemeEditorWhitespaceCodeColors<C>;
      editorWidget: VscodeColorThemeEditorWidgetCodeColors<C>;
      extensionBadge: VscodeColorThemeExtensionBadgeCodeColors<C>;
      extensionButton: VscodeColorThemeExtensionButtonColors<C>;
      icon: VscodeColorThemeIconColors<C>;
      imagePreview: VscodeColorThemeImagePreviewColors<C>;
      input: VscodeColorThemeInputColors<C>;
      inputOption: VscodeColorThemeInputOptionColors<C>;
      inputValidation: VscodeColorThemeInputValidationColors<C>;
      list: VscodeColorThemeListColors<C>;
      listFilterWidget: VscodeColorThemeListFilterWidgetColors<C>;
      menu: VscodeColorThemeMenuColors<C>;
      menubar: VscodeColorThemeMenubarColors<C>;
      merge: VscodeColorThemeMergeColors<C>;
      minimap: VscodeColorThemeMinimapColors<C>;
      minimapGutter: VscodeColorThemeMinimapGutterColors<C>;
      minimapSlider: VscodeColorThemeMinimapSliderColors<C>;
      notebook: VscodeColorThemeNotebookColors<C>;
      notebookScrollbarSlider: VscodeColorThemeNotebookScrollbarSliderColors<C>;
      notebookStatusErrorIcon: IconColors<C>;
      notebookStatusRunningIcon: IconColors<C>;
      notebookStatusSuccessIcon: IconColors<C>;
      notificationCenter: VscodeColorThemeNotificationCenterColors<C>;
      notificationCenterHeader: VscodeColorThemeNotificationCenterHeaderColors<C>;
      notificationLink: VscodeColorThemeNotificationLinkColors<C>;
      notifications: VscodeColorThemeNotificationsColors<C>;
      notificationsErrorIcon: IconColors<C>;
      notificationsInfoIcon: IconColors<C>;
      notificationsWarningIcon: IconColors<C>;
      notificationToast: VscodeColorThemeNotificationToastColors<C>;
      panel: VscodeColorThemePanelColors<C>;
      panelInput: VscodeColorThemePanelInputColors<C>;
      panelSection: VscodeColorThemePanelSectionColors<C>;
      panelSectionHeader: VscodeColorThemePanelSectionHeaderColors<C>;
      panelTitle: VscodeColorThemePanelTitleColors<C>;
      peekView: VscodeColorThemePeekViewColors<C>;
      peekViewEditor: VscodeColorThemePeekViewEditorColors<C>;
      peekViewEditorGutter: VscodeColorThemePeekViewEditorGutterColors<C>;
      peekViewResult: VscodeColorThemePeekViewResultColors<C>;
      peekViewTitle: VscodeColorThemePeekViewTitleColors<C>;
      peekViewTitleDescription: VscodeColorThemePeekViewTitleDescriptionColors<C>;
      peekViewTitleLabel: VscodeColorThemePeekViewTitleLabelColors<C>;
      problemsErrorIcon: IconColors<C>;
      problemsInfoIcon: IconColors<C>;
      problemsWarningIcon: IconColors<C>;
      progressBar: VscodeColorThemeProgressBarColors<C>;
      scm: VscodeColorThemeScmColors<C>;
      scrollbar: VscodeColorThemeScrollbarColors<C>;
      scrollbarSlider: VscodeColorThemeScrollbarSliderColors<C>;
      searchEditor: VscodeColorThemeSearchEditorColors<C>;
      selection: VscodeColorThemeSelectionColors<C>;
      sideBar: VscodeColorThemeSideBarColors<C>;
      sideBarSectionHeader: VscodeColorThemeSideBarSectionHeaderColors<C>;
      sideBarTitle: VscodeColorThemeSideBarTitleColors<C>;
      statusBar: VscodeColorThemeStatusBarColors<C>;
      statusBarItem: VscodeColorThemeStatusBarItemColors<C>;
      symbolIcon: VscodeColorThemeSymbolIconColors<C>;
      tab: VscodeColorThemeTabColors<C>;
      terminal: VscodeColorThemeTerminalColors<C>;
      terminalCursor: CursorThemeColorGroup<C>;
      textBlockQuote: VscodeColorThemeTextBlockQuoteColors<C>;
      textCodeBlock: VscodeColorThemeTextCodeBlockColors<C>;
      textLink: VscodeColorThemeTextLinkColors<C>;
      textSeparator: VscodeColorThemeTextSeparatorColors<C>;
      textPreformat: VscodeColorThemeTextPreformatColors<C>;
      tree: VscodeColorThemeTreeColors<C>;
      walkThrough: VscodeColorThemeWalkThroughColors<C>;
      welcomePage: VscodeColorThemeWelcomePageColors<C>;
      widget: VscodeColorThemeWidgetColors<C>;
      window: VscodeColorThemeWindowColors<C>;
    }
>;

export interface VscodeColorTheme<C = string> extends ThemeMeta {
  colors?: VscodeColorThemeColors<C>;
  tokenColors?: VscodeColorThemeTokenColor<C>[];
}

export interface VscodeColorThemeJson extends ThemeMeta {
  colors?: Record<string, string>;
  tokenColors?: VscodeColorThemeTokenColor[];
  [key: string]: unknown;
}

export type VscodeOutput = ColorsOutput<{
  colors?: VscodeColorThemeColors<string | Color>;
  tokenColors?: VscodeColorThemeTokenColor<string | Color>[];
}>;
