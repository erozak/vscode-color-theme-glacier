import type { ColorDef } from '../types';
import type { ColorsOutput } from '../io';

export type TerminalColors = ColorDef<
  | 'background'
  | 'bold'
  | 'cursor'
  | 'cursorText'
  | 'foreground'
  | 'selectedText'
  | 'selection'
  | 'black' //         ANSI 00
  | 'red' //           ANSI 01
  | 'green' //         ANSI 02
  | 'yellow' //        ANSI 03
  | 'magenta' //       ANSI 05
  | 'cyan' //          ANSI 06
  | 'blue' //          ANSI 04
  | 'grey' //          ANSI 07
  | 'brightBlack' //   ANSI 08
  | 'brightRed' //     ANSI 09
  | 'brightGreen' //   ANSI 10
  | 'brightYellow' //  ANSI 11
  | 'brightBlue' //    ANSI 12
  | 'brightMagenta' // ANSI 13
  | 'brightCyan' //    ANSI 14
  | 'brightGrey' //    ANSI 15
>;

export type TerminalColorsOutput = ColorsOutput<TerminalColors>;
