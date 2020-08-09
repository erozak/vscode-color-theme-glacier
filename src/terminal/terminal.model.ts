import type { ColorValue } from '../types';
import type { ColorsOutput } from '../io';

export type TerminalColors = Partial<
  Record<
    | 'background'
    | 'badge'
    | 'bold'
    | 'cursor'
    | 'cursorGuide'
    | 'cursorText'
    | 'foreground'
    | 'selectedText'
    | 'selection'
    | 'tab'
    | 'underline'
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
    | 'brightGrey', //   ANSI 15
    ColorValue
  >
>;

export type TerminalColorsOutput = ColorsOutput<TerminalColors>;
