export type Text = number | string;

export type Rgb = [Text, Text, Text] | { r: Text; g: Text; b: Text };

export type Rgba = [Text, Text, Text, Text] | { r: Text; g: Text; b: Text; a: Text };

export type Color = Rgb | Rgba | Text;

export type Palette<K extends Text> = Record<K, Color>;
