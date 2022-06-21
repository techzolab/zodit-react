import * as React from "react";
import { IZodit } from "zodit/types";

export interface ZoditProps {
	value: string;
	onChange?: (value: string) => void;
	onBlur?: (value: string) => void;
	config?: IZodit['options'];
}

export default class ZoditEditor extends React.Component<ZoditProps, any> {
	constructor(props: ZoditProps, context: any);
	render(): JSX.Element;
}
