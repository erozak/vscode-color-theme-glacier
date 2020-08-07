import type {
  TextColors,
  LinkColors,
  SeverityColors,
  OperationColors,
  BadgeColors,
  ButtonColors,
  TokenColors,
  ContrastColors,
} from '../types';

import { makeOpacityParams } from '../types';
import * as Colors from '../colors';

export const darkThemeOpacityParams = makeOpacityParams({
  primaryText: 0.93,
  secondaryText: 0.85,
  hintText: 0.67,
  inactive: 0.52,
  disabled: 0.38,
});

export const darkThemeBackgroundColor = Colors.GREY[900];

export const darkThemeTextColors: TextColors = {
  primary: Colors.WHITE[500].alpha(darkThemeOpacityParams.primaryText),
  secondary: Colors.WHITE[500].alpha(darkThemeOpacityParams.secondaryText),
  hint: Colors.WHITE[500].alpha(darkThemeOpacityParams.hintText),
  inactive: Colors.WHITE[500].alpha(darkThemeOpacityParams.inactive),
  disabled: Colors.WHITE[500].alpha(darkThemeOpacityParams.disabled),
};

export const darkThemePrimaryButtonParams: ButtonColors = {
  foreground: darkThemeTextColors.primary,
  background: Colors.BLUE[700],
  hoverBackground: Colors.BLUE[500],
};

export const darkThemeSecondaryButtonParams: ButtonColors = {
  foreground: darkThemeTextColors.primary,
  background: Colors.CYAN[500],
  hoverBackground: Colors.CYAN[300],
};

export const darkThemeLinkColors: LinkColors = {
  inactive: Colors.CYAN[500].alpha(darkThemeOpacityParams.primaryText),
  active: Colors.CYAN[300].alpha(darkThemeOpacityParams.primaryText),
};

export const darkThemeBadgeColors: BadgeColors = {
  foreground: darkThemeTextColors.primary,
  background: Colors.BLUE[100],
};

export const darkThemeOperationColors: OperationColors = {
  confliction: Colors.YELLOW[500],
  insertion: Colors.GREEN[500],
  deletion: Colors.RED[500],
  ingore: Colors.GREY[300].alpha(darkThemeOpacityParams.primaryText),
  modification: Colors.BLUE[500],
  untrack: Colors.WHITE[500],
  submodule: Colors.CYAN[500],
};

export const darkThemeSeverityColors: SeverityColors = {
  error: Colors.RED[300],
  info: Colors.BLUE[300],
  warning: Colors.YELLOW[300],
  success: Colors.GREEN[300],
};

export const darkThemeTokenColors: TokenColors = {
  boolean: Colors.BLUE[100],
  error: Colors.RED[500],
  name: Colors.WHITE[500],
  number: Colors.GREEN[500],
  string: Colors.YELLOW[500],
  value: Colors.CYAN[500],
};

export const darkThemeContrastColors: ContrastColors = {
  border: darkThemeBackgroundColor.alpha(0.76),
  activeBorder: Colors.TRANSPARENT,
};

export default {
  foreground: darkThemeTextColors.primary,
  background: darkThemeBackgroundColor,
  badge: darkThemeBadgeColors,
  contrast: darkThemeContrastColors,
  primaryButton: darkThemePrimaryButtonParams,
  secondaryButton: darkThemeSecondaryButtonParams,
  link: darkThemeLinkColors,
  text: darkThemeTextColors,
  operation: darkThemeOperationColors,
  severity: darkThemeSeverityColors,
  token: darkThemeTokenColors,
} as ThemeColors;
