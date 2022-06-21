import * as React from 'react';
import { IZodit } from 'zodit';

declare module 'zodit-react' {
	export interface IZoditEditorProps {
		value: string,
		config?: Partial<IZodit['options']>;
		onChange: (newValue: string) => void;
		onBlur: (newValue: string) => void;
	}
	const ZoditEditor: React.ComponentType<IZoditEditorProps>;
	export default ZoditEditor;
}
