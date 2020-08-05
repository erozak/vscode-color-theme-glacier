/**
 * Ref: https://code.visualstudio.com/api/references/theme-color
 */

type ThemeColorGroup<K extends string> = Partial<Record<K, string>>;

export type VsCodeColorThemeContrastColors = ThemeColorGroup<
  'contrastActiveBorder' | 'contrastBorder'
>;

export type VsCodeColorThemeCommonColors = ThemeColorGroup<
  'focusBorder' | 'foreground' | 'descriptionForeground' | 'errorForeground'
>;

export type VsCodeColorThemeWindowColors = ThemeColorGroup<
  'activeBorder' | 'inactiveBorder'
>;

export type VsCodeColorThemeTextLinkColors = ThemeColorGroup<
  'activeForeground' | 'foreground'
>;

export type VsCodeColorThemeInputOptionColors = ThemeColorGroup<
  'activeBackground' | 'activeBorder' | 'activeForeground'
>;

export type VsCodeColorThemeInputValidationColors = ThemeColorGroup<
  | 'errorBackground'
  | 'errorBorder'
  | 'errorForeground'
  | 'infoBackground'
  | 'infoBorder'
  | 'infoForeground'
  | 'warningBackground'
  | 'warningBorder'
  | 'warningForeground'
>;

type PaneThemeColorGroup = ThemeColorGroup<'background' | 'foreground' | 'border'>;

export type VsCodeColorThemeCheckboxColors = PaneThemeColorGroup;

export type VsCodeColorThemeDropdownColors = PaneThemeColorGroup &
  ThemeColorGroup<'listBackground'>;

export type VsCodeColorThemeInputColors = PaneThemeColorGroup &
  ThemeColorGroup<'placeholderForeground'>;

export type VsCodeColorThemeButtonColors = ThemeColorGroup<
  | 'background'
  | 'foreground'
  | 'hoverBackground'
  | 'secondaryForeground'
  | 'secondaryBackground'
  | 'secondaryHoverBackground'
>;

export type VsCodeColorThemeWidgetColors = ThemeColorGroup<'shadow'>;
export type VsCodeColorThemeTextSeparatorColors = ThemeColorGroup<'foreground'>;
export type VsCodeColorThemeTextPreformatColors = ThemeColorGroup<'foreground'>;
export type VsCodeColorThemeTextBlockQuoteColors = ThemeColorGroup<'background' | 'border'>;
export type VsCodeColorThemeTextCodeBlockColors = ThemeColorGroup<'background'>;

export type VsCodeColorThemeColors = Partial<
  VsCodeColorThemeContrastColors &
    VsCodeColorThemeCommonColors & {
      button: VsCodeColorThemeButtonColors;
      checkbox: VsCodeColorThemeCheckboxColors;
      dropdown: VsCodeColorThemeDropdownColors;
      input: VsCodeColorThemeInputColors;
      inputOption: VsCodeColorThemeInputOptionColors;
      inputValidation: VsCodeColorThemeInputValidationColors;
      textBlockQuote: VsCodeColorThemeTextBlockQuoteColors;
      textCodeBlock: VsCodeColorThemeTextCodeBlockColors;
      textLink: VsCodeColorThemeTextLinkColors;
      textSeparator: VsCodeColorThemeTextSeparatorColors;
      textPreformat: VsCodeColorThemeTextPreformatColors;
      widget: VsCodeColorThemeWidgetColors;
      window: VsCodeColorThemeWindowColors;
    }
>;
