# React Zodit WYSIWYG Editor
 
## Installation

```bash
npm install @techzolab/zodit-react --save
```

## Update editor version
```bash
npm update @techzolab/zodit-react
```

## Run demo
```bash
npm install --dev
npm run demo
```

and open
```
http://localhost:4000/
```

## Usage

### 1. Require and use Zodit-react component inside your application.

```jsx
import React, {useState, useRef, useMemo} from 'react';
import ZoditEditor from "@techzolab/zodit-react";

const Example = ({placeholder}) => {
	const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = useMemo({
		readonly: false // all options from https://techzolab.net/zodit/doc/,
		placeholder: placeholder || 'Start typings...'
	}, [placeholder])

	return (
            <ZoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        );
}
```


License
-----
This package is available under `MIT` License.
