/**
 * Ref: https://code.visualstudio.com/api/references/theme-color
 */

type ThemeColorGroup<K extends string, C = string> = Partial<Record<K, C>>;

type PanelThemeColorGroup<C = string> = ThemeColorGroup<
  'background' | 'foreground' | 'border',
  C
>;

type CursorThemeColorGroup<C = string> = ThemeColorGroup<'background' | 'foreground', C>;

type IconColors<C = string> = ThemeColorGroup<'foreground', C>;

export type VsCodeColorThemeActivityBarColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<
    | 'activeBackground'
    | 'activeBorder'
    | 'activeFocusBorder'
    | 'dropBorder'
    | 'inactiveForeground',
    C
  >;

export type VsCodeColorThemeActivityBarBadgeColors<C = string> = ThemeColorGroup<
  'background' | 'foreground',
  C
>;

export type VsCodeColorThemeBadgeColors<C = string> = ThemeColorGroup<
  'background' | 'foreground',
  C
>;

export type VsCodeColorThemeBreadcrumbColors<C = string> = ThemeColorGroup<
  'activeSelectionForeground' | 'background' | 'foreground' | 'focusForeground',
  C
>;

export type VsCodeColorThemeButtonColors<C = string> = ThemeColorGroup<
  | 'background'
  | 'foreground'
  | 'hoverBackground'
  | 'secondaryForeground'
  | 'secondaryBackground'
  | 'secondaryHoverBackground',
  C
>;

export type VsCodeColorThemeCheckboxColors<C = string> = PanelThemeColorGroup<C>;

export type VsCodeColorThemeCommonColors<C = string> = ThemeColorGroup<
  'focusBorder' | 'foreground' | 'descriptionForeground' | 'errorForeground',
  C
>;

export type VsCodeColorThemeContrastColors<C = string> = ThemeColorGroup<
  'contrastActiveBorder' | 'contrastBorder',
  C
>;

export type VsCodeColorThemeDebugConsoleColors<C = string> = ThemeColorGroup<
  'errorForeground' | 'infoForeground' | 'sourceForeground' | 'warningForeground',
  C
>;

export type VsCodeColorThemeDebugConsoleInputIconColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeDebugExceptionWidgetColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VsCodeColorThemeDebugIconColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeDebugTokenExpressionColors<C = string> = ThemeColorGroup<
  'boolean' | 'error' | 'name' | 'number' | 'string' | 'value',
  C
>;

export type VsCodeColorThemeDebugToolBarColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VsCodeColorThemeDebugViewColors<C = string> = ThemeColorGroup<
  | 'exceptionLabelBackground'
  | 'exceptionLabelForeground'
  | 'stateLabelBackground'
  | 'stateLabelForeground'
  | 'valueChangedHighlight',
  C
>;

export type VsCodeColorThemeDiffEditorColors<C = string> = ThemeColorGroup<
  | 'border'
  | 'diagonalFill'
  | 'insertedTextBackground'
  | 'insertedTextBorder'
  | 'removedTextBackground'
  | 'removedTextBorder',
  C
>;

export type VsCodeColorThemeDropdownColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'listBackground', C>;

export type VsCodeColorThemeEditorColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeEditorBracketMatchColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VsCodeColorThemeEditorCodeLensColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeEditorErrorColors<C = string> = ThemeColorGroup<
  'foreground' | 'border',
  C
>;

export type VsCodeColorThemeEditorGroupColors<C = string> = ThemeColorGroup<
  'border' | 'dropBackground' | 'emptyBackground' | 'focusedEmptyBorder',
  C
>;

export type VsCodeColorThemeEditorGroupHeaderColors<C = string> = ThemeColorGroup<
  'border' | 'noTabsBackground' | 'tabsBackground' | 'tabsBorder',
  C
>;

export type VsCodeColorThemeEditorGutterColors<C = string> = ThemeColorGroup<
  | 'addedBackground'
  | 'background'
  | 'commentRangeForeground'
  | 'deletedBackground'
  | 'foldingControlForeground'
  | 'modifiedBackground',
  C
>;

export type VsCodeColorThemeEditorHintColors<C = string> = ThemeColorGroup<
  'border' | 'foreground',
  C
>;

export type VsCodeColorThemeEditorHoverWidgetColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'statusBarBackground', C>;

export type VsCodeColorThemeEditorIndentGuideColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background',
  C
>;

export type VsCodeColorThemeEditorInfoColors<C = string> = ThemeColorGroup<
  'border' | 'foreground',
  C
>;

export type VsCodeColorThemeEditorLineNumberColors<C = string> = ThemeColorGroup<
  'activeForeground' | 'foreground',
  C
>;

export type VsCodeColorThemeEditorLinkColors<C = string> = ThemeColorGroup<
  'activeForeground',
  C
>;

export type VsCodeColorThemeEditorMarkerNavigationColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VsCodeColorThemeEditorMarkerNavigationErrorColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VsCodeColorThemeEditorMarkerNavigationInfoColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VsCodeColorThemeEditorMarkerNavigationWarningColors<
  C = string
> = ThemeColorGroup<'background', C>;

export type VsCodeColorThemeEditorOverviewRulerColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeEditorPaneColors<C = string> = ThemeColorGroup<'background', C>;

export type VsCodeColorThemeEditorRulerColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeEditorSuggestWidgetColors<C = string> = PanelThemeColorGroup<
  C
> &
  ThemeColorGroup<'highlightForeground' | 'selectedBackground', C>;

export type VsCodeColorThemeEditorUnnecescessaryCodeColors<C = string> = ThemeColorGroup<
  'border' | 'opacity',
  C
>;

export type VsCodeColorThemeEditorWarningCodeColors<C = string> = ThemeColorGroup<
  'border' | 'foreground',
  C
>;

export type VsCodeColorThemeEditorWhitespaceCodeColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeEditorWidgetCodeColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'resizeBorder', C>;

export type VsCodeColorThemeExtensionBadgeCodeColors<C = string> = ThemeColorGroup<
  'remoteBackground' | 'remoteForeground',
  C
>;

export type VsCodeColorThemeExtensionButtonColors<C = string> = ThemeColorGroup<
  'prominentBackground' | 'prominentForeground' | 'prominentHoverBackground',
  C
>;

export type VsCodeColorThemeGitDecorationColors<C = string> = ThemeColorGroup<
  | 'addedResourceForeground'
  | 'conflictingResourceForeground'
  | 'deletedResourceForeground'
  | 'ignoredResourceForeground'
  | 'modifiedResourceForeground'
  | 'submoduleResourceForeground'
  | 'untrackedResourceForeground',
  C
>;

export type VsCodeColorThemeIconColors<C = string> = ThemeColorGroup<'foreground', C>;

export type VsCodeColorThemeImagePreviewColors<C = string> = ThemeColorGroup<'border', C>;

export type VsCodeColorThemeInputColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'placeholderForeground', C>;

export type VsCodeColorThemeInputOptionColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'activeBorder' | 'activeForeground',
  C
>;

export type VsCodeColorThemeInputValidationColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeListColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeListFilterWidgetColors<C = string> = ThemeColorGroup<
  'background' | 'noMatchesOutline' | 'outline',
  C
>;

export type VsCodeColorThemeMenuColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<
    | 'selectionBackground'
    | 'selectionBorder'
    | 'selectionForeground'
    | 'separatorBackground',
    C
  >;

export type VsCodeColorThemeMenubarColors<C = string> = ThemeColorGroup<
  'selectionBackground' | 'selectionBorder' | 'selectionForeground',
  C
>;

export type VsCodeColorThemeMergeColors<C = string> = ThemeColorGroup<
  | 'border'
  | 'commonContentBackground'
  | 'commonHeaderBackground'
  | 'currentContentBackground'
  | 'currentHeaderBackground'
  | 'incomingContentBackground'
  | 'incomingHeaderBackground',
  C
>;

export type VsCodeColorThemeMinimapColors<C = string> = ThemeColorGroup<
  | 'background'
  | 'errorHighlight'
  | 'findMatchHighlight'
  | 'selectionHighlight'
  | 'warningHighlight',
  C
>;

export type VsCodeColorThemeMinimapGutterColors<C = string> = ThemeColorGroup<
  'addedBackground' | 'deletedBackground' | 'modifiedBackground',
  C
>;

export type VsCodeColorThemeMinimapSliderColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background' | 'hoverBackground',
  C
>;

export type VsCodeColorThemeNotebookColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeNotebookScrollbarSliderColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background' | 'hoverBackground',
  C
>;

export type VsCodeColorThemeNotificationCenterColors<C = string> = ThemeColorGroup<
  'border',
  C
>;

export type VsCodeColorThemeNotificationCenterHeaderColors<C = string> = ThemeColorGroup<
  'background' | 'foreground',
  C
>;

export type VsCodeColorThemeNotificationLinkColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeNotificationsColors<C = string> = PanelThemeColorGroup<C>;

export type VsCodeColorThemeNotificationToastColors<C = string> = ThemeColorGroup<
  'border',
  C
>;

export type VsCodeColorThemePanelColors<C = string> = ThemeColorGroup<
  'background' | 'border' | 'dropBorder',
  C
>;

export type VsCodeColorThemePanelInputColors<C = string> = ThemeColorGroup<'border', C>;

export type VsCodeColorThemePanelSectionColors<C = string> = ThemeColorGroup<
  'border' | 'dropBackground',
  C
>;

export type VsCodeColorThemePanelSectionHeaderColors<C = string> = PanelThemeColorGroup<C>;

export type VsCodeColorThemePanelTitleColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'activeForeground' | 'inactiveForeground',
  C
>;

export type VsCodeColorThemePeekViewColors<C = string> = ThemeColorGroup<'border', C>;

export type VsCodeColorThemePeekViewEditorColors<C = string> = ThemeColorGroup<
  'background' | 'matchHighlightBackground' | 'matchHighlightBorder',
  C
>;

export type VsCodeColorThemePeekViewEditorGutterColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VsCodeColorThemePeekViewResultColors<C = string> = ThemeColorGroup<
  | 'background'
  | 'fileForeground'
  | 'lineForeground'
  | 'matchHighlightBackground'
  | 'selectionBackground'
  | 'selectionForeground',
  C
>;

export type VsCodeColorThemePeekViewTitleColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VsCodeColorThemePeekViewTitleDescriptionColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemePeekViewTitleLabelColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeProgressBarColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VsCodeColorThemeScmColors<C = string> = ThemeColorGroup<'providerBorder', C>;

export type VsCodeColorThemeScrollbarColors<C = string> = ThemeColorGroup<'shadow', C>;

export type VsCodeColorThemeScrollbarSliderColors<C = string> = ThemeColorGroup<
  'activeBackground' | 'background' | 'hoverBackground',
  C
>;

export type VsCodeColorThemeSearchEditorColors<C = string> = ThemeColorGroup<
  'findMatchBackground' | 'findMatchBorder' | 'textInputBorder',
  C
>;

export type VsCodeColorThemeSelectionColors<C = string> = ThemeColorGroup<'background', C>;

export type VsCodeColorThemeSideBarColors<C = string> = PanelThemeColorGroup<C> &
  ThemeColorGroup<'dropBackground', C>;

export type VsCodeColorThemeSideBarSectionHeaderColors<C = string> = PanelThemeColorGroup<
  C
>;

export type VsCodeColorThemeSideBarTitleColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeStatusBarColors<C = string> = PanelThemeColorGroup<C> &
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

export type VsCodeColorThemeStatusBarItemColors<C = string> = ThemeColorGroup<
  | 'activeBackground'
  | 'hoverBackground'
  | 'prominentBackground'
  | 'prominentForeground'
  | 'prominentHoverBackground'
  | 'remoteBackground'
  | 'remoteForeground',
  C
>;

export type VsCodeColorThemeSymbolIconColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeTabColors<C = string> = ThemeColorGroup<
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

export type VsCodeColorThemeTerminalColors<C = string> = PanelThemeColorGroup<C> &
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

export type VsCodeColorThemeTextBlockQuoteColors<C = string> = ThemeColorGroup<
  'background' | 'border',
  C
>;

export type VsCodeColorThemeTextCodeBlockColors<C = string> = ThemeColorGroup<
  'background',
  C
>;

export type VsCodeColorThemeTextLinkColors<C = string> = ThemeColorGroup<
  'activeForeground' | 'foreground',
  C
>;

export type VsCodeColorThemeTextPreformatColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeTextSeparatorColors<C = string> = ThemeColorGroup<
  'foreground',
  C
>;

export type VsCodeColorThemeTreeColors<C = string> = ThemeColorGroup<
  'indentGuidesStroke',
  C
>;

export type VsCodeColorThemeWalkThroughColors<C = string> = ThemeColorGroup<
  'embeddedEditorBackground',
  C
>;

export type VsCodeColorThemeWelcomePageColors<C = string> = ThemeColorGroup<
  'background' | 'buttonBackground' | 'buttonHoverBackground',
  C
>;

export type VsCodeColorThemeWidgetColors<C = string> = ThemeColorGroup<'shadow', C>;

export type VsCodeColorThemeWindowColors<C = string> = ThemeColorGroup<
  'activeBorder' | 'inactiveBorder',
  C
>;

export interface VsCodeColorThemeTokenColor<C = string> {
  name: string;
  scope: string[];
  settings: Partial<{
    fontStyle: string;
    foreground: C;
  }>;
}

export type VsCodeColorThemeColors<C = string> = Partial<
  VsCodeColorThemeContrastColors<C> &
    VsCodeColorThemeCommonColors<C> & {
      activityBar: VsCodeColorThemeActivityBarColors<C>;
      activityBarBadge: VsCodeColorThemeActivityBarBadgeColors<C>;
      badge: VsCodeColorThemeBadgeColors<C>;
      breadcrumb: VsCodeColorThemeBreadcrumbColors<C>;
      button: VsCodeColorThemeButtonColors<C>;
      checkbox: VsCodeColorThemeCheckboxColors<C>;
      debugConsole: VsCodeColorThemeDebugConsoleColors<C>;
      debugConsoleInputIcon: VsCodeColorThemeDebugConsoleInputIconColors<C>;
      debugExceptionWidget: VsCodeColorThemeDebugExceptionWidgetColors<C>;
      debugIcon: VsCodeColorThemeDebugIconColors<C>;
      debugTokenExpression: VsCodeColorThemeDebugTokenExpressionColors<C>;
      debugToolBar: VsCodeColorThemeDebugToolBarColors<C>;
      debugView: VsCodeColorThemeDebugViewColors<C>;
      diffEditor: VsCodeColorThemeDiffEditorColors<C>;
      dropdown: VsCodeColorThemeDropdownColors<C>;
      editor: VsCodeColorThemeEditorColors<C>;
      editorBracketMatch: VsCodeColorThemeEditorBracketMatchColors<C>;
      editorCodeLens: VsCodeColorThemeEditorCodeLensColors<C>;
      editorCursor: CursorThemeColorGroup<C>;
      editorError: VsCodeColorThemeEditorErrorColors<C>;
      editorGroup: VsCodeColorThemeEditorGroupColors<C>;
      editorGroupHeader: VsCodeColorThemeEditorGroupHeaderColors<C>;
      editorGutter: VsCodeColorThemeEditorGutterColors<C>;
      editorHint: VsCodeColorThemeEditorHintColors<C>;
      editorHoverWidget: VsCodeColorThemeEditorHoverWidgetColors<C>;
      editorIndentGuide: VsCodeColorThemeEditorIndentGuideColors<C>;
      editorInfo: VsCodeColorThemeEditorInfoColors<C>;
      editorLightBulb: IconColors<C>;
      editorLightBulbAutoFix: IconColors<C>;
      editorLineNumber: VsCodeColorThemeEditorLineNumberColors<C>;
      editorLink: VsCodeColorThemeEditorLinkColors<C>;
      editorMarkerNavigation: VsCodeColorThemeEditorMarkerNavigationColors<C>;
      editorMarkerNavigationError: VsCodeColorThemeEditorMarkerNavigationErrorColors<C>;
      editorMarkerNavigationInfo: VsCodeColorThemeEditorMarkerNavigationInfoColors<C>;
      editorMarkerNavigationWarning: VsCodeColorThemeEditorMarkerNavigationWarningColors<C>;
      editorOverviewRuler: VsCodeColorThemeEditorOverviewRulerColors<C>;
      editorPane: VsCodeColorThemeEditorPaneColors<C>;
      editorRuler: VsCodeColorThemeEditorRulerColors<C>;
      editorSuggestWidget: VsCodeColorThemeEditorSuggestWidgetColors<C>;
      editorUnnecessaryCode: VsCodeColorThemeEditorUnnecescessaryCodeColors<C>;
      editorWarning: VsCodeColorThemeEditorWarningCodeColors<C>;
      editorWhitespace: VsCodeColorThemeEditorWhitespaceCodeColors<C>;
      editorWidget: VsCodeColorThemeEditorWidgetCodeColors<C>;
      extensionBadge: VsCodeColorThemeExtensionBadgeCodeColors<C>;
      extensionButton: VsCodeColorThemeExtensionButtonColors<C>;
      icon: VsCodeColorThemeIconColors<C>;
      imagePreview: VsCodeColorThemeImagePreviewColors<C>;
      input: VsCodeColorThemeInputColors<C>;
      inputOption: VsCodeColorThemeInputOptionColors<C>;
      inputValidation: VsCodeColorThemeInputValidationColors<C>;
      list: VsCodeColorThemeListColors<C>;
      listFilterWidget: VsCodeColorThemeListFilterWidgetColors<C>;
      menu: VsCodeColorThemeMenuColors<C>;
      menubar: VsCodeColorThemeMenubarColors<C>;
      merge: VsCodeColorThemeMergeColors<C>;
      minimap: VsCodeColorThemeMinimapColors<C>;
      minimapGutter: VsCodeColorThemeMinimapGutterColors<C>;
      minimapSlider: VsCodeColorThemeMinimapSliderColors<C>;
      notebook: VsCodeColorThemeNotebookColors<C>;
      notebookScrollbarSlider: VsCodeColorThemeNotebookScrollbarSliderColors<C>;
      notebookStatusErrorIcon: IconColors<C>;
      notebookStatusRunningIcon: IconColors<C>;
      notebookStatusSuccessIcon: IconColors<C>;
      notificationCenter: VsCodeColorThemeNotificationCenterColors<C>;
      notificationCenterHeader: VsCodeColorThemeNotificationCenterHeaderColors<C>;
      notificationLink: VsCodeColorThemeNotificationLinkColors<C>;
      notifications: VsCodeColorThemeNotificationsColors<C>;
      notificationsErrorIcon: IconColors<C>;
      notificationsInfoIcon: IconColors<C>;
      notificationsWarningIcon: IconColors<C>;
      notificationToast: VsCodeColorThemeNotificationToastColors<C>;
      panel: VsCodeColorThemePanelColors<C>;
      panelInput: VsCodeColorThemePanelInputColors<C>;
      panelSection: VsCodeColorThemePanelSectionColors<C>;
      panelSectionHeader: VsCodeColorThemePanelSectionHeaderColors<C>;
      panelTitle: VsCodeColorThemePanelTitleColors<C>;
      peekView: VsCodeColorThemePeekViewColors<C>;
      peekViewEditor: VsCodeColorThemePeekViewEditorColors<C>;
      peekViewEditorGutter: VsCodeColorThemePeekViewEditorGutterColors<C>;
      peekViewResult: VsCodeColorThemePeekViewResultColors<C>;
      peekViewTitle: VsCodeColorThemePeekViewTitleColors<C>;
      peekViewTitleDescription: VsCodeColorThemePeekViewTitleDescriptionColors<C>;
      peekViewTitleLabel: VsCodeColorThemePeekViewTitleLabelColors<C>;
      problemsErrorIcon: IconColors<C>;
      problemsInfoIcon: IconColors<C>;
      problemsWarningIcon: IconColors<C>;
      progressBar: VsCodeColorThemeProgressBarColors<C>;
      scm: VsCodeColorThemeScmColors<C>;
      scrollbar: VsCodeColorThemeScrollbarColors<C>;
      scrollbarSlider: VsCodeColorThemeScrollbarSliderColors<C>;
      searchEditor: VsCodeColorThemeSearchEditorColors<C>;
      selection: VsCodeColorThemeSelectionColors<C>;
      sideBar: VsCodeColorThemeSideBarColors<C>;
      sideBarSectionHeader: VsCodeColorThemeSideBarSectionHeaderColors<C>;
      sideBarTitle: VsCodeColorThemeSideBarTitleColors<C>;
      statusBar: VsCodeColorThemeStatusBarColors<C>;
      statusBarItem: VsCodeColorThemeStatusBarItemColors<C>;
      symbolIcon: VsCodeColorThemeSymbolIconColors<C>;
      tab: VsCodeColorThemeTabColors<C>;
      terminal: VsCodeColorThemeTerminalColors<C>;
      terminalCursor: CursorThemeColorGroup<C>;
      textBlockQuote: VsCodeColorThemeTextBlockQuoteColors<C>;
      textCodeBlock: VsCodeColorThemeTextCodeBlockColors<C>;
      textLink: VsCodeColorThemeTextLinkColors<C>;
      textSeparator: VsCodeColorThemeTextSeparatorColors<C>;
      textPreformat: VsCodeColorThemeTextPreformatColors<C>;
      tree: VsCodeColorThemeTreeColors<C>;
      walkThrough: VsCodeColorThemeWalkThroughColors<C>;
      welcomePage: VsCodeColorThemeWelcomePageColors<C>;
      widget: VsCodeColorThemeWidgetColors<C>;
      window: VsCodeColorThemeWindowColors<C>;
    }
>;

export interface VsCodeColorTheme<C = string> {
  colors?: VsCodeColorThemeColors<C>;
  tokenColors?: VsCodeColorThemeTokenColor<C>[];
}

export interface VsCodeColorThemeJson {
  colors?: Record<string, string>;
  tokenColors?: VsCodeColorThemeTokenColor[];
}
